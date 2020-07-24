import React from 'react'

export default function Footer() {
   return (
      <div style={footerStyle} >
         <h1> Work Smarter NOT Harder </h1>
      </div>
   )
}

const footerStyle ={
   textAlign :"center",
   background : "#2350b8",
   color :"#fff",
   padding: "10px",
   fontSize:"8px",
   position : "fixed",
   bottom:"0px",
   width:"100%"
}
