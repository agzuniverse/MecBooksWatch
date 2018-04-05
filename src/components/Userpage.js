import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { readFromStorage } from '../firebase/firebase';

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

    componentDidMount(){
        this.props.update('SET_UID',{uid:localStorage.getItem('LOCAL_UID')});
        this.props.update('SET_NAME',{uid:localStorage.getItem('LOCAL_NAME')});
        this.props.update('SET_EMAIL',{uid:localStorage.getItem('LOCAL_EMAIL')});
        this.props.update('SET_PROPIC',{uid:localStorage.getItem('LOCAL_PROPIC')});
    }

    fetchUserBooks = async (uid) => {
        var bookData = await readFromStorage(uid);
        console.log(bookData);
        this.setState({
            bookData:bookData
        });
    }

    render(){
        if(this.props.uid=='' || this.props.uid==null)
            return null;
        else
            return(
                <div>
                    <p>NAME:{this.props.name}</p>
                    <p>EMAIL:{this.props.email}</p>
                    <img src={{uri:this.props.name}}/>
                    <Link to='/addproduct'>Click here to add a book</Link>
                </div>
            );
    }
}

export default connect(
    (store) => {
        return store;
    },
    (dispatch) => {
        return {
            update:(dispatchType, dispatchPayload) => {
                dispatch({type:dispatchType,payload:dispatchPayload});
            }
        }
    }
)(Userpage);