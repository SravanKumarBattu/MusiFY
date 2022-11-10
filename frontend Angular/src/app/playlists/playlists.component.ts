import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  pid:string;
  i:number;

  playlist:any;
  songs:any;
  songsData:any;

  end:boolean;
  begin:boolean;

  displayedColumns: string[] = ['id', 'name', 'SongImg','Song'];


  constructor(private service : ServicesService) {
    this.pid="";
    this.i=-1;
    this.end=false;
    this.begin=true;
  }

  ngOnInit(): void {

     this.getPlayList();
    this.getPlayListSongs();
  }
  getPlayList(){
   this.pid = this.service.getPlaylist()
   console.log(this.pid);

  }

  getPlayListSongs(){

    this.service.getPlaylistSongs(this.pid).subscribe((data)=>{

      this.playlist=data;
      // console.log(this.playlist);

      localStorage.setItem('songsData', JSON.stringify(this.playlist.songList));


    this.songs = JSON.parse(localStorage.getItem('songsData') as any);
    console.log(this.songs);

    });
     }

  playPrevious(){
    this.i--;
    if(this.i>=0 &&  this.i<this.songs.length)
    {
      this.end=false;
      // this.begin=false;
    }
    if(this.i < 0 ){
      this.begin = true;
    }

    this.service.getSong(this.songs[this.i]).subscribe((data)=>{
      console.log(data);
      this.songsData= data;
      console.log(this.songsData);

    })

  }

  playNext(){


    this.i++;
    this.songs = JSON.parse(localStorage.getItem('songsData') as any);
    console.log(this.songs[this.i]);

    if(this.i>=this.songs.length)
    {
      this.end=true;

    }
    else if(this.i==0)
    {
      this.begin=false;
    }

    this.service.getSong(this.songs[this.i]).subscribe((data)=>{
      // console.log(data);

      this.songsData= data;
      console.log(this.songsData);

    })

  }
}
