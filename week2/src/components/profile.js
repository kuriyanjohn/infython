import React from "react";

function Profile({name,age,role}){
    return (
        <div>
            <h2>Profile Details</h2>
            <h4>Name:{name}</h4>
            <h4>Age:{age}</h4>
            <h4>Role:{role}</h4>
        </div>
    )
}

export default Profile