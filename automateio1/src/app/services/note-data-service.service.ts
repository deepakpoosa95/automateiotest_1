import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteDataServiceService {

  clickedNote = new EventEmitter<any>();
  searchNote = new EventEmitter<any>();
  notes: any = [];

  // notes: any = [{
  //   title: 'note1',
  //   description: 'note1 description'
  // },
  // {
  //   title: 'note2',
  //   description: 'note1 description2'
  // },
  // {
  //   title: 'note3',
  //   description: 'note3 description'
  // }];

  //notes2: any;

  constructor() { }

  getNotes() {
    this.notes = JSON.parse(localStorage.getItem('noteDB'));
    if (this.notes == null) {
      this.notes = [];
    }
    return this.notes;
  }

  updateNotes() {
    localStorage.setItem('noteDB', JSON.stringify(this.notes));
  }

  addNote() {
    if (this.notes.length === 0) {
      this.notes.push({
        title: 'New Note',
        description: 'No Description',
        time: new Date()
      });
    }
    else {
      this.notes.unshift({
        title: 'New Note',
        description: 'No Description',
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
    localStorage.setItem('noteDB', JSON.stringify(this.notes));
  }
}
