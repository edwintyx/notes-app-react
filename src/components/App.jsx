import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [listNote, setListNote] = useState([]);

  // add note to array
  function addNote(note) {
    setListNote((prevNote) => {
      return [...prevNote, note];
    });
  }

  // delete note in array
  function deleteNote(id) {
    console.log("deleted id: " + id);

    setListNote((prevList) => {
      return prevList.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {listNote.map((eachNote, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={eachNote.title}
            content={eachNote.content}
            delNote={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
