import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Create = () => {
  const [firstname, setFirstName] = useState("");
  const [secondname, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clciekd");
    axios
      .post("https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube", {
        firstname: firstname,
        secondname: secondname,
        email: email,
        city: city,
        state: state,
      })
      .then(() => {
        history("/read");
      });
  };

  return (
    <>
      <div className="d-flex justify-content-between m-2">
        <h1>STUDENT REGISTRATION FORM</h1>
        <Link to="/read">
          <button className="btn btn-primary">Show Data</button>
        </Link>
      </div>
      
<form className="row g-3">
<div className=" d-flex justify-content-between m-2">
        <div className="form-check ">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
    Student
</div>
<div className="form-check">
  <input className="form-check-input" type="radio"name="flexRadioDefault" id="flexRadioDefault2" checked/>
   Parent
</div></div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">First name</label>
    <input type="text" class="form-control" id="validationDefault01"  required  onChange={(e) => setFirstName(e.target.value)}/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault02" className="form-label">Last name</label>
    <input type="text" class="form-control" id="validationDefault02"  required  onChange={(e) => setSecondName(e.target.value)}/>
  </div>
  <div className="col-md-4">
    <label for="validationDefaultUsername" className="form-label">Username</label>
    <div className="input-group">
      <span className="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" className="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required onChange={(e) => setEmail(e.target.value)}/>
    </div>
  </div>
  <div className="col-md-6">
    <label for="validationDefault03" className="form-label">City</label>
    <input type="text" class="form-control" id="validationDefault03" required onChange={(e) => setCity(e.target.value)}/>
  </div>
  <div className="col-md-3">
    <label for="validationDefault04" className="form-label">State</label>
    <select className="form-select" id="validationDefault04" required onChange={(e) => setState(e.target.value)}>
    <option value="select">Select</option>
<option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
<option value="Daman and Diu">Daman and Diu</option>
<option value="Delhi">Delhi</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Puducherry">Puducherry</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jammu and Kashmir">Jammu and Kashmir</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>
    </select>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Submit </button>
  </div>
</form>
    </>
  );
};

export default Create;