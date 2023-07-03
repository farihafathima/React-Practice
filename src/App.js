//import logo from './logo.svg';
import './App.css';
import {Button} from 'reactstrap'
import {ToastContainer,toast} from 'react-toastify'
import { Header } from './components/Header';
import 'bootstrap/dist/css/bootstrap.css'
import 'react-toastify/dist/ReactToastify.css'
import { Home } from './components/Home';
import { Course } from './components/course';
import { AllCourses } from './components/AllCourses';
import { AddCourse } from './components/AddCourse';

function App() {
  const btnHandle=()=>{
    toast.error("Done",{position:'bottom-center'});
  }
  return (
    <div className="App">
     {/* <Header  name="Fariha"  title="First Card"/>
     <hr/>
     <Header  name="Fatima"  title="Second Card"/>
     <hr/>
     <Header name="farisa"  title="Third Card"/>
     <h1>This is my React App</h1>
      <p>This is my program.Iam currently learning React JS</p>
      <p>Because I want to develop applications that calls Rest API's</p>
     <Header name="Neha"  title="Fourth Card"/> */}
        <ToastContainer/>
      <h1>This is bootstrap Components</h1>
      <Button color="warning" onClick={btnHandle}>First React Button</Button>
      <Home/>
      {/* <Course course={{title:"Django Course",description:"This is just testing"}}/>
      <Course course={{title:"Java Course",description:"This is just testing"}}/> */}

      <AllCourses/>
      <AddCourse/>
    </div>
  );
}

export default App;
