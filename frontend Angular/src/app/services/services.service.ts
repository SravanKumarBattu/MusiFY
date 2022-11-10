import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry, throwError } from 'rxjs';
import { RootObject } from '../utilities/file';
import { playlistSongs } from '../utilities/playlistSongs';
import { User } from '../utilities/user';
import { FormGroup } from '@angular/forms';


// playlist_id & songs array
//get request  "http://localhost:9090/api/v1/playlists"
//save request  "http://localhost:9090/api/v1/playlists/{p_id}"

// all songs
//get http://localhost:9090/api/songs

// songs by id
//get http://localhost:9090/api/songs/id


// user and playlists
//get http://localhost:9090/api/playlists/get

//save user & playlists
//post http://localhost:9090/api/playlists/save


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  songsUrl:string;
  pUserUrl:string;
  sPUrl:string;

  UserId:string;
  PlayListId:string;
  SongId:string;

  final:any;
  copyPlaylist:any;
  form:any;

  constructor(private http: HttpClient) {

    this.songsUrl="http://localhost:9090/api/song/";

    this.pUserUrl="http://localhost:9090/api/playlists";

    this.sPUrl="http://localhost:9090/api/v1/playlists/"


    this.UserId="";
    this.PlayListId="";
    this.SongId="";
  }

  //Getter & Setters User Id
  setUId(id:string){
    this.UserId=id;
    // console.log(this.UserId);

  }
  getUid(){
    return this.UserId;
  }

// Getter and Setter for Song
  setSid(id:string){
    this.SongId=id;
  }
  getSid(){
    return this.SongId;
  }

  // Getter and Setter for PlayList
  setPlaylist(id:string){
    this.PlayListId=id;
    // console.log(this.PlayListId);

  }
  getPlaylist(){
    // console.log(this.PlayListId);
    return this.PlayListId;
  }


  //Services on Songs

  //get all Songs
  getSongs():Observable<RootObject>{
    return this.http.get<RootObject>(this.songsUrl).pipe(retry(1), catchError(this.handleError));
  }

  //get songs by id
  getSong(id:string):Observable<RootObject>{
    return this.http.get<RootObject>(this.songsUrl+id).pipe(retry(1), catchError(this.handleError));
  }

  //save song to database by admin
  saveSong(form:any){
    let song=new RootObject();
    song.s_id=form.value.s_id;
    song.sName=form.value.SongName;
    song.sUrl=form.value.ImageUrl;
    song.sSrc=form.value.SongSource;
    const head= new HttpHeaders();
    head.set('Content-type','application/json');
    return this.http.post<RootObject>(this.songsUrl,song,{headers:head}).pipe(retry(1), catchError(this.handleError));
  }

  //Services on Playlists

  //get User details and playlists id
  getUserPlaylists(uid:string):Observable<User>{
    return this.http.get<User>(this.pUserUrl+"/get/"+uid).pipe(retry(1), catchError(this.handleError));
  }
  //get songs by playlist id
  getPlaylistSongs(pid:string):Observable<playlistSongs>{
    return this.http.get<playlistSongs>(this.sPUrl+pid).pipe(retry(1), catchError(this.handleError));
  }

  //saveUserDetails and playlists
  saveUserPlaylists(playlist:User):Observable<User>{
    let play=new User();
    play.u_id=playlist.u_id;
    play.playlists=playlist.playlists;
    play.playlistName=playlist.playlistName;
    play.imgSrc=playlist.imgSrc;
    play.password=playlist.password;
    const head= new HttpHeaders();
    head.set('Content-type','application/json');
    return this.http.post<User>(this.pUserUrl+"/save", play, {headers:head}).pipe(retry(1), catchError(this.handleError));
  }

  //save register user details
  saveDetails(username:string, password:string){

    let u= new User();
    u.u_id= (parseInt(this.UserId)+1)+"";
    u.u_name=username;
    u.password=password;
    const head= new HttpHeaders();
    head.set('Content-type','application/json');
    return this.http.post<User>(this.pUserUrl+"/save", u, {headers:head}).pipe(retry(1), catchError(this.handleError));
  }

//Services on playlist and songs

  // save playlist and songs
  savePlaylistSongs(playlist:playlistSongs, pid:string):Observable<playlistSongs>{
    let pL= new playlistSongs();
    pL.p_id=pid;
    pL.songList=playlist.songList;
    const head= new HttpHeaders();
    head.set('Content-type','application/json');
    return this.http.post<playlistSongs>(this.sPUrl+pid,pL,{headers:head}).pipe(retry(1), catchError(this.handleError));
  }

  //Add songs to existing playlists
  addSongsToPlaylist(sid:string, pid:string){

    this.getPlaylistSongs(pid).subscribe((data:playlistSongs)=>{

      this.copyPlaylist = data;
      this.copyPlaylist[0].songList.push(sid);
      this.final=JSON.stringify(this.copyPlaylist);
      localStorage.setItem('data',JSON.stringify(this.final));
      //get songs ID from local storage and post it
      this.songArray(pid);
  });
  }

  songArray(pid:string){

    const data = JSON.parse( window.localStorage.getItem('data') || '{}' );

    console.log(data);

    const head= new HttpHeaders();
    head.set('Content-type','application/json');

    this.http.post<playlistSongs>(this.sPUrl+"update/"+pid,data,{headers:head}).pipe(retry(1), catchError(this.handleError));
    window.alert("The song is added to playlist:"+pid);
  }

  createplaylist(arg0: any, form: FormGroup<any>) {
    throw new Error('Method not implemented.');
  }

  handleError(err:any){
    return throwError(()=>{console.log(err);
    })
  }
}
