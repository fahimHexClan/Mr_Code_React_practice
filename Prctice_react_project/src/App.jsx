import Button from "./Button";
import ColorPicker from "./ColorPicker";
import Counter from "./Counter";
import List from "./List"
import MyComponent from "./MyComponent";
import ObjectStateArray from "./ObjectState";
import OnChange1 from "./OnChange1";
import OnChange from "./OnChange1";
import ProfilePic from "./Profilepic";
import Student from "./Student"
import ToDoList from "./ToDoList";
import UpdatteArraysInState from "./UpdateArraysInState";
import UpdateObjectInState from "./UpdateObjectsInState";
import UpdateFun from "./UpdaterFun";
import UseContextA from "./UseContext_A";
import UseContext from "./UseContext_A";
import UseEffect from "./useEffect";
import UseRef from "./UseRef";
import UserGreetings from "./UserGreeting"


function App() {
  
const fruits =[{id:1 , name :"apple" ,calories : 100},
              {id:2 , name :"banana" ,calories : 99},
              {id:3 , name :"orange" ,calories : 88},
              {id:4 , name :"cocounut" ,calories : 134},
              {id:5 , name :"pineapple" ,calories : 122}];




const vegitables =[{id:6 , name :"potatos" ,calories : 110},
                  {id:7 , name :"celery" ,calories : 15},
                  {id:8 , name :"carrots" ,calories : 25},
                  {id:9 , name :"corn" ,calories : 63},
                  {id:10 , name :"broccoli" ,calories : 50}];
  
  return (
    <>

{/*  =============================================props===========================================*/}

<Student name="Fahim" age={26} city="Badulla" isStudent={true}/>{/* String value ekak nththm rkata {} mehama danna ona*/} 
<Student name="Fazlan" age={23} city="Badulla" />{/* Boolean Default value assign karanawa*/}
<Student name="Fazlan" age={23} isStudent={true}/>{/* mokuth nttm Default assign karanawa*/}       
<Student />{/* default props*/} 

{/*  ==============================conditional rendaring================================*/}
{/*allows u 2 control what gets rendered in your application based on certain conditions (show ,hide or change component)*/}


<UserGreetings isLoggedIn={true} username="Fahim"/>




{/*  ============================== rendar Lists================================*/}



{fruits.length >0 &&<List items={fruits} category="Fruits"/>}
{vegitables.length > 0 &&<List items={vegitables} category="Vegitables"/>}




{/*  ============================== Click Events ================================*/}
{/*  clickEvent= An interaction a user Cliccks on a specific element. We can respond to click by passing a callback to the onclick event handler  */}

<Button/>
<ProfilePic/>



{/*  ============================== ReactHook & useState() ================================*/}

{/*  ReactHook= Special function tat allows functional components to use react features without 
wrighting class components (react v16.8) (useState,useeffects,useContext,UseReducer,useCallBack 
and more)*/}


{/* useState() = A ReactHook that allows the creation of a stateful varriable and a setter function 
to update its value in the vertical DOM [name,setName] */}



<MyComponent/>
<Counter/>


{/*  ============================== onChange ================================*/}

{/* onChange= event handler used primaryly with form elements Ex.<input>,<textArea> , <select>, <radio>
Triggers a function every time the value of the input changes*/}

<OnChange1/>



{/*  ============================== Color Picker ================================*/}

<ColorPicker/>

{/*  ============================== Update Function ================================*/}

{/* Update function = A function passed as an argument to setState()usually 
EX. setYear(ArrowFunction) or(y => y+1)
Allow for safe updates based on the previous state Used with multiple state updates and asynchronous function
good practice to use updater function */}

<UpdateFun/>

{/*  ============================== Update Objects in state ================================*/}

<UpdateObjectInState/>


{/*  ============================== Update Arrays in state ================================*/}

<UpdatteArraysInState/>


{/*  ============================== Update Arrays Of Object State ================================*/}

<ObjectStateArray/>


{/*  ============================== TODO LIST ================================*/}
  <ToDoList/>

{/*  ============================== useEffect() ================================*/}
<UseEffect/>

{/*  ============================== useContext() // props wenuwata use karanna puiuwan and easy================================*/}
<UseContextA/>

{/*  ============================== useRef() ================================*/}
<UseRef/>






         </>
  )
}

export default App
