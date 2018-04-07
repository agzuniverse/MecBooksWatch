import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { readFromStorage } from '../firebase/firebase';
import SideMenu from './SideMenu';
import ProductDiv from './ProductDiv';
import GetAuthDetails from './GetAuthDetails';

class Userpage extends Component{

    constructor(props){
        super(props);
        this.state={
            bookData:[]
        }
    }

    componentWillMount(){
        //this.fetchUserBooks(this.props.uid);
        this.fetchUserBooks("116739592701726269240");
    }

    fetchUserBooks = async (uid) => {
        var bookData = await readFromStorage(uid);
        console.log(bookData);
        this.setState({
            bookData:bookData
        });
        
    
        

    }
    
    render(){
        const books = Object.keys(this.state.bookData).map(key => { 
            console.log(this.state.bookData[key],key);
            return(
                <ProductDiv details={this.state.bookData[key]}/>
            
            );
        });
        
        if(this.props.uid=='' || this.props.uid==null)
            return null;
        else
            return(
                <div className="App">
                    <SideMenu isFilter={false} userDetails={this.props} />
                    <div className="mainDiv">
                        {books}
                    </div>
                </div>
            );

     
    }
}

export default connect(
    (store) => {
        return store;
    }
)(Userpage);