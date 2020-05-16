import React from "react";
import axios from "axios";
import "../App.css";

export default class Book extends React.Component {

  state = {
    first_name: "",
    last_name: "",
    organization_name: "",
    email: "",
    phone: "",
    description_of_request: ""
  };

  handleAlert = () => {
    alert(
      "You're informtaion has been submitted. Please allow up to 24 hours for response"
    );
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log(event.target.elements[0].value);
    console.log(event.target.elements[1].value);
    console.log(event.target.elements[2].value);
    console.log(event.target.elements[3].value);
    console.log(event.target.elements[4].value);
    console.log(event.target.elements[5].value);
    axios.post(`http://localhost:8080/api/book`, {
      first_name: event.target.elements[0].value,
      last_name: event.target.elements[1].value,
      organization_name: event.target.elements[2].value,
      email: event.target.elements[3].value,
      phone: event.target.elements[4].value,
      description_of_request: event.target.elements[5].value,

    });
  };
  render() {
    return (
      
      // Book Us Title - animation
      <div class="container ">
           <div class="foo">
      <span class="letter" data-letter="B">B</span>
      <span class="letter" data-letter="O">O</span>
      <span class="letter" data-letter="O">O</span>
      <span class="letter" data-letter="K">K &nbsp;</span>
      <span class="letter" data-letter="U">U</span>
      <span class="letter" data-letter="S">S</span>
      </div>
      
        <header className="Form">
          <form onSubmit={this.handleSubmit}>
            {/* First Name Form */}
            <div className="form-row text-white-50 ">
            <div class="col-md-4">
              <label htmlFor="exampleInputFirstName">First Name</label>
              <input
                type="name"
                className="form-control"
                id="InputFirstName"
                placeholder="First Name"
                onChange={this.handleChange}
              />
          
          </div>
          <div class="col-md-4 ">
            {/* Last Name Form */}
        
              <label htmlFor="exampleInputLastName">Last Name</label>
              <input
                type="name"
                className="form-control"
                id="InputLastName"
                placeholder="Last Name"
              />
               </div>

               <div class="col-md-4 ">
            {/* Last Name Form */}
        
              <label htmlFor="exampleInputLastName">Organization Name</label>
              <input
                type="name"
                className="form-control"
                id="OrganizationName"
                placeholder="Organization Name"
              />
               </div>
               </div>
        
            {/* Email Form */}
            <div className="form-row text-white-50 ">
            <div class="col-md-4 ">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input
                type="email"
                className="form-control"
                id="InputEmail1"
                aria-describedby="emailHelp"
                placeholder="You@example.com"
              />
            </div>
            {/* Phone Number Form */}
            <div class="col-md-4 ">
            <div className="form-group text-white-50 ">
                <label htmlFor="inputZip">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPhone"
                  placeholder="Phone Number"
                />
              </div>
              </div>
              </div>
          
           
          
            {/* Additional Comments Form */}
            <div className="form-group text-white-50">
              <label htmlFor="inputdescription_of_request">
                Description of Project 
              </label>
              <textarea
                className="form-control"
                id="inputdescription_of_request"
                rows="3"
              ></textarea>
            </div>
            {/* SUBMIT BUTTON */}
            <div className="text-center">
              <button
                type="submit"
                className="glow-on-hover btn-lg btn-success"
                onClick={this.handleAlert}
              >
                Submit!
              </button>
            </div>
          </form>
        </header>
      </div>
    );
  }
}
