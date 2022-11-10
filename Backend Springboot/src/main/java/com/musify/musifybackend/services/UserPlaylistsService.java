package com.musify.musifybackend.services;

import java.util.List;

import com.musify.musifybackend.entity.UserPlayLists;

public interface UserPlaylistsService {

	public String saveUserPlaylists(UserPlayLists user);
	
	public List<UserPlayLists> getUserPlaylists();
	
	public UserPlayLists addPlaylistId(String id, UserPlayLists user);
	
	public String deletePlaylists(String u_id, String p_id);
	
}