import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { RootObject } from '../utilities/file';
import { MatDialog } from '@angular/material/dialog';
import { AddtoPlaylistComponent } from '../addto-playlist/addto-playlist.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  SongsData:any;
  constructor(private service : ServicesService, public dialog: MatDialog, private snackBar: MatSnackBar) {  }


  ngOnInit(): void {
    this.getAllSongs();
  }

  getAllSongs(){
    this.service.getSongs().subscribe((data:RootObject)=>{
      this.SongsData=data;
      console.log(this.SongsData);

    })
   }

  add() {
    this.dialog.open(AddtoPlaylistComponent, {
      width:'40%'
    })
  }
  setter(id:string){
    this.service.setSid(id);
  }

  

}
