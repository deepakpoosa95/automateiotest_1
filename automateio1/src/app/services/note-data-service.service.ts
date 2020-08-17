import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteDataServiceService {

  clickedNote = new EventEmitter<any>();
  searchNote = new EventEmitter<any>();
  notes: any = [];
  emptyNote = {
    title: '',
    description: '',
    time: ''
  };

  constructor() { }

  getNotes() {
    this.notes = JSON.parse(localStorage.getItem('noteDB'));
    if (this.notes == null) {
      this.notes = [];
    }
    return this.notes;
  }

  updateNotes(note) {
    this.notes.forEach((element, i) => {
      if (element.description === note.description && element.title === note.title) {
        element.title = note.title;
        element.description = note.description;
        element.time = new Date();
      }
    });
    localStorage.setItem('noteDB', JSON.stringify(this.notes));
  }

  addNote() {
    if (this.notes.length === 0) {
      this.notes.push({
        title: 'New Note',
        description: 'No Additional Description' + '#' + (this.notes.length + 1),
        time: new Date()
      });
    }
    else {
      this.notes.unshift({
        title: 'New Note',
        description: 'No Additional Description' + '#' + (this.notes.length + 1),
        time: new Date()
      });
    }
    localStorage.setItem('noteDB', JSON.stringify(this.notes));
  }

  deleteNote(note) {
    this.notes.forEach((element, i) => {
      if (element.title === note.title && element.description === note.description) {
        this.notes.splice(i, 1);
      }
    });
    this.clickedNote.emit(this.emptyNote);
    localStorage.setItem('noteDB', JSON.stringify(this.notes));
  }
}
