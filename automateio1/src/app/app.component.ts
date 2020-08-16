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
}
