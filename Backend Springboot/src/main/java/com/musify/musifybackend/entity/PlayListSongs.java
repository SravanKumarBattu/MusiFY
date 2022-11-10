package com.musify.musifybackend.entity;

import java.util.List; 

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Document(collection = "Playlists")
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PlayListSongs {
	
	
	
	private String p_id;	
	
	private String u_id;
	
	private List<String> songList;

	public List<String> getSongList() {
		return songList;
	}

	public void setSongList(List<String> songList) {
		this.songList = songList;
	}

	

	public String getU_id() {
		return u_id;
	}

	public void setU_id(String u_id) {
		this.u_id = u_id;
	}

	public String getP_id() {
		return p_id;
	}

	public void setP_id(String p_id) {
		this.p_id = p_id;
	}

	
}
