import React, {Component} from 'react';

import './App.css';
import Note from './components/Note/Note';
import NoteForm from './components/NoteForm/NoteForm';

class App extends Component{

constructor(props){
  super(props);
  this.state= {
    notes: [
      {noteId: 1, noteContent: 'note 1'},
      {noteId: 2, noteContent: 'note 2'}
    ]
  }

  this.addNote = this.addNote.bind(this);
}

addNote(note){
  let {notes} = this.state;
  notes.push({
    noteId: notes.length + 1,
    noteContent: note
  });
  this.setState({
    notes: notes
  })
}

removeNote(){

}

  render(){
  return (
    <div className="notesContainer">
      <div className="notesHeader">
        <h1>React y Firebase App Notes</h1>
      </div>

      <div className="notesBody">
        <ul>
          {
            this.state.notes.map(note => {
              return(
                
                  <Note 
                    key={note.noteId}
                    noteContent={note.noteContent}
                    noteId={note.noteId}
                  />
                
              )
            })
          }
        </ul>
      </div>

      <div className="notesFooter">
          <NoteForm
            addNote={this.addNote}
          /> 
      </div>
    </div>
  );
  }
}

export default App;
