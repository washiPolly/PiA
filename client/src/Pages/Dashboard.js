import React from "react";
import PropTypes from "prop-types";
import Card from "../Components/Card";
import Search from "../Components/Search";
import Weather from "../Components/Weather";
import Form from "../Components/Form"
import BudgetChart from "../Components/BudgetChart"
import Footer from "../Components/Footer";
import dashCloset from "../Images/dash-closet.jpg"
import dashCollectables from "../Images/dash-collectables.jpg"
import dashPaperwork from "../Images/dash-paperwork.jpg"
import TaskManager from "../Components/TaskManager/TaskManager";
import { TableCloset } from "../Components/Table";
import FormUploader from "../Components/FormUploader";
import BudgetTracker from "../Components/BudgetTracker/BudgetTracker";



// import Reducer from "../Components/Reducer"
const Dashboard = (props) => {

  return (
    <div className="dashboardDiv">
      <div className="container-fluid dashboard">
        <div className="col">
          <div className="row">
            <div className="col-sm dashboard-col text-white">
              <a href="closet">
                <div className="card">
                  <img src={dashCloset} className="card-img" style={{ height: "200px" }} alt="closet" />
                  <div className="card-img-overlay">
                    <h2 id="dashCards" className="card-title">Closet</h2>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-sm dashboard-col text-white">
              <a href="collectables">
                <div className="card">
                  <img src={dashCollectables} className="card-img" style={{ height: "200px" }} alt="Collectables" />
                  <div className="card-img-overlay">
                    <h2 id="dashCards" className="card-title">Collectibles</h2>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-sm dashboard-col text-white">
              <a href="paperwork">
                <div className="card">
                  <img src={dashPaperwork} className="card-img" style={{ height: "200px" }} alt="Paperwork" />
                  <div className="card-img-overlay">
                    <h2 id="dashCards" className="card-title">Paperwork</h2>
                  </div>
                </div>
              </a>
            </div>

          </div>
          {/* <div className="row"><div className="col-sm dashboard-col">
              <h3>Add</h3>
              <Form />
            </div></div> */}
          <div style={{ float: "left", paddingTop: "35px", paddingBottom: "75px", margin: "3px" }}>
            {/* <Form /> */}
            <FormUploader />
          </div>


        </div>
      </div>
      <div class="budgetChartDiv" style={{ width: "55%", float: "left" }}>
        <BudgetChart id="myChart" />
        <BudgetTracker />
      </div>
      <Footer />
    </div >
  );
};
Dashboard.propTypes = {};
export default Dashboard;