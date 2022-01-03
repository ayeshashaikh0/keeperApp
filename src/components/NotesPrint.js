import React from "react";
import Note from "./Note";
function NotesPrint({AddItem,onDelete,onPublish}){
    return (
        <>
        {AddItem.map((data,index)=>{
            return <Note key={index}
            id={data.id}
            title={data.title}
            content={data.content}
            onDelete={onDelete}
            onPublish={onPublish}
            />
          })}   
     </>
    )
}
export default NotesPrint;