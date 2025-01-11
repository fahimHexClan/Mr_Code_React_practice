import PropTypes from 'prop-types' //props import karanawa node_module eke thiyana

function Student(props){//javascript object ekak,meka use karala godak variable store karanna puluwan
{/*props================= read only propperties that are shhare between components.A parent component cam send data to chhild component*/}
    return(
<div className="student">
<p>Name:{props.name}</p>
<p>Age:{props.age}</p>
<p>City:{props.city}</p>
<p>Student:{props.isStudent ? "YES" : "NO"}</p> {/*condition ekak danna ona*/}




</div>

    );

}
{/*propsTypes================= a mechanism that ensures that the passed value of the correct datatype */}
Student.propTypes={//propwala type divied karaganna puluwan
    name: PropTypes.string,
    age:PropTypes.number,
    city: PropTypes.string,
    isStudent : PropTypes.bool,
}

{/*=======DefaultProps=========== default values for props in case they are not the parent component*/}
Student.defaultProps ={
    name:"Guest",
    age: 20,
    city:"Haliela",
    isStudent: false,
}
export default Student