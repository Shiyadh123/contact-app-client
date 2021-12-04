import {React, useEffect, useState} from 'react';
import { Form,Button } from 'react-bootstrap';
import { useNavigate,useParams } from 'react-router';
import { Link } from 'react-router-dom'
 

const  EditContact =(props)=>{
    const data= JSON.parse(useParams().idData);
    const navigate=useNavigate();
    const [state,setState]=useState({id:data.id,name:data.name,email:data.email,number:data.number});

    const update=(e)=>{
        e.preventDefault();
        if(state.name===""||state.email===""||state.number===""){
            alert("All fields are required!");
        };
        props.updateContactHandler(state);
        setState({id:"",name:"",email:"",number:""});
        navigate("/");
    }
    return (
        <div style={{marginRight:'10px',marginLeft:'10px'}}>
            <h2 style={{ fontFamily:'Comic Sans MS', fontWeight:'400',margin:'0',padding:'8px 4px'}}>Edit Contact</h2>
            <Form onSubmit={update} >
                <Form.Group  className="my-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Name" value={state.name} onChange={(e)=>{setState(prevState=>{return{...prevState,name:e.target.value}})}}/> 
                </Form.Group>
                <Form.Group className="my-3" >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" name="email" placeholder="Email" value={state.email} onChange={(e)=>{setState(prevState=>{return{...prevState,email:e.target.value}})}}/> 
                </Form.Group>
                <Form.Group className="my-3" >
                    <Form.Label>Number</Form.Label>
                    <Form.Control type="text" name="number" placeholder="Number" value={state.number} onChange={(e)=>{setState(prevState=>{return{...prevState,number:e.target.value}})}}/> 
                </Form.Group>
                <Button variant="secondary" type="submit"> Edit</Button>
                <Link to="/"> <Button variant="secondary"> Back</Button></Link>
            </Form>
        </div>
    )
}

export default EditContact;