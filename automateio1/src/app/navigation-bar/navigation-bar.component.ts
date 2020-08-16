import { Component, OnInit } from '@angular/core';
import { NoteDataServiceService } from '../services/note-data-service.service';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  note: any = {
    title: '',
    description: ''
  };

  constructor(private noteDataService: NoteDataServiceService) {
    this.noteDataService.clickedNote.subscribe(note => {
      this.note = note;
    });
  }

  searchText = '';

  ngOnInit(): void {
  }

  searchNote() {
    this.noteDataService.searchNote.emit(this.searchText);
  }

  addNote() {
    this.noteDataService.addNote();
  }

  deleteNote() {
    this.noteDataService.deleteNote(this.note);
  }

}
