import React, { useState } from "react";
import Header from "./Header";
import Input from "./Input";
import List from "./List";
import CurrentDate from "./Date";

function App() {
  const [listItem,setListItem] = useState("")
  const [list,setList] = useState([])
  const handleInput = (event) => {
    const listItemValue = event.target.value;
    setListItem(listItemValue)
  }
  function handleAdd(){
    setList((prevValue) => {
      return ([...prevValue,listItem])
    })
    setListItem("")
  }
  function handleDelete(deleteId)
  {
    setList((prevValue) => {
      return (prevValue.filter((value,index) =>{
        return (index !== deleteId)
      }))
    })
  }
  return (
    <div className="App">
      <Header />
      <Input 
        inputValue = {listItem}
        onInput = {handleInput}
        onAdd = {handleAdd}
      />
      <div className="display">
        <ul>
          {list.map((value,index)=>{
            return (
              <List
                key={index}
                itemValue = {value}
                id = {index}
                onDelete = {handleDelete}
              />
            )
          })}
        </ul>
      </div>
      <CurrentDate />
    </div>
  );
}

export default App;
