import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services/services.service';
import { playlistSongs } from '../utilities/playlistSongs';
import { User } from '../utilities/user';

@Component({
  selector: 'app-newplaylist',
  templateUrl: './newplaylist.component.html',
  styleUrls: ['./newplaylist.component.css']
})
export class NewplaylistComponent implements OnInit {
  playForm:FormGroup;
  playlists:any;
  size:any;
  constructor(private service : ServicesService) {
    this.playForm= new FormGroup({
      p_id: new FormControl('',[Validators.required]),
      PlayListName: new FormControl('', Validators.required),
      ImageUrl: new FormControl('', Validators.required)
      });
      this.size=0;
  }


  ngOnInit(): void {
   this.service.getUserPlaylists(this.service.UserId).subscribe((data:User)=>{
    this.playlists= data;
    // console.log(this.playlists[0].playlists.length);
    this.size=(this.playlists[0].playlists.length);

   });




  }
addData(form: FormGroup){
  console.log(form.value);
  console.log(this.size+1);

  this.service.createplaylist(this.size+1, form);


}

}
