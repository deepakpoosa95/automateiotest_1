import { Component } from '@angular/core';
import { NoteDataServiceService } from '../app/services/note-data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NoteDataServiceService]
})
export class AppComponent {
  title = 'automateio1';

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

  constructor() {
    localStorage.setItem('noteDB', JSON.stringify(this.notesDATA));
  }

}
