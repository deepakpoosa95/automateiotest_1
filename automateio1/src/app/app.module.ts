import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { NoteDataServiceService } from './services/note-data-service.service';
import { FormsModule } from '@angular/forms';
import { ShortenPipe } from './shorten.pipe';
import { SearchNotePipe } from './search-note.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    MainContentComponent,
    NavigationBarComponent,
    ShortenPipe,
    SearchNotePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
