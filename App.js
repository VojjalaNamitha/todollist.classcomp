import React from "react";

class App extends React.Component{

  state={
    todoItemName:"",
    todoItems:[]
  }
inputNameChange(value){
this.setState({todoItemName:value})
}

addItem(){
 var copyTodoItems=[...this.state.todoItems]
 copyTodoItems.push(this.state.todoItemName)
 this.setState({todoItems:copyTodoItems})
}

  render(){
    return(
      <>
      <h1>App Component</h1>
      <input value={this.state.todoItemName} placeholder="type item" onChange={(e)=>{this.inputNameChange(e.target.value)}}/>
      <button onClick={()=>{this.addItem()}}>Add item</button>
      {JSON.stringify(this.state)}
      <ol>
        {this.state.todoItems.map((item,index)=>{
          return (<li key={index}>{item}</li>)
        })
        }
      </ol>

      </>
    )
  }
}

export default App;
