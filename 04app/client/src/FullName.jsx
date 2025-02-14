import {useState} from 'react';//ui api 
function FullName(){
    const [person,setPerson]=useState({first_name:'rahul',last_name:'Kumar'});
    const onChangeFirstNAme=(event)=>setPerson({...person,first_name:event.target.value});
    const onChangeLastName=(event)=>setPerson({...person,last_name:event.target.value});
    /*const onChangeFirstName=(event)=>{
        const newPerson={...person};
        newPerson.first_name=event.target.value;
        setPerson(newPerson);
    }
    function onChangeLastName(event) {
        const newPerson = { ...person };
        newPerson.last_name = event.target.value;
        setPerson(newPerson);
    }*/
    return(
        <>
        <div className="container">
            <div className="form-group">
                <label for="first_name">First Name:</label>
                <input type="text" id="first_name" className="form-control" value={person.first_name} onChange={onChangeFirstNAme}/>
            </div>
            <div className="form-froup">
                <label for="last_name">Last Name:</label>
                <input type="text" id="last_name" className="form-control" value={person.last_name} onChange={onChangeLastName}/>

            </div>
            <div>Full Name:{person.first_name} {person.last_name}</div>
        </div>
        </>
    );
}
export default FullName;