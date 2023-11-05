import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import projectImage from '../image/leetcodeProf.png';
import chatapp from '../image/gchat.jpeg'
import interviewapp from '../image/interviewTaking.png';

import appetiteapp from '../image/appetite.png';
import { Link } from 'react-router-dom';
const Projects = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        // Update screenWidth when the window is resized
        const handleResize = () => {
          setScreenWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          // Remove the resize event listener when the component unmounts
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
      const flexDirection = screenWidth < 768 ? 'column' : 'row';
      const width= screenWidth < 768 ? '90%' : '50%';
      const src='https://www.youtube.com/watch?v=byCsxHUuOrk';
    return (
        <div  style={{color:'white'}}>
{/* Major projects */}
            <div>
                <h3>MERN Full stack web Developer</h3>
                <div style={{display:'flex',flexDirection:`${flexDirection}`,justifyContent:'center',margin:'auto',alignItems:'center'}}>
                <Card style={{ width: '18rem',margin:'20px'}}>
                    <Card.Img variant="top" src={chatapp} />
                    <Card.Body>
                        <Card.Title>G-chat</Card.Title>
                        <Card.Text>
                            <p><b>Technology: </b>
                            <i>ReactJs,  CSS, NodeJs, MongoDB, Socket.io, ImageKit, ChakraUi</i>
                            </p>
                            <p><b>Features: </b>
                            <i>One to One chat, Groupe chat, special features for admin of Group, Search by name and search by Id to chat with anyone, Notification, Authentication</i>
                            </p>
                        </Card.Text>
                        <Link to="https://github.com/Gavnishkumar/G-chat" target='_blank'><Button variant="primary" style={{margin:'1em'}}>Repository</Button></Link>
                        <Link to="https://www.youtube.com/embed/2kN__RshyLw?si=EH5JN-fiA48bbEoB" target='_blank'><Button variant="secondary" style={{margin:'1em'}}>Project</Button></Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem',margin:'20px'}}>
                    <Card.Img variant="top" src={interviewapp} />
                    <Card.Body>
                        <Card.Title>InterView Taking web app</Card.Title>
                        <Card.Text>
                            <p><b>Technology: </b>
                            <i>ReactJs, CSS, NodeJs, ExpressJS, MongoDB, WebRtc, Monaco Editor</i>
                            </p>
                            <p><b>Features: </b>
                            <i>Peer to peer video confrencing, screenShare, Mute and Unmute audio and video, 
                                Code Editor, Compiler of 4 language, Authentication.
                            </i>
                            </p>
                            
                        </Card.Text>
                        <Link to="https://github.com/Gavnishkumar/iprep" target='_blank'><Button variant="primary" style={{margin:'1em'}}>Repository</Button></Link>
                        <Link to="https://youtube.com/shorts/SkQe9-6lFGU?si=JL82lL0LROsIK-dZ" target='_blank'><Button variant="secondary" style={{margin:'1em'}}>Project</Button></Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem',margin:'20px'}}>
                    <Card.Img variant="top" src={appetiteapp} />
                    <Card.Body>
                        <Card.Title>Appetite-Suppresant</Card.Title>
                        <Card.Text>
                            <p><b>Technology: </b>
                            <i>HTML, CSS, javascript, NodeJs,ExpressJS, MongoDB, Bootstrap</i>
                            </p>
                            <p><b>Features: </b>
                            <i>Search food shop near me, contact information of near shop, search near food/Restaurant/Hotel Rooms on map location.</i>
                            </p>
                        </Card.Text>
                        <Link to="https://github.com/Gavnishkumar/appeptite-suppressant" target='_blank'><Button variant="primary" style={{margin:'1em'}}>Repository</Button></Link>
                        <Link to="https://www.youtube.com/embed/p0mz1IwyCM8?si=a1wo5oyCboazrRcu" target='_blank'><Button variant="secondary" style={{margin:'1em'}}>Project</Button></Link>
                    </Card.Body>
                </Card>
               
                </div>
                {/* <video controls width="100%">
      <source src={src} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>*/}
            </div> 
            <div style={{display:'flex',flexDirection:'column',margin: 'auto',paddingBottom:'10vh',justifyContent:'center',alignItems:'center'}}>

          <h2>G-chat app video view</h2>
          <iframe width={width} height="315" src="https://www.youtube.com/embed/2kN__RshyLw?si=EH5JN-fiA48bbEoB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h2 style={{marginTop:'25px'}}>InterView taking app video view </h2><Link to='https://youtube.com/shorts/SkQe9-6lFGU?si=JL82lL0LROsIK-dZ'><Button variant="primary" style={{margin:'1em'}}>Click to watch</Button></Link>   
            <h2>Appetite Suppresant-Hotel,food shop finder</h2>
            <iframe width={width} height="315" src="https://www.youtube.com/embed/p0mz1IwyCM8?si=a1wo5oyCboazrRcu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default Projects
