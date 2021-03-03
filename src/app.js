import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Home from './homepage';
import StudentList from './studentlist';
import Error from './error';






const App =()=>{
    return(
<>
<Router>
<Switch>

<Route exact path="/">

<Home/>

</Route>

<Route exact path="/viewlist">

<StudentList/>

</Route>

<Route path="*">

<Error/>

</Route>








</Switch>



</Router>






</>

    )
}


export default App;