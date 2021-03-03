import {React, useState} from 'react';

import {Link} from 'react-router-dom';





const Home =()=>{

let [student, SetStudent] = useState({name:'', phone:'', mail:'', level:''});
let [students, setStudents] = useState([]);

// SUBMIT FORM
let submitForm =(e)=>{
e.preventDefault();

let allStudents = {name:student.name, phone:student.phone, mail:student.mail, level:student.level}
setStudents ([...students, allStudents]);
let myJSON = JSON.stringify(students);
localStorage.setItem('myStudents', myJSON);
}
// SUBMIT FORM ENDS


// INPUT
let handleChange = (e)=>{
    let name1 = e.target.name;
    let value = e.target.value;

  SetStudent({...student, [name1]: value})

  


}
// INPUT ENDS


    return(

    <>



<div className="container">
<div className="d-flex border rounded justify-content-center mt-5 " style={{backgroundColor:'tomato', color:'white', fontSize:'25px'}}><p className="pt-2"><strong><i class="fas fa-plus"></i> ADD A NEW STUDENT HERE</strong></p> <Link to="/viewlist" className="btn ml-5 my-2" style={{backgroundColor:'white', color:'tomato', fontSize:'15px'}}><strong><i className="fas fa-eye"></i> View Saved Students</strong></Link></div> 

    <div className="row">
      

        <div className="col text-center">
        <form className="pt-5" onSubmit={submitForm}>  
        <label for="usr" style={{color:'tomato'}}><strong> <i className="fas fa-file-signature"></i> Student Name</strong></label>
                <input type="text" placeholder="Student Name" className="form-control" name="name" onChange={handleChange} value={student.name}/> <br/>

                <label for="usr"style={{color:'tomato'}}><strong><i className="fas fa-phone-alt"></i> Phone Number</strong></label>
                <input type="number" placeholder="Phone Number" className="form-control" name="phone" onChange={handleChange}  value={student.phone}/> <br/>

                <label for="usr"style={{color:'tomato'}}><strong><i className="fas fa-envelope"></i> Email Address</strong></label>
                <input type="email" placeholder="Email" className="form-control" name="mail" onChange={handleChange} value={student.mail}/>  <br/>

                
                <label for="usr"style={{color:'tomato'}}><strong><i className="fas fa-layer-group"></i> Level</strong></label>
                <input type="number" placeholder="Level" className="form-control" name="level" onChange={handleChange} value={student.level}/>  <br/>

                <button class="btn" type="submit" style={{backgroundColor:'tomato', color:'white'}}><i className="far fa-save"></i> <strong>SAVE STUDENT</strong></button>




            </form>
     
        </div>


    </div>





</div>



    </>)
};






export default Home;