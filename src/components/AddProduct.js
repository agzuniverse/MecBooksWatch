import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import { addToStorage } from '../firebase/firebase';


class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            semesterValue: "Semester 1",
            isOnWa:true
        };
    }

    updateCheckmark = () => {
        this.setState({
            isOnWa:!this.state.isOnWa
        });
    }

    goToUserPage = () => {
        this.props.history.push('/user');
    }

    semChange = (event, index, value) => {
        this.setState({
            semesterValue:value
        });
    }

    handeSubmit = () => {
        if(this.props.uid == '' || this.props.uid == null){
            alert("You need to log in to add a book!");
        }
        else{
            let title = document.getElementById('bookTitle').value;
            let author = document.getElementById('bookAuthor').value;
            let price = document.getElementById('bookPrice').value;
            let contact = document.getElementById('mobile').value;
            let userClass = document.getElementById('userClass').value;
            let isOnWa = this.state.isOnWa;
            let file = document.getElementById('fileUpload').files[0];

            let data = {
                "title":title,
                "author":author,
                "price":price,
                "contact":contact,
                "userClass":userClass,
                "isOnWa":isOnWa,
                "uid":this.props.uid,
                "email":this.props.email,
                "username":this.props.name
            }

            addToStorage(file,data);
        }
    }

    render(){
        return(
            <div className='mainBackground sellWrapper'>
                <MuiThemeProvider>
                    <div className='appbar'>
                        <a href="" className="logo">Books<span id="watchPart">Watch</span></a>
                    </div>
                    <div className="centerTotal">
                        <div className='backToButton'>
                            <RaisedButton style={{float:'right', marginRight:'2vw'}} label="Back to Profile" onClick={this.goToUserPage} primary={true}/>
                        </div>
                        <h2 className="materialBlack">Add New Book</h2>
                        <hr style={{height:'2px', width:'90%', color:'black'}}/> 
                        <p className='info'><em>Please fill in the information carefully without errors or spelling mistakes. All fields are required.</em></p>
                        <TextField style={{width:'65%'}} id="bookTitle" hintText="Enter book title"/>
                        <TextField style={{width:'65%'}} id="bookAuthor" hintText="Enter author name"/>
                        <TextField style={{width:'65%'}} id="bookPrice" hintText="Enter your expected price"/>
                        <TextField type='number' style={{width:'65%'}} id="mobile" hintText="Enter your contact number"/>
                        <TextField style={{width:'65%'}} id="userClass" hintText="Enter your class (eg: CS4A, EE6 etc..)"/>
                        <br/>
                        <div>
                            <Checkbox
                                label="I can be contacted through Whatsapp"
                                checked={this.state.isOnWa}
                                onCheck={this.updateCheckmark}
                                style={{fontSize:'13px'}}
                            />
                        </div>
                        <br/><br/>
                        <span style={{fontSize:'13px'}}>Choose the semester for which this book is used:</span>
                        <DropDownMenu onChange={this.semChange} style={{width:'65%'}} value={this.state.semesterValue} autoWidth={false} className="dropDownMenu">
                            <MenuItem value="Semester 1" primaryText="Semester 1" />
                            <MenuItem value="Semester 2" primaryText="Semester 2" />
                            <MenuItem value="Semester 3" primaryText="Semester 3" />
                            <MenuItem value="Semester 4" primaryText="Semester 4" />
                            <MenuItem value="Semester 5" primaryText="Semester 5" />
                            <MenuItem value="Semester 6" primaryText="Semester 6" />
                            <MenuItem value="Semester 7" primaryText="Semester 7" />
                            <MenuItem value="Semester 8" primaryText="Semester 8" />
                        </DropDownMenu>
                        <br/><br/>
                        <span style={{padding:'5px', fontSize:'13px'}}> Upload a good quality picture of the book. </span>
                        <RaisedButton
                            label="Choose Image"
                            labelPosition="before"
                            containerElement="label"
                         >
                        <input id='fileUpload' type="file" accept='image/*' className='hiddenFileInput'/>
                        </RaisedButton>
                        <div style={{height:'5vh'}}/>
                        <RaisedButton onClick={() => this.handeSubmit()} label="Submit" primary={true}/>
                       
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default connect(
    (store) => {
        return store;
    }
)(AddProduct);