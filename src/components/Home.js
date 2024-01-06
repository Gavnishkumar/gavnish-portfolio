import React, { useEffect, useRef, useState } from 'react'
import bg from '../image/bg2.jpg'
import {  Img } from '@chakra-ui/react';
import { TypeAnimation } from 'react-type-animation';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import intercertificate from '../image/interncertificate.png';
import resume from '../image/resume.png';
const Home = () => {
  
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [aboutme,setAboutme] = useState(false);
  const [detailHeight,setDetailHeight]= useState('0px');
 
  const bottomRef=useRef(null);
  const handleAboutMe=()=>{
      setAboutme(!aboutme)
      setDetailHeight('400px')
      if(!aboutme){
        bottomRef.current?.scrollIntoView({behavior: 'smooth'});
       }
  }

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
  const width= screenWidth < 768 ? '100%' : '50%';
  return (
    <div style={{'background':`url(${bg})`,'backgroundSize':'cover'}}>
       <div style={{'display': 'flex', 'flexDirection': flexDirection}}>
       <div style={{ 'width': width, 'display':'flex','flexDirection': 'column','justifyContent': 'center','alignItems': 'center'}}> 
          <TypeAnimation
        sequence={[
          `Welcome to my \nProgramming world`,
          1000,
          "",
        ]}
        speed={50}
        style={{ whiteSpace: 'pre-line', fontSize: '2em',color: 'white',height:'3em', fontFamily: 'sans-serif' }}
        repeat={Infinity}
      />
         <i style={{'color': 'white'}}><b>Born to create ... </b></i>
         <i style={{'color': 'white'}}><b>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</b></i>
       </div>
      <div style={{'width': width, 'color': 'white','display': 'flex','justifyContent': 'center', 'alignItems':'center','flexDirection': 'column'}}>
        <Img src={'https://ik.imagekit.io/gavnish/test-upload_CiFZbPc0-.png?updatedAt=1691840962857'} name="Gavnish kumar" style={{'margin': 'auto','marginTop':'40px','height':'20rem','width': '20rem','borderRadius':'200px'}}></Img>
        <h2 style={{'color': 'white'}}>Gavnish Kumar</h2>
        <i style={{'color': 'white'}}><b>Programmer | Developer | Creater |</b><br/>
        <b> Intern @ Sasefied as full stack developer</b></i>
        <i><b>Indian institute of information technology, Sonepat (IIITS)</b></i>
        <i><bolder>B-Tech,pre-final year student</bolder></i>
       </div>
       </div>
      <div style={{display:'flex',padding:'1.5em',justifyContent:'center',alignItems:'center'}}>
      <Card style={{ width: '18rem',margin:'20px'}}>
                    <Card.Img variant="top" src={intercertificate} />
                    <Card.Body>
                        <Card.Title>Intern Certificate</Card.Title>
                        <Card.Text>
                            <p>Here's my Internship Certificate from Sasefied! It signifies my successful completion of a dynamic internship as a MERN Stack developer. Click below to discover more about my journey, showcasing dedication and growth throughout this valuable experience.
                            </p>
                        </Card.Text>
                        <Link to="https://drive.google.com/file/d/1ojFNwifMgjwzp9-8YNPsyZSXK-ybXtr-/view?usp=drive_link" target='_blank'><Button variant="primary" style={{marginTop:'1em',width:'100%'}}>Access my Certificate</Button></Link>
                        <Link to="https://wa.me/919368985917" target='_blank'><Button variant="secondary" style={{marginTop:'1em',width:'100%'}}>write a Review</Button></Link>
                    </Card.Body>
                </Card>
      <Card style={{ width: '18rem',margin:'20px'}}>
                    <Card.Img variant="top" src={resume} />
                    <Card.Body>
                        <Card.Title>My Resume</Card.Title>
                        <Card.Text>
                            <p>My resume offers a detailed overview of my accomplishments, expertise, and proficiencies. Explore the complete scope of my experiences to gain deeper insight into my qualifications and capabilities. Your interest in reviewing my resume will greatly appreciated.
                            </p>
                        </Card.Text>
                        <Link to="https://drive.google.com/file/d/1fdbNJyMiUvPCWk_yAmau8VNlOta7JbxF/view?usp=drive_link" target='_blank'><Button variant="primary" style={{marginTop:'1em',width:'100%'}}>Access my resume</Button></Link>
                        <Link to="https://wa.me/919368985917" target='_blank'><Button variant="secondary" style={{marginTop:'1em',width:'100%'}}>write a Review</Button></Link>
                    </Card.Body>
                </Card>
      </div>
        <Button onClick={handleAboutMe} style={{'marginTop':'20px','Width':'10%'}}>{aboutme ? 'less Show' : 'More about me'}</Button>
      
        { aboutme && <div id="detailbox" style={{
  'color': 'white',
  'width': '70%',
  'margin': 'auto',
  'padding': '10px',
  // 'transition': 'height 2s ease', // Added transition property for height
  'transitionDuration':'2s',
  'TransitionProperty':'height',
  'transitionTimingFunction':'ease-in-out',
  'height':{detailHeight}
}} >
    Hey there, I'm Gavnish Kumar, and I'm on a mission to craft exceptional digital experiences. Currently, I'm pursuing my B.Tech degree at IIIT Sonepat, where I'm in the pre-final year of my journey. As a dedicated MERN stack developer, I thrive on turning ideas into reality through code. I've honed my problem-solving skills by tackling 850 DSA questions, fueling my passion for creating robust and efficient solutions. Join me as I explore the ever-evolving world of technology and bring ideas to life, one line of code at a time.
</div>
}
    <div ref={bottomRef} style={{height:'120px'}}></div>
    </div>
  )
}
export default Home
