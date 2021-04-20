import React, { Component } from 'react';
import { StyleSheet, Text, } from 'react-native';
import App from '../App';
import { FromEvent } from 'react'

class ToDoList extends Component {
    constructor(){
    super(){
        this.state ={
        userInput: '',
        items: [],
        newTodo:'' 
    }
    }

    const onIputChange = (event) =>{
        setInput(event.target.value);
    }
    AddTodo(Event){
        
    }
    deleteTodo(todo){
    const lis=document.querySelectorAll('li');
    const list =document.querySelector('ul');
    lis[0].remove();
    list.removeChild(lis[3]);
    }
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

    button: {
        backgroundColor: "black",
        minWidth: 35,
        minHeight: 80,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 17,
        borderRadius: 10,
    },

    textStyle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#ffffff',
        margin: 20
    }
});


export default ToDoList;