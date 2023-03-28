import React from 'react';
import ContactCard from './ContactCard';
import {Link} from 'react-router-dom';


function ContactList(props){
    console.log(props)
    const renderList = props.contacts.map((contact)=>{
        return <ContactCard contact={contact} onDelete={props.onDelete}/>
    })
    console.log(renderList)

    return(
        <div className='App'>
        <Link to="/Add"><button className='btn'>Add Contacts</button></Link>
        <h4>Contact List</h4>
        {/* <div>
        <input type='text' placeholder="search" ></input>
        <button className='btn'>Search</button>
        </div> */}
        {renderList}
        </div>
    )
}
export default ContactList;