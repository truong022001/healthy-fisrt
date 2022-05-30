import React, {useState, SetStateAction} from 'react';
import './style.css';
import axios from 'axios';
function RegistrationForm() {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [gender, setGender] = useState(null);
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [identityCardNumber, setIdentityCardNumber] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "name"){
            setName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }
        if(id === "phoneNumber"){
            setPhoneNumber(value);
        }
        if(id === "gender") {
            setGender(value);
        }
        if(id === "dateOfBirth") {
            setDateOfBirth(value);
        }
        if(id === "identityCardNumber") {
            setIdentityCardNumber(value);
        }

    }

    const handleSubmit  = () => {
        console.log(name,email,password,confirmPassword,phoneNumber,gender,dateOfBirth,identityCardNumber);
        axios.post("http://localhost:5000/user/register", {
            name: name,
            email: email,
            password: password,
            retypePassword: confirmPassword,
            phoneNumber: phoneNumber,
            gender: gender,
            dateOfBirth: dateOfBirth,
            identityCardNumber: identityCardNumber
      })
      .then(function (response) {
        console.log(response);
        alert(response.data.message);
        window.location = 'http://localhost:3000/';
      })
      .catch(function (error) {
        console.log(error);
        alert(error.response.data.message);
      });
    }
    const handleKeypress = e => {
        //it triggers by pressing the enter key
      if (e.charCode === 13) {
        handleSubmit();
      }
    }
    return(
        <div className="form">
            <h2>Registration Form</h2>
            <div className="form-body">
                <div className="name">
                    <label className="form__label" for="name">Name </label>
                    <input className="form__input" type="text" value={name} onChange = {(e) => handleInputChange(e)} id="name" onKeyPress={handleKeypress} placeholder="Your Name"/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} onKeyPress={handleKeypress} placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} onKeyPress={handleKeypress} placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} onKeyPress={handleKeypress} placeholder="Confirm Password"/>
                </div>
                <div className="phoneNumber">
                    <label className="form__label" for="phoneNumber">Phone Number </label>
                    <input  type="text" name="" id="phoneNumber" value={phoneNumber}  className="form__input" onChange = {(e) => handleInputChange(e)} onKeyPress={handleKeypress} placeholder="phoneNumber"/>
                </div>
                <div className="gender">
                    <label className="form__label" for="gender">Gender </label>
                    <input  type="radio" name="gender" id="gender" value={'Nam'}  className="form__input" onChange = {(e) => handleInputChange(e)} /> Nam &ensp;

                    <input  type="radio" name="gender" id="gender" value={'Nữ'}  className="form__input" onChange = {(e) => handleInputChange(e)}/> Nữ
                </div>
                <div className="dateOfBirth">
                    <label className="form__label" for="dateOfBirth">DOB </label>
                    <input  type="date" name="" id="dateOfBirth" value={dateOfBirth}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="dateOfBirth"/>
                </div>
                <div className="identityCardNumber">
                    <label className="form__label" for="identityCardNumber">Identity Card Number </label>
                    <input  type="text" name="" id="identityCardNumber" value={identityCardNumber}  className="form__input" onChange = {(e) => handleInputChange(e)} onKeyPress={handleKeypress} placeholder="Identity Card Number"/>
                </div>
            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
            </div>
        </div>
       
    )       
}   

export default RegistrationForm;