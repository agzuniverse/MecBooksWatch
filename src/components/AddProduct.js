import React, { Component } from 'react';
import '../App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            semesterValue: "Semester 1"
        };
    }

    handeSubmit = () => {
        let title = document.getElementById('bookTitle').value;
        let author = document.getElementById('bookAuthor').value;
        let price = document.getElementById('bookPrice').value;
        
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
                            <RaisedButton style={{float:'right', marginRight:'2vw'}} label="Back to Profile" primary={true}/>
                        </div>
                        <h2 className="materialBlack">Add New Book</h2>
                        <hr style={{height:'2px', width:'90%', color:'black'}}/> 
                        <p className='info'><em>Please fill in the information carefully without errors or spelling mistakes. All fields are required.</em></p>
                        <TextField style={{width:'65%'}} id="bookTitle" hintText="Enter book title"/>
                        <TextField style={{width:'65%'}} id="bookAuthor" hintText="Enter author name"/>
                        <TextField style={{width:'65%'}} id="bookPrice" hintText="Enter your expected price"/>
                        <DropDownMenu style={{width:'65%'}} value={this.state.semesterValue} autoWidth={false} className="dropDownMenu">
                            <MenuItem value="Semester 1" primaryText="Semester 1" />
                            <MenuItem value="Semester 2" primaryText="Semester 2" />
                            <MenuItem value="Semester 3" primaryText="Semester 3" />
                            <MenuItem value="Semester 4" primaryText="Semester 4" />
                            <MenuItem value="Semester 5" primaryText="Semester 5" />
                            <MenuItem value="Semester 6" primaryText="Semester 6" />
                            <MenuItem value="Semester 7" primaryText="Semester 7" />
                            <MenuItem value="Semester 8" primaryText="Semester 8" />
                        </DropDownMenu>
                        <span style={{padding:'5px', fontSize:'13px'}}> Upload a good quality picture of the book. </span>
                        <RaisedButton
                            label="Choose Image"
                            labelPosition="before"
                            containerElement="label"
                         >
                        <input type="file" accept='image/*' className='hiddenFileInput'/>
                        </RaisedButton>
                        <div style={{height:'5vh'}}/>
                        <RaisedButton onClick={() => this.handeSubmit()} label="Submit" primary={true}/>
                       
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default AddProduct;