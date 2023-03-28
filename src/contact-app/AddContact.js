
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AddContact = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const Navigate = useNavigate();
    

    function Add(e) {
        e.preventDefault();
        if (name === "" || email === "") {
            alert('All the fields are mandatory')
        }else{
            props.addContactHandler({ name, email })
            setName('')
            setEmail('')
        }
        console.log({ name, email })

        Navigate('/');
    }
    
    return (       
        <div className='App'>
            <form onSubmit={Add}>
                <leble>Name</leble>
                <input type="text" value={name} placeholder='Name' onChange={(e) => { setName(e.target.value) }}></input><br></br>
                <leble>Email</leble>
                <input type="text" value={email} placeholder='Email' onChange={(e) => { setEmail(e.target.value) }}></input><br></br>
                <button className='btn'>Add</button>
            </form>
        </div>
    )
}