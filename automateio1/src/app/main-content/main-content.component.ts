import { Component, OnInit } from '@angular/core';
import { NoteDataServiceService } from '../services/note-data-service.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  note: any = {
    title: '',
    description: ''
  };

  notesDATA: any = [{
    title: 'note1',
    description: 'note1 description',
    time: new Date()
  },
  {
    title: 'note2',
    description: 'note1 description2',
    time: new Date()
  },
  {
    title: 'note3',
    description: 'note3 description',
    time: new Date()
  }];

  constructor(private noteDataService: NoteDataServiceService) {
    this.noteDataService.clickedNote.subscribe(note => {
      this.note = note;
      this.noteDataService.updateNotes();
    });
  }

  ngOnInit(): void {
  }

  loadNoteDB() {
    localStorage.setItem('noteDB', JSON.stringify(this.notesDATA));
  }
}
