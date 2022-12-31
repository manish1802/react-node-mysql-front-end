import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",
     height:"100vh", backgroundColor:"#DCDCDC", flexDirection:"column",
     boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
      
    <h1>Register</h1>
    <form style={{
      display:"flex",
      flexDirection:"column",
      backgroundColor:"white",
      width:"30%", 
      padding:"50px",
      gap:"30px"}}>

    <input style={{
        padding:"10px",
        border:"none",
        borderBottom:"1px solid black"
        }} type="text" placeholder='Username'/>

        <input style={{
            padding:"10px",
            border:"none",
            borderBottom:"1px solid black"
        }} type="email" placeholder='Email'/>

        <input style={{
            padding:"10px",
            border:"none",
            borderBottom:"1px solid black"
        }} type="password" placeholder='Password'/>

         <button style={{ 
            backgroundColor:"green",
            border:"none", 
            padding:"11px"
        }}>Login</button>
        
         <span style={{
            fontSize:"20px",
            textAlign:"center"
        }}>Don't you have Account:? <Link to="/login">Login</Link></span>
    </form>
</div>
  )
}
