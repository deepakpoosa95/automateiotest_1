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

  constructor(private noteDataService: NoteDataServiceService) {
    this.noteDataService.searchNote.subscribe(searchText => {
      this.searchText = searchText;
    });
  }

  ngOnInit(): void {
    this.notes = this.noteDataService.getNotes();
  }

  getNoteContent(note) {
    this.noteDataService.clickedNote.emit(note);
  }
}
