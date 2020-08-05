import React, { useState } from "react";
import Button from "./Button";
import API from "../Utils/API"
import Fragment from "./FileUpload"



// use reducer for switch states statements
// actions and displays


function Form() {
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
    const invItemImgUrl = event.target.value;
    setFormObject({ ...formObject, invItemImgUrl: invItemImgUrl })
    console.log(invItemImgUrl)
  }

  const handleFormSave = (event) => {

    event.preventDefault();
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
            <Fragment onChange={fileSave} />
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

export default Form;