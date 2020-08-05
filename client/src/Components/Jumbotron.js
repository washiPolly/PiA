import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 3em;
  background: rgba(193, 238, 255, 0.7);
  text-align: center;
  color: #53599a;
  margin-bottom: 25px;
  width: 100%;
  border-radius: 10px;
`;

export default function Jumbotron() {
  return (
    <Wrapper>
      <h1>Hello, I am PiA</h1>
      <p>Your Personal Inventory Assistant. Let me help you get organized.</p>
      <div className="homeIconsDiv">
        <table className="table iconTable">
          <tr>
            <td><h6 className="h6icons">   <i className="fas fa-tshirt homeIcons"></i> Keep Track of your Closet</h6></td>
            <td><h6 className="h6icons">  <i className="fas fa-shopping-cart homeIcons"></i> Shop and Add to your Inventory</h6></td>
            <td><h6 className="h6icons"><i className="fas fa-dragon homeIcons"></i> Sort and Organize your Collections</h6></td>
          </tr>
          <tr className="table-borderless">
            <td> <h6 className="h6icons"><i className="fab fa-btc homeIcons"></i> Review & Stay on Budget</h6></td>
            <td> <h6 className="h6icons"><i className="fas fa-bell homeIcons"></i> Set Up Alerts and Reminders</h6></td>
            <td> <h6 className="h6icons"><i className="fas fa-file-alt homeIcons"></i> Organize all your Personal Documents</h6></td>
          </tr>
        </table>
      </div>
    </Wrapper>

  );
}
