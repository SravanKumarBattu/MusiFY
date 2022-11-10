package com.musify.musifybackend.serviceImp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.musify.musifybackend.entity.Songs;
import com.musify.musifybackend.repository.musifyRepository;
import com.musify.musifybackend.services.musifyService;

@Service
public class musifyServiceImp implements musifyService{

	@Autowired
	private musifyRepository mR;
	
	@Override
	public List<Songs> getSongs() {
		// TODO Auto-generated method stub
		return mR.findAll();
	}

	public Optional<Songs> getSong(String s_id) {
		// TODO Auto-generated method stub
		return mR.findById(s_id);
	}

	@Override
	public Songs saveSongs(Songs song) {
		// TODO Auto-generated method stub
		return mR.save(song);
	}
	

}
