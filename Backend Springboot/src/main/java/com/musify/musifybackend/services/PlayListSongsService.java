package com.musify.musifybackend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;

import com.musify.musifybackend.entity.PlayListSongs;

public interface PlayListSongsService {

	public List<PlayListSongs> getList();

	public PlayListSongs savePlaylist(PlayListSongs ps);


//	public PlayListSongs getdetailsbyp_sid(String p_id);

//	public Optional<PlayListSongs> getdetailsbyp_id(String p_id);
	
	
//	public ResponseEntity<PlayListSongs> update(PlayListSongs ps, String p_id);
	
//	public String update(PlayListSongs ps);	
//
//	public void deletePlaylist(String p_id);

//	public void deletePlayList(String p_id);

}
