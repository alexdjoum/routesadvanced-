import React, { Component } from 'react';
import './space.css'

class Space extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nextSession: [],
            user: null,
            name: '',
            firstName: '',
            email: '',
            address: '',
            phone: '',
            city: '',
            region: '',
            zipcode: '',
            country: '',
            gender: '',
            password: '',
            emailChangeAttemptValue: '',
            isLoading: false,
            isLoading2: false,
            imageUrl: '',
            image: null,
            successMessage: false,
            message: 'Informations successfully updated',
            profilePicture: '',
            disabled: true,
            error: false,
            options: [
                {label: "Afghanistan", value: "Afghanistan"},
                {label: "Åland Islands", value: "Åland Islands"},
                {label: "Albania", value: "Albania"},
                {label: "Algeria", value: "Algeria"},
                {label: "American Samoa", value: "American Samoa"},
                {label: "Andorra", value: "Andorra"},
                {label: "Angola", value: "Angola"},
                {label: "Anguilla", value: "Anguilla"},
                {label: "Antarctica", value: "Antarctica"},
                {label: "Antigua and Barbuda", value: "Antigua and Barbuda"},
                {label: "Argentina", value: "Argentina"},
                {label: "Armenia", value: "Armenia"},
                {label: "Aruba", value: "Aruba"},
                {label: "Australia", value: "Australia"},
                {label: "Azerbaijan", value: "Azerbaijan"},
                {label: "Bahamas", value: "Bahamas"},
                {label: "Bahrain", value: "Bahrain"},
                {label: "Bangladesh", value: "Bangladesh"},
                {label: "Barbados", value: "Barbados"},
                {label: "Belarus", value: "Belarus"},
                {label: "Belau", value: "Belau"},
                {label: "Belgium", value: "Belgium"},
                {label: "Benin", value: "Benin"},
                {label: "Bermuda", value: "Bermuda"},
                {label: "Bhutan", value: "Bhutan"},
                {label: "Bolivia", value: "Bolivia"},
                {label: "Bonaire", value: "Bonaire"},
                {label: "Botswana", value: "Botswana"},
                {label: "Bouvet Island", value: "Bouvet Island"},
                {label: "Brazil", value: "Brazil"},
                {label: "British Indian", value: "British Indian"},
                {label: "Brunei", value: "Brunei"},
                {label: "Bulgaria", value: "Bulgaria"},
                {label: "Burkina Faso", value: "Burkina Faso"},
                {label: "Burundi", value: "Burundi"},
                {label: "Cambodia", value: "Cambodia"},
                {label: "Cameroon", value: "Cameroon"},
                {label: "Canada", value: "Canada"},
                {label: "Cape Verde", value: "Cape Verde"},
                {label: "Cayman Islands", value: "Cayman Islands"},
                {label: "Central African Republic", value: "Central African Republic"},
                {label: "Chad", value: "Chad"},
                {label: "Chile", value: "Chile"},
                {label: "China", value: "China"},
                {label: "Christmas Island", value: "Christmas Island"},
                {label: "Cocos", value: "Cocos"},
                {label: "Colombia", value: "Colombia"},
                {label: "Comoros", value: "Comoros"},
                {label: "Congo (Brazzaville)", value: "Congo (Brazzaville)"},
                {label: "ongo (Kinshasa)", value: "Congo (Kinshasa)"},
                {label: "Cook Islands<", value: "Cook Islands<"},
                {label: "Costa Rica", value: "Costa Rica"},
                {label: "Croatia", value: "Croatia"},
                {label: "Cuba ao", value: "Cuba ao"},
                {label: "Cyprus", value: "Cyprus"},
                {label: "Czech Republic", value: "Czech Republic"},
                {label: "Denmark", value: "Denmark"},
                {label: "Djibouti", value: "Djibouti"},
                {label: "Dominica", value: "Dominica"},
                {label: "Dominican Republi", value: "Dominican Republi"},
                {label: "Ecuador", value: "Ecuador"},
                {label: "Egypt", value: "Egypt"},
                {label: "El Salvador", value: "El Salvador"},
                {label: "Equatorial Guinea", value: "Equatorial Guinea"},
                {label: "Eritrea", value: "Eritrea"},
                {label: "Estonia", value: "Estonia"},
                {label: "Ethiopia", value: "Ethiopia"},
                {label: "Falkland Islands", value: "Falkland Islands"},
                {label: "Faroe Islands", value: "Faroe Islands"},
                {label: "Finland", value: "Finland"},
                {label: "France", value: "France"},
                {label: "French Guiana", value: "French Guiana"},
                {label: "French Polynesia", value: "French Polynesia"},
                {label: "French Southern Territories", value: "French Southern Territories"},
                {label: "Gabon", value: "Gabon"},
                {label: "Gambia", value: "Gambia"},
                {label: "Georgia", value: "Georgia"},
                {label: "Germany", value: "Germany"},
                {label: "Ghana", value: "Ghana"},
                {label: "Gibraltar", value: "Gibraltar"},
                {label: "Greece", value: "Greece"},
                {label: "Greenland", value: "Greenland"},
                {label: "Grenada", value: "Grenada"},
                {label: "Guadeloupe", value: "Guadeloupe"},
                {label: "Guam", value: "Guam"},
                {label: "Guatemala", value: "Guatemala"},
                {label: "Guernsey", value: "Guernsey"},
                {label: "Guinea", value: "Guinea"},
                {label: "Guinea-Bissau", value: "Guinea-Bissau"},
                {label: "Guyana", value: "Guyana"},
                {label: "Haiti", value: "Haiti"},
                {label: "Heard Island and McDonald Islands", value: "Heard Island and McDonald Islands"},
                {label: "Honduras", value: "Honduras"},
                {label: "Hong Kong", value: "Hong Kong"},
                {label: "Hungary", value: "Hungary"},
                {label: "Iceland", value: "Iceland"},
                {label: "India", value: "India"},
                {label: "Indonesia", value: "Indonesia"},
                {label: "Iran", value: "Iran"},
                {label: "Iraq", value: "Iraq"},
                {label: "Ireland", value: "Ireland"},
                {label: "Isle of Man", value: "Isle of Man"},
                {label: "Israel", value: "Israel"},
                {label: "Italy", value: "Italy"},
                {label: "Ivory Coast", value: "Ivory Coast"},
                {label: "Jamaica", value: "Jamaica"},
                {label: "Japan", value: "Japan"},
                {label: "Jersey", value: "Jersey"},
                {label: "Jordan", value: "Jordan"},
                {label: "Kazakhstan", value: "Kazakhstan"},
                {label: "Kenya", value: "Kenya"},
                {label: "Kiribati", value: "Kiribati"},
                {label: "Kuwait", value: "Kuwait"},
                {label: "Kyrgyzstan", value: "Kyrgyzstan"},
                {label: "Laos", value: "Laos"},
                {label: "Latvia", value: "Latvia"},
                {label: "Lebanon", value: "Lebanon"},
                {label: "Lesotho", value: "Lesotho"},
                {label: "Liberia", value: "Liberia"},
                {label: "Libya", value: "Libya"},
                {label: "Liechtenstein", value: "Liechtenstein"},
                {label: "Lithuania", value: "Lithuania"},
                {label: "Luxembourg", value: "Luxembourg"},
                {label: "Macao", value: "Macao"},
                {label: "Madagascar", value: "Madagascar"},
                {label: "Malawi", value: "Malawi"},
                {label: "Malaysia", value: "Malaysia"},
                {label: "Maldives", value: "Maldives"},
                {label: "Mali", value: "Mali"},
                {label: "Malta", value: "Malta"},
                {label: "Marshall Islands", value: "Marshall Islands"},
                {label: "Martinique", value: "Martinique"},
                {label: "Mauritania", value: "Mauritania"},
                {label: "Mauritius", value: "Mauritius"},
                {label: "Mayotte", value: "Mayotte"},
                {label: "Mexico", value: "Mexico"},
                {label: "Micronesia", value: "Micronesia"},
                {label: "Moldova", value: "Moldova"},
                {label: "Monaco", value: "Monaco"},
                {label: "Mongolia", value: "Mongolia"},
                {label: "Montenegro", value: "Montenegro"},
                {label: "Montserrat", value: "Montserrat"},
                {label: "Morocco", value: "Morocco"},
                {label: "Mozambique", value: "Mozambique"},
                {label: "Myanmar", value: "Myanmar"},
                {label: "Namibia", value: "Namibia"},
                {label: "Nauru", value: "Nauru"},
                {label: "Nepal", value: "Nepal"},
                {label: "Netherlands", value: "Netherlands"},
                {label: "New Caledonia", value: "New Caledonia"},
                {label: "New Zealand", value: "New Zealand"},
                {label: "Nicaragua", value: "Nicaragua"},
                {label: "Niger", value: "Niger"},
                {label: "Nigeria", value: "Nigeria"},
                {label: "Niue", value: "Niue"},
                {label: "Norfolk Island", value: "Norfolk Island"},
                {label: "North Korea", value: "North Korea"},
                {label: "North Macedonia", value: "North Macedonia"},
                {label: "Northern Mariana Islands", value: "Northern Mariana Islands"},
                {label: "Norway", value: "Norway"},
                {label: "Oman", value: "Oman"},
                {label: "Pakistan", value: "Pakistan"},
                {label: "Palestinian Territory", value: "Palestinian Territory"},
                {label: "Panama", value: "Panama"},
                {label: "Papua New Guinea", value: "Papua New Guinea"},
                {label: "Paraguay", value: "Paraguay"},
                {label: "Peru", value: "Peru"},
                {label: "Philippines", value: "Philippines"},
                {label: "Pitcairn", value: "Pitcairn"},
                {label: "Poland", value: "Poland"},
                {label: "Portugal", value: "Portugal"},
                {label: "Puerto Rico", value: "Puerto Rico"},
                {label: "Qatar", value: "Qatar"},
                {label: "Reunion", value: "Reunion"},
                {label: "Romania", value: "Romania"},
                {label: "Russia", value: "Russia"},
                {label: "Rwanda", value: "Rwanda"},
                {label: "Saotome", value: "Saotome"},
                {label: "Saint Barth lemy", value: "Saint Barth lemy"},
                {label: "Saint Helena", value: "Saint Helena"},
                {label: "Saint Kitts and Nevis", value: "Saint Kitts and Nevis"},
                {label: "Saint Lucia", value: "Saint Lucia"},
                {label: "Saint Martin (Dutch part)", value: "Saint Martin (Dutch part)"},
                {label: "Saint Martin (French part)", value: "Saint Martin (French part)"},
                {label: "Saint Pierre and Miquelon", value: "Saint Pierre and Miquelon"},
                {label: "Saint Vincent and the Grenadines", value: "Saint Vincent and the Grenadines"},
                {label: "Samoa", value: "Samoa"},
                {label: "San Marino", value: "San Marino"},
                {label: "Saudi Arabia", value: "Saudi Arabia"},
                {label: "Senegal", value: "Senegal"},
                {label: "Serbia", value: "Serbia"},
                {label: "Seychelles", value: "Seychelles"},
                {label: "Sierra Leone", value: "Sierra Leone"},
                {label: "Singapore", value: "Singapore"},
                {label: "Slovakia", value: "Slovakia"},
                {label: "Slovenia", value: "Slovenia"},
                {label: "Solomon Islands", value: "Solomon Islands"},
                {label: "Somalia", value: "Somalia"},
                {label: "South Africa", value: "South Africa"},
                {label: "South Georgia/Sandwich Islands", value: "South Georgia/Sandwich Islands"},
                {label: "South Korea", value: "South Korea"},
                {label: "South Sudan", value: "South Sudan"},
                {label: "Spain", value: "Spain"},
                {label: "Sri Lanka", value: "Sri Lanka"},
                {label: "Sudan", value: "Sudan"},
                {label: "Suriname", value: "Suriname"},
                {label: "Svalbard and Jan Mayen", value: "Svalbard and Jan Mayen"},
                {label: "Swaziland", value: "Swaziland"},
                {label: "Sweden", value: "Sweden"},
                {label: "Switzerland", value: "Switzerland"},
                {label: "Syria", value: "Syria"},
                {label: "Taiwan", value: "Taiwan"},
                {label: "Tajikistan", value: "Tajikistan"},
                {label: "Tanzania", value: "Tanzania"},
                {label: "Thailand", value: "Thailand"},
                {label: "Timor-Leste", value: "Timor-Leste"},
                {label: "Togo", value: "Togo"},
                {label: "Tokelau", value: "Tokelau"},
                {label: "Tonga", value: "Tonga"},
                {label: "Trinidad and Tobago", value: "Trinidad and Tobago"},
                {label: "Tunisia", value: "Tunisia"},
                {label: "Turkey", value: "Turkey"},
                {label: "Turkmenistan", value: "Turkmenistan"},
                {label: "Turks and Caicos Islands", value: "Turks and Caicos Islands"},
                {label: "Tuvalu", value: "Tuvalu"},
                {label: "Uganda", value: "Uganda"},
                {label: "Ukraine", value: "Ukraine"},
                {label: "United Arab Emirates", value: "United Arab Emirates"},
                {label: "United Kingdom", value: "United Kingdom "},
                {label: "United States", value: "United States"},
                {label: "United States Minor Outlying Islands", value: "United States Minor Outlying Islands"},
                {label: "Uruguay", value: "Uruguay"},
                {label: "Uzbekistan", value: "Uzbekistan"},
                {label: "Vanuatu", value: "Vanuatu"},
                {label: "Vatican", value: "Vatican"},
                {label: "Venezuela", value: "Venezuela"},
                {label: "Vietnam", value: "Vietnam"},
                {label: "Virgin Islands (British)", value: "Virgin Islands (British)"},
                {label: "Virgin Islands (US)", value: "Virgin Islands (US)"},
                {label: "Wallis and Futuna", value: "Wallis and Futuna"},
                {label: "Western Sahara", value: "Western Sahara"},
                {label: "Yemen", value: "Yemen"},
            ]
        }
    }
    render() {
        return (
            <>
            <div id="wrapper">
                
                <div id="page-content-wrapper">
                    
                    <div class="container">
                <div className="d-flex justify-content-center">
                    <div style={{width: "756px"}}>
                    <div className="d-flex">
                        <h2 className="align-items-center d-flex">Change your informations here</h2>
                        {1 === 1 ? (
                            <>
                                <div className="upload mb-4" >
                                    <img
                                    className="shape-author rounded-circle h-95 w-375"
                                    src="/author-17.png"
                                    width="125" height="115"
                                    alt="Shape"/>
                                    <div className="round">
                                        <button 
                                        data-bs-toggle="modal"
                                        data-bs-target="#myAvatarModal"></button>
                                        <i className="fa fa-camera" style={{color: "white"}}></i>
                                    </div>
                                </div>
                            </>
                        )
                        :
                            <>
                                {/* <img
                                    className="shape-author rounded-circle h-95 w-375"
                                    src={MEDIA_URL + this.state.profilePicture}
                                    width="125" height="115"
                                    alt="Shape"/> */}
                                
                            </>
                        
                            }
                    {/* {
                        this.state.isLoading2 ? (

                            <button
                                className="btn btn-primary  btn-block "
                                style={{width: '70%'}}
                                disabled={this.state.disabled}>
                                <div className="spinner-border "
                                        role="status">
                                <span
                                    className="sr-only">Loading...</span>
                                </div>
                            </button>

                        ) : (
                            <button type="button"
                                    className="btn btn-primary  btn-block "
                                    style={{width: '10%'}}
                                    data-bs-toggle="modal"
                                    data-bs-target="#myAvatarModal">Edit
                            </button>
                        )
                    } */}
                </div>
                        
                    
                    

                
                <div>
                <form>
                    {"error" === "errors" ? <center><h5 style={{
                        backgroundColor: "#e12b6b",
                        borderRadius: "5px",
                        fontWeight: " 400",
                        color: "#ffffff",
                        padding: "3px 12px",
                    }}>Your password is not valid</h5>
                    </center> : ''}
                    <div className="row">
                        <div
                            className={`${this.state.name?.length > 0 ? "filled" : ""} custom-input-border col-md-5 col-sm-12 col-xs-12`}>
                            {/* //className="col-md-12 col-sm-12 col-xs-12 col-lg-6 mb-4"> */}
                            
                            <input type="Text" width="20px"
                                    className="form-control"
                                    value={this.state.name}
                                    name="name"
                                    //placeholder="Name"
                                    onChange={this.handleFormChange}

                            />
                            <label for="name" className="form-label">Last
                                Name</label>
                        </div>
                        <div
                            className={`${this.state.firstName?.length > 0 ? "filled" : ""} custom-input-border col-md-5 col-sm-12 col-xs-12 mb-4`}>
                            {/* className="col-md-12 col-sm-12 col-xs-12 col-lg-6 mb-4" */}
                            
                            <input 
                                type="Text" width="20px"
                                className="form-control"
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.handleFormChange}
                                //placeholder="First Name"
                                />
                            <label for="Firstname" className="form-label">First
                                Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className={`${this.state.email?.length > 0 ? "filled" : ""} custom-input-border col-md-10 col-sm-12 col-xs-12 mb-4`}>
                            {/* className="col-md-12 col-sm-12 col-xs-12 col-lg-6 mb-4" */}
                            
                            <input type="email"
                                    className="form-control"
                                    name="email"
                                    value={this.state.email}
                                    //placeholder="Email"
                                    onChange={this.handleFormChange}
                            />
                            <label for="email" className="form-label">Email</label>
                            {this.state.emailChangeAttemptValue !== null ?
                                <span>Your new email <span style={{
                                    color: "red",
                                    fontWeight: "bold"
                                }}>{this.state.emailChangeAttemptValue} </span>
                                            has to be confirmed before being used. Please check your email</span> : ''}
                        </div>
                    </div>
                    <div className="row">
                        <div className={`${this.state.phone?.length > 0 ? "filled" : ""} custom-input-border col-md-10  col-sm-12 col-xs-12 mb-4`}>
                            
                            <input 
                                type="text" 
                                className="form-control"
                                name="phone"
                                //placeholder="Cell Phone"
                                value={this.state.phone}
                                onChange={this.handleFormChange}/>
                            <label className="form-label" for="phone">Cell Phone</label>
                        </div>
                        {/* <div
                            className="col-md-12 col-sm-12 col-xs-12 col-lg-6 mb-4">
                            <label className="form-label">Gender</label>
                            <select className="form-control"
                                    name="gender"
                                    onChange={(e) => this.setState({gender: e.target.value})}>

                                <option
                                    selected={this.state.gender !== null && this.state.gender === 'Male'}
                                    value="Male">Male
                                </option>
                                <option
                                    selected={this.state.gender !== null && this.state.gender === 'Female'}
                                    value="Female">Female
                                </option>

                            </select>
                        </div> */}
                    </div>
                    <div className="row">
                        <div className={`${this.state.address?.length > 0 ? "filled" : ""} custom-input-border col-md-10 col-sm-12 col-xs-12 mb-4`}>
                            
                            <input type="text" name="address"
                                    className="form-control"
                                    value={this.state.address}
                                    //placeholder="Address"
                                    onChange={this.handleFormChange}/>
                            <label for="Address"  className="form-label">Address</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className={`${this.state.zipcode?.length > 0 ? "filled" : ""} custom-input-border col-md-10 col-sm-12 col-xs-12 mb-4`}>
                            
                            <input type="text" width="20px"
                                    className="form-control"
                                    name="zipcode" 
                                    //placeholder="Zipcode"
                                    value={this.state.zipcode}
                                    onChange={this.handleFormChange}/>
                            <label for="zipcode" className="form-label">Zip
                                Code</label>
                        </div>
                        {/* <div className={`${this.state.city?.length > 0 ? "filled" : ""} custom-input-border col-md-6 col-sm-12 col-xs-12 mb-4`}>
                            <input 
                                type="text" 
                                width="20px"
                                className="form-control"
                                name="city" 
                                //placeholder="City"
                                value={this.state.city}
                                onChange={this.handleFormChange}/>
                            <label for="city" className="form-label">City</label>
                        </div> */}
                        {/* <div
                            className="col-md-12 col-sm-12 col-xs-12 col-lg-6 mb-4">
                            <label className="form-label">Cell Phone</label>
                            <input type="text" className="form-control"
                                    name="phone"
                                    placeholder="Cell Phone"
                                    value={this.state.phone}
                                    onChange={this.handleFormChange}/>
                        </div> */}
                    </div>
                    
                    <div className="row">
                        <div className={`${this.state.address?.length > 0 ? "filled" : ""} custom-input-border col-md-5 col-sm-12 col-xs-12 mb-4`}>
                            <input 
                                type="text" 
                                width="20px"
                                className="form-control"
                                name="city" 
                                //placeholder="City"
                                value={this.state.city}
                                onChange={this.handleFormChange}/>
                            <label className="form-label" for="city">City</label>
                        </div>
                        <div className={`${this.state.address?.length > 0 ? "filled" : ""} custom-input-border col-md-5 col-sm-12 col-xs-12 mb-4`}>
                            <input 
                                type="text" 
                                className="form-control"
                                name="region"
                                value={this.state.region}
                                //placeholder="Region"
                                onChange={this.handleFormChange}/>
                            <label className="form-label">Region</label>
                        </div>
                    </div>
                    <div className="row">
                        {/* <div className="col-6 mb-4">
                            <label className="form-label">Zip
                                Code</label>
                            <input type="text" width="20px"
                                    className="form-control"
                                    name="zipcode" placeholder="Zipcode"
                                    value={this.state.zipcode}
                                    onChange={this.handleFormChange}/>
                        </div> */}
                        <div
                            className="col-md-5 col-sm-12 col-xs-12 mb-4">
                            <label className="form-label">Gender</label>
                            <select className="form-control"
                                    name="gender"
                                    onChange={(e) => this.setState({gender: e.target.value})}>

                                <option
                                    selected={this.state.gender !== null && this.state.gender === 'Male'}
                                    value="Male">Male
                                </option>
                                <option
                                    selected={this.state.gender !== null && this.state.gender === 'Female'}
                                    value="Female">Female
                                </option>

                            </select>
                        </div>
                        <div className=" col-md-5 mb-4">
                            <label
                                className="form-label">Country</label>
                            {/*<option value="">Select a country / region&hellip;</option>*/}
                            <select
                                onChange={(e) => this.setState({country: e.target.value})}
                                className="form-control form-control-lg selectpicker">
                                <option value={this.state.country}
                                        selected>{this.state.country}</option>
                                {this.state.options && this.state.options.map((option) => (
                                    <option key={option.id}
                                            selected={this.state.country === null && option.value === 'United States'}>
                                        {option.value}
                                    </option>
                                ))}
                            </select>


                            {/*<input type="text" className="form-control" name="country"*/}
                            {/*       value={this.state.country}*/}
                            {/*       placeholder="Country"*/}
                            {/*       onChange={this.handleFormChange}/>*/}
                        </div>

                    </div>
                    <div className="row">
                        <div className="single-form">
                            {
                                this.state.isLoading ? (
                                    <div className="row">
                                        <div
                                            className="col-3 mb-4 ">

                                        </div>
                                        <div
                                            className="col-8 mb-4 ">
                                            <button
                                                className="btn btn-primary  btn-block text-white "
                                                disabled={this.state.isLoading}
                                                style={{width: '70%'}}
                                            >
                                                <div
                                                    className="spinner-border "
                                                    role="status">
                                            <span
                                                className="sr-only">Loading...</span>
                                                </div>
                                            </button>
                                        </div>
                                    </div>

                                ) : (
                                    <div className="row">
                                        <div className="col-md-4">
                                            <button type="button"
                                                className="btn btn-primary mr-3"
                                                data-bs-toggle="modal"
                                                data-bs-target="#myModal"
                                                
                                                onClick={() => this.setState({error: false})}
                                            >Update information
                                            </button>
                                        </div>
                                        <div className="col-md-4">
                                            <button type="button"
                                                className="btn btn-primary mr-3"
                                                data-bs-toggle="modal"
                                                data-bs-target="#myModal"
                                                
                                                onClick={() => this.setState({error: false})}
                                            >Update information
                                            </button>
                                        </div>
                                    </div>
                                    
                                )
                            }
                        </div>

                        <div className="modal" id="myModal">
                            <div
                                className="modal-dialog modal-dialog-centered modal-sm">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div
                                            className="modal-header bg-primary">
                                            <h1 className="modal-title text-white">
                                                    <span
                                                        className="glyphicon glyphicon-trash"></span>Confirmation
                                            </h1>
                                            <button type="button"
                                                    className="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">

                                            <h5>To update this
                                                information enter
                                                your password</h5>
                                            <br></br>

                                            <label
                                                className="form-label h6">Password</label>
                                            <input type="password"
                                                    width="20px"
                                                    className="form-control"
                                                    name="password"
                                                    placeholder="Password"
                                                    value={this.state.password}
                                                    onChange={this.handleFormChange}/>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button"
                                                    className="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close
                                            </button>
                                            <button type="button"
                                                    className="btn btn-primary save"
                                                    onClick={this.updateUserInformations}
                                                    data-bs-dismiss="modal"
                                                    disabled={this.state.password.length < 5}> Save
                                                changes
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal" id="myAvatarModal">
                            <div
                                className="modal-dialog modal-dialog-centered modal-sm">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div
                                            className="modal-header bg-primary">
                                            <h1 className="modal-title text-white">
                                                <span
                                                    className="glyphicon glyphicon-trash"></span>Change
                                                your avatar image</h1>
                                            <button type="button"
                                                    className="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <input type="file"
                                                    width="20px"
                                                    className="form-control"
                                                    name="avatar"
                                                    onChange={this.handleUploadImage}/><br/>
                                            <center><img
                                                src={this.state.imageUrl}
                                                className="rounded-circle"
                                                width="30%"
                                                style={{cursor: 'pointer'}}/>
                                            </center>
                                        </div>

                                        <div className="modal-footer">
                                            <button type="button"
                                                    className="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close
                                            </button>
                                            <button type="button"
                                                    className="btn btn-primary save"
                                                    onClick={this.changeAvatar}
                                                    data-bs-dismiss="modal"> Save
                                            </button>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="position-fixed bottom-1 end-1 z-index-2">


                        {this.state.successMessage ? (
                                <div
                                    className="toast fade show p-2 mt-2 bg-gradient-info"
                                    role="alert"
                                    aria-live="assertive" id="infoToast"
                                    aria-atomic="true">
                                    <div
                                        className="toast-header bg-transparent border-0">
                                        <i className="material-icons text-white me-2">
                                            check
                                        </i>
                                        <span
                                            className="me-auto text-white font-weight-bold">Profile </span>
                                        <small className="text-white">just
                                            now</small>
                                        <i className="fas fa-times text-md text-white ms-3 cursor-pointer"
                                            data-bs-dismiss="toast"
                                            aria-label="Close"></i>
                                    </div>
                                    <hr className="horizontal light m-0"/>
                                    <div className="toast-body text-white">
                                        {this.state.message}
                                    </div>
                                </div>
                            ) :
                            (<></>)}
                        {this.state.failedMessage ? (
                                <div
                                    className="toast fade show p-2 mt-2 bg-gradient-danger"
                                    role="alert"
                                    aria-live="assertive" id="infoToast"
                                    aria-atomic="true">
                                    <div
                                        className="toast-header bg-transparent border-0">
                                        <i className="material-icons text-white me-2">
                                            check
                                        </i>
                                        <span
                                            className="me-auto text-white font-weight-bold">Profile </span>
                                        <small className="text-white">just
                                            now</small>
                                        <i className="fas fa-times text-md text-white ms-3 cursor-pointer"
                                            data-bs-dismiss="toast"
                                            aria-label="Close"></i>
                                    </div>
                                    <hr className="horizontal light m-0"/>
                                    <div className="toast-body text-white">
                                        {this.state.message}
                                    </div>
                                </div>
                            ) :
                            (<></>)}


                    </div>
                </form>
            </div>
                
                    </div>
                </div>
            </div>
                </div>
            
            
            </div>
               
            </>
        );
    }
}

export default Space;