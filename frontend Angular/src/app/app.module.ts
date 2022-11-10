import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SongsComponent } from './songs/songs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowseComponent } from './browse/browse.component';
import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlayComponent } from './play/play.component';
import { HttpClient } from '@angular/common/http';
import { SongDetailComponent } from './song-detail/song-detail.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { SignupComponent } from './signup/signup.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AddtoPlaylistComponent } from './addto-playlist/addto-playlist.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NewplaylistComponent } from './newplaylist/newplaylist.component';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SongsComponent,
    NavbarComponent,
    BrowseComponent,
    ProfileComponent,
    LoginComponent,
    PlayComponent,
    SongDetailComponent,
    PlaylistsComponent,
    SignupComponent,
    AddtoPlaylistComponent,
    NewplaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,MatSnackBarModule,
    NgbModule,
    ReactiveFormsModule,
    MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
