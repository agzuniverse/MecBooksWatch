import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { readFromStorage } from '../firebase/firebase';
import GetAuthDetails from './GetAuthDetails';

class Userpage extends Component{

    constructor(props){
        super(props);
        this.state={
            bookData:{}
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
        return(
            <div>
                <GetAuthDetails/>
                {
                    (this.props.uid!=='' && this.props.uid!==null)?
                    <div>
                        <p>NAME:{this.props.name}</p>
                        <p>EMAIL:{this.props.email}</p>
                        <img src={{uri:this.props.name}}/>
                        <Link to='/addproduct'>Click here to add a book</Link>
                    </div>
                    :null
                }
            </div>
        );
    }
}

export default connect(
    (store) => {
        return store;
    }
)(Userpage);