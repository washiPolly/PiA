import React from 'react'
import Button from '../Button'

const BudgetTracker = () => {
    return (
        <div>
            <form >
                <div className="form-row" style={{ padding: "15px", margin: "30px" }}>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Name of Transaction" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Transaction Amount" />
                    </div>
                    <div className="col">
                        <button type="submit" href="./dashboard" className="btn btn-primary" style={{ marginTop: "0px" }}> + Add Funds</button>
                    </div>
                </div>
            </form>
            <table className="table">

                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Transaction</th>
                        <th scope="col">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Clothing</td>
                        <td>$45.00</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Donations</td>
                        <td>$74.00</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Collectibles</td>
                        <td>$299.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default BudgetTracker
