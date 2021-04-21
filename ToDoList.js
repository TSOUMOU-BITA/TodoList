import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Dimensions, ScrollView} from 'react-native';
import App from '../App';
import { FromEvent } from 'react'

  class ToDoList extends Component {
  constructor(){
    super();
      this.state = {
        userInput: '',
        items: [],
        newTodo:'' 
      };
    }
    onChange(event) {
      console.log(event.target.value)
    }
    deleteTodo(todo){
      const lis=document.querySelectorAll('li');
      const list =document.querySelector('ul');
      lis[0].remove();
      list.removeChild(lis[3]);
    }
  
  
  render (){
      return (
            <div>
                <h1>Todo List</h1>
                <form>
                  <input 
                  value={this.state.userInput} type="text" 
                  placeholder="Ajouter un element"
                  onChange={this.onChange.bind(this)}
                  onIput={this.updateNewTodo}/>
                  <button>Ajouter</button>
                </form>
            </div>
      );
    }
    updateNewTodo =(g: FromEvent<htmlinputelement>) =>{
      this.setstate({newTodo: (e.target as htmlinputelement).value})
    }
}  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 50,
    marginTop: 70,
  },
  input: {
  padding: 20,
  fontSize: 24,
  fontWeight: '200'
  },

  list: {
    backgroundColor: '#fff',
    flex: 0.9,
    borderRadius: 10,
    marginTop: 25
  },
  inputBox:{
    borderBottomWidth: 1.5,
    borderBottomColor: '#a9a9'
  },

});
export default ToDoList;