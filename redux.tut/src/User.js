import React from 'react'
const User=(props)=>{
    const {data}=props
    return(
        <div>
        <h1>User Component:{data.name}</h1>
        <h2>User's Age is:{data.age}</h2>
        </div>
    )
}
export default User;