import React, { useEffect, useState } from 'react'
import CanvasJSReact from '@canvasjs/react-charts';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import leetcodeProf from '../image/leetcodeProf.png';
import gfgProf from '../image/gfgprofile.png';
import { Link } from 'react-router-dom';
import bg from '../image/bg2.jpg';
const Skill = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;

  const MyskillsColumn = {
    animationEnabled: true,
    theme: "dark1",
    title: {
      text: "Skills that i gained during my 3 years"
    },
    axisX: {
      title: "skills rating percentage",
      reversed: true,
    },
    axisY: {
      title: "skills",
      includeZero: true,
      // labelFormatter: this.addSymbols
    },
    data: [{
      type: "column",
      dataPoints: [
        { y: 95, label: "DSA" },
        { y: 90, label: "ReactJs" },
        { y: 85, label: "NodeJS" },
        { y: 80, label: "MongoDB" },
        { y: 85, label: "ExpressJs" },
        { y: 50, label: "Socket.io" },
        { y: 50, label: "WebRtc" },
        { y: 95, label: "C++" },
        { y: 80, label: "Python" },
        { y: 70, label: "JAVA" },
      ]
    }]

  }
  const DSA = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "dark1", // "light1", "dark1", "dark2"

    title: {
      text: "Data structure and Algorithms"
    },
    data: [{
      type: "pie",
      indexLabel: "{label}: {y} problems",
      startAngle: -90,
      dataPoints: [
        { y: 83, label: "Dynamic programing" },
        { y: 23, label: "Backtracing" },
        { y: 18, label: "Divide and conquer" },
        { y: 66, label: "Hash Table" },
        { y: 207, label: "Array" },
        { y: 54, label: "Sorting" },
        { y: 33, label: "Stack" },
        { y: 33, label: "Linked list" },
        { y: 78, label: "Heap" },
        { y: 110, label: "Tree" },
        { y: 101, label: "Graph" }

      ]
    }]
  }
  const QRatio = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "dark1", // "light1", "dark1", "dark2"

    title: {
      text: "Ratio of level of problems in percentage"
    },
    data: [{
      type: "pie",
      indexLabel: "{label}: {y} %",
      startAngle: -90,
      dataPoints: [
        { y: 56.53, label: "Medium" },
        { y: 10.68, label: "Hard" },
        { y: 32.77, label: "Easy" },
      ]
    }]
  }
  // responsive 
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
    <div id="chartContainer" style={{ color:'white' ,'background':`url(${bg})`,
    'backgroundSize':'cover',
    'backgroundRepeat':'repeat-y'}}>
      <div style={{width:'100%','margin':'20px auto'}}>
        <h2>Skills: </h2>
        <i><b>Data Structure and Algorithms(DSA), ReactJs, NodeJS, MongoDB, ExpressJs, problem solving, Competative programing, Communication Skills,C++, Python, JAVA</b></i>
      </div>
      <h2> Coding Profile: </h2>


      <div style={{display:'flex',width:`${width}`, margin:'auto',flexDirection:`${flexDirection}`,justifyContent:'space-between',alignItems:'center'}}>
       
        <Card style={{ width: '18rem',marginTop:'10px'  }}>
      <Card.Img variant="top" src={leetcodeProf} />
      <Card.Body>
        <Card.Title>Leetcode</Card.Title>
        <Card.Text>
        Continuing to solve problems after surpassing <b>680 by April 2024</b>, demonstrating a commitment to ongoing growth and skill enhancement.
        </Card.Text>
        <Link to="https://leetcode.com/gavnish_kumar/" target='_blank'><Button variant="primary">Go To Profile</Button></Link>
      </Card.Body>
    </Card>
        
      
        <Card style={{ width: '18rem',marginTop:'10px' }}>
      <Card.Img variant="top" src={gfgProf} />
      <Card.Body>
        <Card.Title>Geeksforgeeks</Card.Title>
        <Card.Text>
        Continuing to solve problems after surpassing <b>450 by December 2023</b>, demonstrating a commitment to ongoing growth and skill enhancement.
        </Card.Text>
        <Link to="https://auth.geeksforgeeks.org/user/gk991789/practice" target='_blank'><Button variant="primary">Go To Profile</Button></Link>
      </Card.Body>
    </Card>
        
      </div>
      <div style={{ display: 'flex' ,flexDirection:`${flexDirection}`, justifyContent:'space-around'}}>
        {/* <div style={{ width: `${width}`,marginTop:'10px',padding:'20px'}}>

          <CanvasJSChart options={MyskillsHor} />
        </div> */}
        <div style={{ width: `${width}`,marginTop:'10px',padding:'15px'}}>
          <CanvasJSChart options={MyskillsColumn} />
        </div>
      </div>
      <div style={{margin:'auto',marginTop:'10px',padding:'15px',width:`${width}`}}>
      <CanvasJSChart options={DSA} />
      </div>
      <div style={{margin:'auto',marginTop:'10px',padding:'15px',width:`${width}`}}>
      <CanvasJSChart options={QRatio}/>

      </div>
      <div style={{paddingBottom:'20px'}}>
        <p>For development skills refer to projects page.</p>
        <Link to="/projects" ><Button variant="primary">Go To Projects</Button></Link>
      </div>
    </div>
  )
}
export default Skill
