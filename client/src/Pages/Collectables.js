import React, { useState, useEffect } from 'react'
import Button from "../Components/Button";
import Items from "../Components/ItemInfo"
import FileUpload from "../Components/FileUpload";
import Form from "../Components/Form";
import TableCollectibles from '../Components/TableCollectibles';
import Wishlist from "../Components/Wishlist";
import Axios from 'axios';
import { Provider } from "../Components/wishlistContext";
import WishlistAdd from '../Components/WishlistAdd';
import WishlistHeader from '../Components/WishlistHeader';
import API from '../Utils/API';
import TaskManager from '../Components/TaskManager/TaskManager';
import { TableCloset } from "../Components/Table";
import Footer from '../Components/Footer';
import FormUploader from '../Components/FormUploader';




export default function Collectables() {

  const [data, getData] = useState([]);

  const [items, setItems] = useState([]);

  useEffect(() => {
    loadCloset()
  }, setItems)

  const loadCloset = () => {
    API.getinventoryItems()
      .then(res => { return setItems(res.data) })
    // need to filter either the API call or the data res to only display closet items
  }



  return (


    <div className="MainClosetDiv">
      <div className="col-md-12" style={{ justifyItems: "center" }}>
        <div className="container-fluid" >
          <Provider>

            <div classname="wishlist" style={{ paddingLeft: "20px" }}>
              <div style={{ float: "left", paddingTop: "35px", margin: "30px", marginLeft: "230px" }}>
                {/* <Form /> */}
                <FormUploader />
              </div>
              <div style={{
                float: "left", marginTop: "65px", paddingBottom: "30px"
              }}>
                <TaskManager />
              </div>

            </div>

            {/* <div>
              <TableCollectibles />
            </div> */}
          </Provider>
          <div className="row col-sm-12 mb-5">
            <TableCloset items={items} category={"Collectibles"} />
          </div>

        </div>
      </div >
      <Footer />
    </div >


  );
}