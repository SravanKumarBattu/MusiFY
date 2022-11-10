import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {

  songForm:FormGroup;
  constructor(private service : ServicesService) {
    this.songForm= new FormGroup({
      s_id: new FormControl('',[Validators.required]),
      SongName: new FormControl('', Validators.required),
      ImageUrl: new FormControl('', Validators.required),
      SongSource: new FormControl('',[Validators.required])

      });
  }

  ngOnInit(): void {
  }

  addData(form:FormGroup ){
    this.songForm=form;
    console.log(this.songForm.value);
    this.service.saveSong(this.songForm).subscribe((data)=>{
      console.log(data);
    })
  }
}
