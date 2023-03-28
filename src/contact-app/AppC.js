import React, { useState,useEffect } from 'react';
import '../contact-app/AppC.css'
import Header from './Header';
import { AddContact } from './AddContact';
import ContactList from './ContactList';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function AppC() {
    const LOCAL_KAY = 'contacts';
    const [contacts,setContacts] = useState([]);

    useEffect(()=>{
        const retriveData = JSON.parse(localStorage.getItem(LOCAL_KAY));
        if(retriveData){
            setContacts(retriveData)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem(LOCAL_KAY, JSON.stringify(contacts))
    },[contacts])

    const addContactHandler = (contact) =>{
        console.log(contact)
        setContacts([...contacts,contact])
    }

    const onDelete = (contact) => {
        setContacts(contacts.filter((e)=>{
            return e!==contact;
        }))
    }

    return (
        <>
        <Router>
                <Header />
            <Routes>
                <Route path='/Add'  element={<AddContact addContactHandler={addContactHandler}/>}></Route>
                <Route path='/'  element={<ContactList contacts={contacts} onDelete={onDelete}/>}></Route>
            </Routes>
        </Router>
        </>
    )
}

export default AppC;