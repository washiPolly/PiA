import React, { useEffect, useState } from 'react';
import Footer from "../Components/Footer";
import Form from "../Components/Form";
import Button from "../Components/Button";
import Items from "../Components/ItemInfo";
import Weather from "../Components/Weather";
import BudgetChart from "../Components/BudgetChart";
import { TableCloset } from "../Components/Table";
import API from "../Utils/API.js"
import GooleSearchBar from '../Components/GooleSearchBar';
import FileUpload from '../Components/FileUpload';
import FormUploader from '../Components/FormUploader';
import Shopping from '../Components/Shopping';


export default function Closet() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadCloset()
  }, [])

  const loadCloset = () => {
    API.getinventoryItems()
      .then(res => { return setItems(res.data) })
    // need to filter either the API call or the data res to only display closet items
  }





  return (


    <div className="MainClosetDiv">
      <div className="col-md-12">
        <div className="container-fluid" >

          <div classname="wishlist" style={{ paddingLeft: "20px" }}>
            <div style={{ float: "left", paddingTop: "35px", margin: "30px", marginLeft: "100px" }}>
              {/* <Form /> */}
              <FormUploader />
            </div>
            <div className="container-fluid">

              <div className="row dashboard-col">
                <Weather />
              </div>
              <div className="row dashboard-col">
                <Weather />
              </div>
              <div className="row dashboard-col" style={{ marginLeft: "100px" }}>
                <Shopping />
              </div>
              {/* <div className="col-sm dashboard-col">
            <Weather />
          </div> */}



              {/* <div class="budgetChartDiv">
              <BudgetChart id="myChart" width="400" height="400" />
            </div> */}
              <div className="row col-sm-12 mb-5">
                <TableCloset items={items} category={"Closet"} />
                <TableCloset items={items} category={"Donations"} />
                {/* {generateTable(items)} */}
              </div>
            </div>
            {/* <GooleSearchBar /> */}



            <Footer />
          </div >
        </div >
      </div >
    </div >
  );
}
