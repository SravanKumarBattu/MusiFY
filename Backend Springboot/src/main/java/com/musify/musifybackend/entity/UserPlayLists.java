package com.musify.musifybackend.entity;

import java.util.ArrayList;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "UserPlayLists")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserPlayLists {
	
	
	private String u_id;
	private String u_name;
	private String password;
	private ArrayList<String> playlistName;
	public ArrayList<String> playlists;
	
	public ArrayList<String> imgSrc;
	
	public ArrayList<String> getImgSrc() {
		return imgSrc;
	}
	public void setImgSrc(ArrayList<String> imgSrc) {
		this.imgSrc = imgSrc;
	}
	
	public String getU_id() {
		return u_id;
	}
	public void setU_id(String u_id) {
		this.u_id = u_id;
	}
	
	public ArrayList<String> getPlaylists() {
		return playlists;
	}
	public void setPlaylists(ArrayList<String> playlists) {
		this.playlists = playlists;
	}
	public ArrayList<String> getPlaylistName() {
		return playlistName;
	}
	public void setPlaylistName(ArrayList<String> playlistName) {
		this.playlistName = playlistName;
	}
	public String getU_name() {
		return u_name;
	}
	public void setU_name(String u_name) {
		this.u_name = u_name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
}
