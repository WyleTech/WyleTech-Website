import React from "react";
import axios from "axios";
import "../App.css";
import { gapi } from 'gapi-script';

export default class Book extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.initClient = this.initClient.bind(this);

  this.state = {
    first_name: "",
    last_name: "",
    organization_name: "",
    email: "",
    phone: "",
    description_of_request: ""
  };
  }

  componentDidMount() {

    this.handleClientLoad();
  }

  handleClientLoad = () => {
    gapi.load('client:auth2', this.initClient)
  }

   initClient = () => {
     var API_KEY = 'AIzaSyA7L8zrgabqUFC73Au0L3wZlJpycKZvsFo';
     var CLIENT_ID = '696246206874-c607j5fh9n9lpk6tfvrsiubmairiqml2.apps.googleusercontent.com';
     //var CLIENT_SECRET = 'aVHoCdrN-HGghXSZJYY_etK0';
     var SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

     gapi.client.init({
       'apiKey': API_KEY,
       'clientId': CLIENT_ID,
       'scpoe': SCOPE,
       'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
     })
      // .then(() => {
      //   gapi.auth2.getAuthInstance().isSignedIn.Listen(this.updateSignInStatus);
      //   this.updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      // })
    }
 

  handleAlert = () => {
    alert(
      "You're informtaion has been submitted. Please allow up to 24 hours for response"
    );
  };

  handleSubmit = event => {
    // need to add api key from google vredentials before launching live 
    console.log(this.state);
    var SPREADSHEET_ID = '1Ja2iCJz1zENn5rQAY5rTIyQW4XGWUNs2hj4QiAWYDo0';
    

    var params = {
      spreadsheetID: SPREADSHEET_ID,
      range: 'Leads',
      valueInputOptions: 'raw',
      insertDataOption: 'INSERT_ROWS',
    }
    
    var valueRangeBody = {
      'majorDimensions': 'ROWS',
      'values': [this.state],
    }

    let request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
    request.then(function(response) {
      alert('You\'re information has been received')
      console.log(response.result)
    }, function(reason) {
      alert('An error occured ' + reason.result.error.message);
    });
    
    event.preventDefault();

    // console.log(event.target.elements[0].value);
    // console.log(event.target.elements[1].value);
    // console.log(event.target.elements[2].value);
    // console.log(event.target.elements[3].value);
    // console.log(event.target.elements[4].value);
    // console.log(event.target.elements[5].value);
    // axios.post(`http://localhost:8080/api/book`, {
    //   first_name: event.target.elements[0].value,
    //   last_name: event.target.elements[1].value,
    //   organization_name: event.target.elements[2].value,
    //   email: event.target.elements[3].value,
    //   phone: event.target.elements[4].value,
    //   description_of_request: event.target.elements[5].value,

    // });
  };

  render() {
    return (
      
      // Book Us Title - animation
      <div className="container ">
           <div className="Book">
      <span className="letter" data-letter="B">B</span>
      <span className="letter" data-letter="O">O</span>
      <span className="letter" data-letter="O">O</span>
      <span className="letter" data-letter="K">K &nbsp;</span>
      <span className="letter" data-letter="U">U</span>
      <span className="letter" data-letter="S">S</span>
      </div>
      
        <header className="Form">
          <form onSubmit={this.handleSubmit}>
            {/* First Name Form */}
            <div className="form-row text-white-50 ">
            <div className="col-md-4">
              <label htmlFor="exampleInputFirstName">First Name</label>
              <input
                type="name"
                className="form-control"
                id="InputFirstName"
                placeholder="First Name"
                onChange={this.handleChange}
              />
          
          </div>
          <div className="col-md-4 ">
            {/* Last Name Form */}
        
              <label htmlFor="exampleInputLastName">Last Name</label>
              <input
                type="name"
                className="form-control"
                id="InputLastName"
                placeholder="Last Name"
              />
               </div>

               <div className="col-md-4 ">
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
            <div className="col-md-4 ">
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
            <div className="col-md-4 ">
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
                onClick={this.handleSubmit}
              >
                Submit!
              </button>
          
            </div>
          </form>
          <br></br>
          <p className="Email text-center text-white">Or just go ahead and shoot us an email real quick! 
        <li> <a href="mailto:programmerBill.wyletech@gmail.com">ProgrammerBill.Wyletech@gmail.com</a></li>
        <li> <a href="mailto:squirrelMaster.wyletech@gmail.com">SquirrelMaster.Wyletech@gmail.com</a></li>
        
        </p>
        </header>

     
      </div>
    );
  }
}
