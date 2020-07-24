import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class todoItem extends Component {

   getStyle = () => {
      return{
         background : "f4f4f4" , 
         padding : "10px" , 
         borderBottom : "1px #ccc solid",
         textDecoration : this.props.todo.completed ? "line-through" : "none" ,
         color : this.props.todo.completed ? "#dddddd" : "#000000"
      }
   }
   render() {
      const {id ,title} = this.props.todo;
      return (
         <div style={this.getStyle()} >
            <p> 
               <input type="checkbox" onChange={this.props.markCompleted.bind(this,id)} /> {'  '}
               {title} </p>
               <button onClick={this.props.deleteTodo.bind(this,id)} style={btnStyle} >Delete</button>
         </div>
      )
   }
}


todoItem.propTypes = {
   todo : PropTypes.object.isRequired
}

const btnStyle = {
   background : "#ff0000",
   color :"#fff",
   border : "none",
   borderRadius : "10px",
   width : "60px",
   height : "20px",
   float:"right",
   padding : "3px 8px ",
   position:"relative",
   top:"-18px"
}

export default todoItem
