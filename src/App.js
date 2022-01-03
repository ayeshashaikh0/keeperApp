import React,{useState} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateNote from './components/CreateNote';
import RemoveNote from './components/RemoveNote';
import NotesPrint from './components/NotesPrint';
function App() {
  const [AddItem,SetItem]=useState([]);
  const addNote=(note)=>{
    let newObj = {id:new Date().valueOf(), title:note.title, content:note.content}
    SetItem((prevData)=>{
      return[...prevData,newObj];
    });
  };
  const deleteItem=()=>{
    SetItem([]);
  }

  const onDelete=(id)=>{
   const filterArray = AddItem.filter((item) => item.id !== id);
   SetItem(filterArray);
  };
  const onPublish=(obj)=>{
   let updatedArray=AddItem.map((item)=>{
     return (item.id ===obj.id ? obj:item)
     })
   SetItem(updatedArray)
  };
  console.log(AddItem);
  return <>
  <Header/>
  <CreateNote AddedNote={addNote}/>
  <NotesPrint AddItem={AddItem} onDelete={onDelete} onPublish={onPublish}/>
  <RemoveNote deleteItem={deleteItem}/>
  <Footer/>
  </>
}

export default App;
