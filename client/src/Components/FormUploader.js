import Button from "./Button";
import API from "../Utils/API"
import React, { Fragment, useState } from 'react'
import Message from './Message';
import axios from 'axios';

// use reducer for switch states statements
// actions and displays


const FormUploader = (props) => {


    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState('');



    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);

    }





    const [formObject, setFormObject] = useState({
        invCategory: " ",
        invItemName: " ",
        invItemDescription: " ",
        invItemImgUrl: " ",
        important: "",
    })
    console.log(API)

    // don't need when using checkboxes
    const handleChangeCategory = (event) => {
        event.preventDefault();
        const invCategory = event.target.options[event.target.selectedIndex].text;

        setFormObject({ ...formObject, invCategory: invCategory })

    }

    const handleChangeItem = (event) => {
        event.preventDefault();
        const itemName = event.target.value;
        console.log(itemName)
        setFormObject({ ...formObject, invItemName: itemName })
    }

    const handleChangeDescription = (event) => {
        event.preventDefault();
        const invItemDescription = event.target.value;
        console.log(invItemDescription)
        setFormObject({ ...formObject, invItemDescription: invItemDescription })
    }

    const handleChangeImportant = (event) => {
        event.preventDefault();
        const target = event.target;
        let important = target.name === 'important' ? target.checked : target.value
        console.log(important)
        if (important === true) {
            important = "Yes"
            setFormObject({ ...formObject, important: important })
        } else {
            important = "No"
            setFormObject({ ...formObject, important: important })
        }
    }


    const fileSave = (event) => {
        event.preventDefault();
        const imageUrl = uploadedFile.filePath;
        setFormObject({ ...formObject, invItemImgUrl: imageUrl })
        console.log(imageUrl)
    }

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const { fileName, filePath } = res.data;

            setUploadedFile({ fileName, filePath });
            console.log(filePath)
            setMessage('File Uploaded');
            const imageUrl = filePath;
            setFormObject({ ...formObject, invItemImgUrl: imageUrl })
            console.log(imageUrl)
        } catch (err) {
            if (err.response.status === 500) {
                setMessage('There was a problem with the Server');
            } else {
                setMessage(err.response.data.msg);
            }
        }
    }

    const handleFormSave = (event) => {

        // event.preventDefault();
        console.log("Item has been saved!")
        console.log(formObject)

        API.saveinventoryItem(formObject)
    }



    const cancelItem = () => {

        // clears all input data and resets the option area and sends user back to 
        // the dashboard page
        console.log("Help me")
        setFormObject({
            invCategory: " ",
            invItemName: " ",
            invItemDescription: " ",
            invItemImgUrl: " ",
            important: false,
        })
    }

    return (
        <div className="card form" style={{ boxShadow: "0 15px 30px rgba(0, 0, 0, 0.4)" }}>
            <h5 className="lead registerTitle mt-4">Add An Item</h5>

            <div className="card-body">

                <form onSubmit={(event) => handleFormSave(event)}>
                    <div className="form-group">
                        {/* use checkboxes (use for ref) */}
                        <label for="sell">Select Category:</label>
                        <select id="sell" className="form-control" onChange={handleChangeCategory} name="invCategory">
                            <option >None</option>
                            <option >Closet</option>
                            <option >Collectibles</option>
                            <option >Paperwork</option>
                            <option >Donations</option>

                        </select>
                        <br />
                        <label for="name">Item Name:</label>
                        <input id="name" className="form-control" onChange={handleChangeItem} placeholder="Item name..." name="invItemName" />
                        <br />
                        <label for="comment">Item Description:</label>
                        <textarea id="comment" className="form-control" placeholder="Item description..." onChange={handleChangeDescription} rows="10" name="invItemDescription" />
                        <br />
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" onChange={handleChangeImportant} name="important" />
                                <label className="form-check-label">Favorite</label>
                            </div>
                        </div>

                        <Fragment>
                            {message ? <Message msg={message} /> : null}
                            <form onSubmit={handleFormSave}>
                                <div className="custom-file mb-4">

                                    <input name="imageUrl" type="file" className="custom-file-input" id="customFile" onChange={onChange} />
                                    <label className="custom-file-label col-xs-4" htmlFor="customFile">{filename}</label>
                                </div>

                                <input onClick={onSubmit} value="Upload" className="btn btn-primary" />

                            </form>

                            {uploadedFile ? (<div className="row mt-5">
                                <div className="col-md-3 m-auto">
                                    <h5 className="text-center">{uploadedFile.fileName}</h5>
                                    <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
                                </div>
                            </div>) : null}

                        </Fragment>


                    </div>
                    <div className="btn-group">
                        <Button type="submit" href="./dashboard" buttonName={"Save"} />
                        <Button onClick={cancelItem} buttonName={"Cancel"} />
                    </div>
                </form>
            </div>
        </div>

    );
}


export default FormUploader;