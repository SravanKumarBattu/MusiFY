import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SongsComponent } from './songs/songs.component';
import { PlayComponent } from './play/play.component';
import { SongDetailComponent } from './song-detail/song-detail.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { NewplaylistComponent } from './newplaylist/newplaylist.component';
import { AddtoPlaylistComponent } from './addto-playlist/addto-playlist.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'songs', component:SongsComponent},
  {path:'profile', component:ProfileComponent},
  {path:'play', component: PlayComponent},
  {path:'form', component:SongDetailComponent},
  {path:'playlists', component:PlaylistsComponent},
  {path:'newplaylist', component:NewplaylistComponent},
  {path:'add', component:AddtoPlaylistComponent  },
  {path:'signup', component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
