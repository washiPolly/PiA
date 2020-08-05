import React, { useEffect, useState } from 'react';
import Footer from "../Components//Footer";
import Button from "../Components/Button";
import Form from "../Components/Form";
import TableDocuments from "../Components/TableDocuments";
import GoogleEventBtn from "../Components/GoogleEventBtn";
import ReactCalendar from "../Components/ReactCalendar";
import FileUpload from "../Components/FileUpload";
import FormBackup from "../Components/FormBackup";
import { TableCloset } from "../Components/Table";
import API from "../Utils/API.js"
import FormUploader from '../Components/FormUploader';


export default function Paperwork() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadCloset()
  }, [])

  const loadCloset = () => {
    console.log("request launched")
    API.getinventoryItems()
      .then(res => {

        console.log("response is in", res)
        return setItems(res.data)
      })
    // need to filter either the API call or the data res to only display closet items
  }

  return (

    <div className="MainPaperworkDiv">
      <div className="container-fluid">



        <div style={{ float: "left", paddingTop: "35px", marginTop: "30px", marginRight: "30px", marginLeft: "200px" }}>
          {/* <Form /> */}
          <FormUploader />
        </div>
        <div style={{ justifyItems: "center" }}>
          <div className="reactCalendar" style={{ float: "left" }} >
            <ReactCalendar />

          </div>    <div style={{ float: "left", margin: "10px" }}>
            <GoogleEventBtn />
          </div>


        </div>




        <div className="row col-sm-12 mb-5">
          <TableCloset items={items} category={"Paperwork"} />
        </div>


      </div>
      <Footer />
    </div>


  );
}