import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { playlistSongs } from '../utilities/playlistSongs';
import { User } from '../utilities/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  data: any;
  userId:string;

  constructor(private service : ServicesService) {
    this.userId="";
   }

  ngOnInit(): void {
    this.getter();
    this.getPlaylists();


  }
  getter(){
    this.userId= this.service.getUid();

  }

  getPlaylists(){
    // console.log(this.userId);

    this.service.getUserPlaylists(this.userId).subscribe((data:User)=>{
      this.data=data;

    })
   }

   setPlayList(playList:string){

    // console.log(playList);

    this.service.setPlaylist(playList);


   }


}
