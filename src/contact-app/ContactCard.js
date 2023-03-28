import React from "react";

function ContactCard({contact,onDelete}){
    const {id,name,email} = contact
    return(
        <div className="box">
            <div className="bold">{name}</div>
            <div>{email}</div>
            <button className="Danger" onClick={()=>{onDelete(contact)}}>Delete</button>
        </div>
    )
}
export default ContactCard;