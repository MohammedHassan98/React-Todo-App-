import React, { Component } from 'react'

export class AddTodo extends Component {

   state = {
      title : ""
   }

   handleChange = (e) => {
      this.setState( {title : e.target.value} )
   }

   FormSubmit =(e) =>{
      e.preventDefault();
      this.props.addTodo(this.state.title);
      this.setState({title:''});
   }

   render() {
      return (
         <form style ={{display:"flex" ,padding:"3px"}} onSubmit={this.FormSubmit}  >  
            <input type="text" name="title" 
            placeholder="Add Task ..." 
            style={textIn} 
            value={this.state.title} 
            onChange={this.handleChange} />

            <input type="submit" value="Add" style={btn} />
         </form>
      )
   }
}

const textIn = {
   flex:"10",
   height:"30px",
   borderRadius :"10px",
   padding : "5px",
   border :" 1px #dddddd solid",
   margin : "2px"
}

const btn ={
   flex:"1",
   background :"#396ee7",
   color : "#fff",
   borderRadius : "20px",
   border : "none",
   padding : "5px",
   margin : "2px"
}

export default AddTodo
