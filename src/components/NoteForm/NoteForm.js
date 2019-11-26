import React, {Component} from 'react'
import './NoteForm.css'; 

class NoteForm extends Component{
    constructor(props){
        super(props);
        this.addNote = this.addNote.bind(this);
    }

    addNote(){
        this.props.addNote(this.textInput.value);
        //para que vuelva a su estado original (vacío el input)
        this.textInput.value='';
        //para que se ponga automáticamente el cursor en el input una vez se envía una respuesta
        this.textInput.focus(); 
    }


    render(){
        return(
            <div className="NoteForm">
                
                <input 
                    ref={input => {this.textInput = input;}}
                    placeholder="write a note"
                    type="text"
                />

                <button
                    onClick={this.addNote}
                >
                    Add Note
                </button>
            </div>
        )
    }
}

export default NoteForm;