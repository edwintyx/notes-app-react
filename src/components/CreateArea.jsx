import React, {useState} from "react";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(event) {
        // ES6 destructuring
        const {name, value} = event.target;
        setNote(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    function onAdd(event) {
        props.addNote(note)
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();
    }


  return (
    <div>
      <form>
        <input onChange={handleChange} value={note.title} name="title" placeholder="Title" />
        <textarea onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={onAdd}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
