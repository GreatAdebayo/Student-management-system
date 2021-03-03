import {React, useState} from 'react'








const StudentList=()=>{

    let [enable,setEnable]=useState(true)
    let [theStudent,setStudents] =useState( JSON.parse(localStorage.getItem('myStudents')))
    let [student,setStudent]=useState({name:'', phone:'', mail:'', level:''})
let [index,setIndex]=useState(null)



    const profile = (index) =>{
        document.getElementById('disp').style.visibility='visible'
   setIndex(index)
    let a=theStudent[index]
    setStudent(a)
   
        
    }

    const editit = ()=>{
        setEnable(false)
    }

     const handleChange =(e)=>{
         let name1 = e.target.name;
         let value1 = e.target.value;
      setStudent({... student, [name1]: value1})
     }


     const saveit =()=>{
theStudent[index]=student
localStorage.myStudents=JSON.stringify(theStudent)
setStudents(JSON.parse(localStorage.myStudents))
 setEnable(true);
     }


     const deleteIt = ()=>{
         document.getElementById('disp').style.visibility='hidden'
         theStudent.splice(index,1)
         
localStorage.myStudents=JSON.stringify(theStudent)
setStudents(JSON.parse(localStorage.myStudents))
     }

return(<>

<div className="container">
    <div className="d-flex border rounded justify-content-center mt-5" style={{backgroundColor:'tomato', color:'white', fontSize:'25px'}}><strong><i className="fas fa-eye"></i> VIEW STUDENTS LIST</strong></div> 


        <div className="row">
            <div className="col mt-5">
    
{theStudent.map((data, index)=>(
    <p key={index} className="lead"> {data.name}  <button class="btn ml-5" type="submit" style={{backgroundColor:'tomato', color:'white'}} onClick={()=>profile(index)}><i className="fas fa-save"></i> <strong>VIEW</strong></button>
    </p>

))}



    
            </div>
            <div id="disp" style={{visibility:'hidden'}} className="col mt-5 mb-5 border rounded">
<p className="lead" onClick={deleteIt}>STUDENT PROFILE <span className="float-right"> <i className="fas fa-window-close"></i> Delete Student </span></p>
<label for="usr"style={{color:'tomato'}}><strong><i className="fas fa-phone-alt"></i> Student Name</strong></label>
               
            <input type="text"  onChange={handleChange}   className="form-control" name="name" value={student.name} disabled={enable}/> <br/>
            <label for="usr"style={{color:'tomato'}}><strong><i className="fas fa-phone-alt"></i> Phone Number</strong></label>
               
            <input type="text" onChange={handleChange} className="form-control" name="phone" value={student.phone} disabled={enable}/> <br/>
            <label for="usr"style={{color:'tomato'}}><strong><i className="fas fa-phone-alt"></i> Email</strong></label>
               
            <input type="text"  onChange={handleChange} className="form-control" name="mail" value={student.mail} disabled={enable}/> <br/>
            <label for="usr"style={{color:'tomato'}}><strong><i className="fas fa-phone-alt"></i> level</strong></label>
               

            <input onChange={handleChange} type="text" className="form-control" name="level" value={student.level} disabled={enable}/> <br/>

            
            <button class="btn mb-2" type="submit" style={{backgroundColor:'tomato', color:'white'}} onClick={editit}><i className="fas fa-edit"></i> <strong>EDIT PROFILE</strong></button>


            <button class="btn  float-right" type="submit" onClick={saveit} style={{backgroundColor:'tomato', color:'white'}}><i className="fas fa-save"></i> <strong>SAVE</strong></button>
                

            </div>

        </div>



    </div>

</>
)

};



export default StudentList;