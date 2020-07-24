import React ,{ Component }from 'react';
import{ BrowserRouter as Router , Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from './layout/Header';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';
import About from './components/pages/About';
import {v4 as uuidv4} from "uuid"; 
import Axios from 'axios';

class App extends Component {
  state = { 
    todoList: [  ]
   }

   componentDidMount(){
     Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=30')
     .then(res => this.setState({todoList : res.data}));
   }

   markCompleted =(id) => {
     this.setState({ todoList : this.state.todoList.map( todo => {
       if (todo.id === id){
         todo.completed = !todo.completed;
         
       } 
       return todo;
     })});
   }

   deleteTodo =(id) => {
     this.setState({ todoList: [...this.state.todoList.filter( todo => todo.id !== id)]});
   }

   AddTodo =(newTitle) =>{
     const newTodo = {
       id: uuidv4() ,
       title: newTitle,
       completed :false
     }
     this.setState({ todoList : [...this.state.todoList,newTodo] });
   }

  render() { 
    return ( 
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path='/' render = {props => (
              <React.Fragment>
                <AddTodo addTodo={this.AddTodo} />
                <Todos todos={this.state.todoList} markCompleted={this.markCompleted} deleteTodo={this.deleteTodo} />
              </React.Fragment>
            )}/>
            <Route path='/about' component ={About} />
          </div>
          <Footer />
        </div>
      </Router>
     );
  }
}
 
export default App;
