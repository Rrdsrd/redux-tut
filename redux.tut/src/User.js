import React from 'react'
const User=(props)=>{
    const {data}=props
    return(
        <div>
        <h3>User's name:{data.name}</h3>
        <h3>User's Age is:{data.age}</h3>
        </div>
    )
}
export default User;