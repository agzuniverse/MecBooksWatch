import React from 'react';
import { connect } from 'react-redux';


class GetAuthDetails extends React.Component {

    componentWillMount() {
        if(this.props.uid === '' || this.props.uid === null){
            this.props.update('SET_UID',{uid:localStorage.getItem('LOCAL_UID')});
            this.props.update('SET_NAME',{name:localStorage.getItem('LOCAL_NAME')});
            this.props.update('SET_EMAIL',{email:localStorage.getItem('LOCAL_EMAIL')});
            this.props.update('SET_PROPIC',{propic:localStorage.getItem('LOCAL_PROPIC')});
        }
    }
    
    render() {
        return null;
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
)(GetAuthDetails);