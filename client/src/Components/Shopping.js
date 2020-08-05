import React, { useState } from "react";

const Shopping = () => {


    const [formObject, setFormObject] = useState({
        shop: " ",

    })

    const handleChange = (event) => {
        event.preventDefault();
        const shop = event.target.value;
        setFormObject({ shop: shop })
        console.log(formObject)
    }


    const openTab = (event) => {

        event.preventDefault();

        window.open("https://www.google.com/search?q=" + formObject.shop, "_blank")
        console.log(formObject)
    }



    return (
        <div style={{ background: "white", padding: "50px", borderRadius: "5px" }}>
            <form class="form-inline">
                <div class="form-group mb-2">
                    <h5>Shop</h5>
                </div>
                <div class="form-group mx-sm-3 mb-2">
                    <input onChange={handleChange} placeholder="Search Google" type="text" class="form-control" name="shop" />
                    <button type="submit" onClick={openTab} className="btn btn-primary mb-2">Search</button>
                </div>

            </form>
        </div>
    )
}

export default Shopping
