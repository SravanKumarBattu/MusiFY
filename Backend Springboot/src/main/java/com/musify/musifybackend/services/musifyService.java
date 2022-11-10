package com.musify.musifybackend.services;

import java.util.List;
import java.util.Optional;

import com.musify.musifybackend.entity.Songs;

public interface musifyService {
	
	public List<Songs> getSongs();
	
	public Optional<Songs> getSong(String s_id);
	
	public Songs saveSongs(Songs song);

}
