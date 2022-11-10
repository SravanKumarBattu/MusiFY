import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services/services.service';
import { playlistSongs } from '../utilities/playlistSongs';
import { User } from '../utilities/user';

@Component({
  selector: 'app-addto-playlist',
  templateUrl: './addto-playlist.component.html',
  styleUrls: ['./addto-playlist.component.css']
})
export class AddtoPlaylistComponent implements OnInit {

  id:string;
  sid:string;
  pid:string;
  data:any;
  pForm:FormGroup;
  constructor(private servive: ServicesService) {
    this.id="";
    this.sid="";
    this.pid="";
    this.pForm = new FormGroup({
      playlistNum: new FormControl('',[Validators.required]),
    });
  }

  ngOnInit(): void {
    this.id = this.servive.getUid();
    this.getPlaylistNames();
  }

  getPlaylistNames(){
    this.servive.getUserPlaylists(this.id).subscribe((data:User)=>{
      this.data=data;


    })
  }
  sub(form:FormGroup){

    this.sid=this.servive.getSid(); //songid

    this.pid=(parseInt(form.value.playlistNum)+1)+""; //playlistIndex

    console.log("Song Id : "+this.sid);
    console.log("PlayList Id : "+this.pid);

    this.servive.addSongsToPlaylist(this.sid,this.pid);

  }
}
