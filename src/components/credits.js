import React from 'react';
import '../App.css';
import {FaEnvelope, FaGithub} from 'react-icons/lib/fa';

class Credits extends React.Component {
    constructor(props) {
        super(props);
        this.devs = [
            {
                name:"Aswin G",
                email:"jondoe@tesla.com",
                sub:"Project Lead",
                githubID:"https://github.com/agzuniverse",
                avatar: require("../img/devpic/agzuniverse.jpeg"),
                desc: 'JS',
                gitName: 'agzuniverse',
            },
            {
                name:"Aswin M Prabhu",
                email:"jondoe@tesla.com",
                sub:"Front End",
                githubID:"https://github.com/aswin1999",
                avatar: require("../img/devpic/aswin1999.jpeg"),
                desc:'Re',
                gitName: 'aswin1999',
            },
            {
                name:"Joyal A Johney",
                email:"jondoe@tesla.com",
                sub:"Front End",
                githubID:"https://github.com/JoyalAJohney",
                avatar: require("../img/devpic/JoyalAJohney.jpeg"),
                desc:'elon musk',
                gitName: 'JoyalAJohney',
            },
            {
                name:"Vivek R",
                email:"123vivekr@gmail.com",
                sub:"Back End",
                githubID:"https://github.com/123vivekr",
                avatar: require("../img/devpic/123vivekr.jpeg"),
                desc:'Studying Computer Science and Engineering at Model Engineering College (2017-2021 batch).',
                gitName: '123vivekr',
            },
        ];
    }

    userPic = (dev) => {
        return(
            <a key={dev.name + "pic"} href={"#"+dev.name}><img id='credits-avatar' src={dev.avatar} alt={dev.name+" pic"} /></a>
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
            <FaEnvelope key={dev.email} /> {dev.email}<br />
            <FaGithub key={dev.githubID} /> <a href={dev.githubID} target="_blank" style={{color:"#2ecc71"}}>{dev.gitName}</a>
            </div>
        )
    }

    render () {
        return (
            <div className="credit-container">
                <a style={{'textDecoration': "none"}} href="/"><h2 id="credits-head">Books<span id="credits-watch">Watch</span></h2></a>
                <h1 id="credits-aboutus">ABOUT US</h1>
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

