import { useState } from "react";
import { Navigate } from "react-router-dom";
import "./checkout.css";

export const Checkout = () => {

    const [status, setStatus] = useState(false);

    let nameValue;
    let emailValue;
    let phoneValue;
    let addressValue;

    const handleName = (e) => {
        nameValue = e.target.value;
    }

    const handleEmail = (e) => {
        emailValue = e.target.value;
    }

    const handlePhNo = (e) => {
        phoneValue = e.target.value;
    }

    const handleAddress = (e) => {
        addressValue = e.target.value;
    }

    const handleClick = (e) => {
        e.preventDefault();

        if(nameValue.length < 3 || nameValue.length === 0) {
            alert("Enter Valid name");
        }

        else if(!emailValue.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            alert("Enter Valid email address");
        }   

        else if(phoneValue.length !== 10) {
            alert("Enter Valid phone number");
        }

        else if(addressValue.length < 10) {
            alert("Enter Valid address");
        }

        else {
            console.log("Navigate");
            setStatus(true);
        }
    };

    if(status) {
        return <Navigate to={'/confirmation'} />;
    }

    return(
        <div>
            <div className="checkOutHeading">Enter Checkout details</div>
            <form onSubmit={handleClick}>
                <label>Enter Name</label>
                <input onChange={handleName} type="text" />
                <label>Enter Email id</label>
                <input onChange={handleEmail} type="text" />
                <label>Enter Phone no</label>
                <input onChange={handlePhNo} type="number" />
                <label>Enter Address</label>
                <input onChange={handleAddress} type="text" />
                <button className="checkOutButton">Submit</button>
            </form>
        </div>
    )
};