import React from 'react';
import '../App.css';
import FA from 'react-fontawesome';

class Credits extends React.Component {
    constructor(props) {
        super(props);
        this.devs = [
            {
                name:"Aswin G",
                email:"jondoe@tesla.com",
                sub:"Project Lead",
                mobile:"100",
                githubID:"https://github.com/agzuniverse",
                avatar:'../img/devpic/agzuniverse.jpeg',
                desc: 'JS',
            },
            {
                name:"Aswin M Prabhu",
                email:"jondoe@tesla.com",
                sub:"Front End",
                mobile:"108",
                githubID:"https://github.com/aswin1999",
                avatar:'../img/devpic/aswin1999.jpeg',
                desc:'Re',
            },
            {
                name:"Joyal A Johney",
                email:"jondoe@tesla.com",
                sub:"Front End",
                mobile:"102",
                githubID:"https://github.com/JoyalAJohney",
                avatar:'../img/devpic/JoyalAJohney.jpeg',
                desc:'elon musk',
            },
            {
                name:"Vivek R",
                email:"123vivekr@gmail.com",
                sub:"Back End",
                mobile:"+91 88482 72124",
                githubID:"https://github.com/123vivekr",
                avatar:'../img/devpic/123vivekr.jpeg',
                desc:'Lorem ipsum dolor',
            },
        ];
    }

    userPic = (dev) => {
        return(
            <a key={dev.name} href={"#"+dev.name}><img id='credits-avatar' src={require('../img/devpic/123vivekr.jpeg')} alt={dev.name+" pic"} /></a>
        )
    }

    userDetails = (dev) => {
        return(
            <div id={dev.name} className='credits-desc'>
            <span className="credits-name">{dev.name}</span>
            <font size='2'><center>{dev.sub}</center></font>
            <span className="credit-sep"></span>
            <p>
                {dev.desc}
            </p>
            <b>Contact</b><br />
            <FA name='mobile' key={dev.mobile} />Mobile: {dev.mobile}<br />
            <FA name='envelope' key={dev.email} />Email: {dev.email}<br />
            <FA name='github' key={dev.githubID} />Github: <a href={dev.githubID}>{dev.githubID}</a>
            </div>
        )
    }

    render () {
        return (
            <div className="credit-container">
                <h1 id="credits-head">Books<span id="credits-watch">Watch</span></h1>
                <span className="credit-sep"></span>
                <div className="credit-devs">
                    <center> {this.devs.map((dev) => this.userPic(dev))} </center>
                </div>
                {this.devs.map((dev) => this.userDetails(dev))}
            </div>
        )
    }
}

export default Credits

