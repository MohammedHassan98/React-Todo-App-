import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
   return (
      <header style={HeaderStyle} >
         <h1>Todo List</h1>
         <Link to='/' style={linkStyle} > Home </Link> | <Link to='/about' style={linkStyle} > About </Link>
      </header>
   )
}


const HeaderStyle = {
   textAlign :"center",
   background : "#2350b8",
   color :"#fff",
   padding: "10px",
   fontWeight:"bolder",
   borderRadius : "60px"
}

const linkStyle ={
   color: "#fff",
   textDecoration :"none",
   padding : "3px"
}
