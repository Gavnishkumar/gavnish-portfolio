import { Img } from '@chakra-ui/react'
import React from 'react'
import bg from '../image/bg2.jpg'
import schoolImage from '../image/school.png'
import school from '../image/schoolImage.jpg';
import college from '../image/college.jpg'
const Education = () => {
  return (
    <div style={{'height':'800px','color':'white','height':'100%',
    'background':`url(${bg})`,
    'backgroundSize':'cover',
    'backgroundRepeat':'repeat-y'}}>
      <Img src="https://www.iiitsonepat.ac.in/storage/general/college%20website%20logo.png" style={{'margin': 'auto','marginTop':'20px','borderRadius':'40px'}}></Img>
    <div style={{'display':'flex','flexDirection':`${window.innerWidth >786 ? 'row': 'column'}`,'justifyContent':'flex-start','alignItems':'left','marginTop':'20px'}}>
        <div style={{'width':`${window.innerWidth >786 ? '40%': '100%'}`,'padding':'20px','margin':'auto','display':'flex','align-items':'flex-start','flexDirection':'column','text-align':'left'}}>
      <h2>Current Education:</h2>
        <p><b>College: </b><i>Indian institute of information technology, Sonepat (IIITSonepat)</i></p>
        <p><b>Degree: </b><i>Bachelor's of technology(B-Tech) in information technology</i></p>
        <p><b>Year: </b><i>3<sup>rd</sup> year</i></p>
        <p><b>Expected graduation :</b><i> may-2025</i></p>
        <p><b>CGPA: </b><i>8.8 CGPA</i></p>
        <p  style={{'display': 'flex','flexDirection':'column','align-items':'flex-start'}}><b>Skills Learn during course:</b>C++,JAVA,Python, Full stack MERN developer, Data structure and Algorithms(DSA), professional and soft skills, and learning Continue</p>
        </div>
        <img style={{'width':`${window.innerWidth >786 ? '30%': '90%'}`,'height':'300px', 'margin':'auto','borderRadius':'20px','position':'relative'}} src={college}/>
    </div>
    <hr/>
    <div>
      <h1>Schooling</h1>
      <div style={{'background':'white','color':'black','width':'90%','borderRadius':'1em','margin':'auto','marginTop':'10px'}}>
        <div style={{'width':'100%','display':'flex','align-items':'center'}}>
      <img style={{'height':'7em'}} src={schoolImage}/>
      <div style={{'display':'flex','margin':'10px','flexDirection':'column','justifyContent':'left'}}>
      <h4 style={{'text-align':'left'}}>Ketan convent senior secondary school</h4>
      <i style={{'text-align':'left'}}><b>Jirauli mod, Aligarh, UttarPradesh, India</b></i>
      </div>
      </div>
      </div>
      </div>
      <div style={{'display':'flex','flexDirection':`${window.innerWidth >786 ? 'row': 'column'}`,'justifyContent':'flex-start','alignItems':'left','marginTop':'20px'}}>
        <div style={{'width':`${window.innerWidth >786 ? '40%': '100%'}`,'padding':'20px','margin':'auto','display':'flex','align-items':'flex-start','flexDirection':'column','text-align':'left'}}>
      <h2>Schooling Education:</h2>
        <p><b>School: </b><i>Ketan convent senior secondary school, Aligarh ,UttarPradesh, India</i></p>
        <p><b>Courses: </b><i>High school and Intermidiate</i></p>
       
        <p><b>Class 10<sup>th</sup></b><i> 2019, 90.2%</i></p>
        <p><b>Class 12<sup>th</sup></b><i> 2021, 94.8%</i></p>
       
        <p  style={{'display': 'flex','flexDirection':'column','align-items':'flex-start'}}><b>Achivements: </b>Award of excellence academics Achivements, JEE Advanced Rank: 1577 (EWS) , JEE main rank: 3334 (EWS), and AMUEEE rank: 32</p>
        </div>
        <img style={{'width':`${window.innerWidth >786 ? '30%': '90%'}`,'height':'300px', 'margin':'auto','borderRadius':'20px','position':'relative'}} src={school}/>
      
      </div>
    </div>
   
  )
}
export default Education