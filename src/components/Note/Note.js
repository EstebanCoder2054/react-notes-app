import React, { Component } from 'react';
//se bedería importar un propio CSS ¿?
import './Note.css';

class Note extends Component {

    // constructor(props) {
    //     super(props);

    // }

    handleRemove(id){
        console.log(id);
        alert('removed: ' , id)
    }

    render() {
        return (
            <div className="Note">
                <span
                    onClick={ ()=>this.handleRemove(this.props.noteId) }
                >
                    &times;
                </span>
                <p>{this.props.noteContent}</p>
            </div>
        );
    }
}

export default Note;