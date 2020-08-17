import { Component, OnInit } from '@angular/core';
import { NoteDataServiceService } from '../services/note-data-service.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  notes: any;
  searchText: any = '';
  selectedNote: any = {
    title: '',
    description: '',
    time: ''
  };

  constructor(private noteDataService: NoteDataServiceService) {
    this.noteDataService.searchNote.subscribe(searchText => {
      this.searchText = searchText;
    });

    this.noteDataService.clickedNote.subscribe(note => {
      this.selectedNote.title = note.title;
      this.selectedNote.description = note.description;
      this.selectedNote.time = note.time;
    });
  }

  ngOnInit(): void {
    this.notes = this.noteDataService.getNotes();
  }

  getNoteContent(note) {
    this.noteDataService.clickedNote.emit(note);
  }
}
