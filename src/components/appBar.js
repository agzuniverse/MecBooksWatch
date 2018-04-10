import React from 'react';

class Appbar extends React.Component{
    render(){
        return(
            <div className="appbar">
                <a href="" className="logo">Books<span id="watchPart">Watch</span></a>
                <button id="logout" onClick={ this.logout }>Logout</button>
            </div>
        );
    }
}

export default Appbar;