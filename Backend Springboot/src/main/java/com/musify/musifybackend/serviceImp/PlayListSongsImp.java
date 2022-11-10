package com.musify.musifybackend.serviceImp;

import java.util.List; 
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.musify.musifybackend.entity.PlayListSongs;
import com.musify.musifybackend.repository.PlayListSongsRepository;
import com.musify.musifybackend.services.PlayListSongsService;

@Service
public class PlayListSongsImp implements PlayListSongsService{

	@Autowired
	private PlayListSongsRepository repo;
	
	@Override
	public List<PlayListSongs> getList() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}
	


	@Override
	public PlayListSongs savePlaylist(PlayListSongs ps) {
		// TODO Auto-generated method stub
		return repo.save(ps);
	}

	
	
//	@Override
//	public PlayListSong update(PlayListSongs ps, String p_id) {
//		// TODO Auto-generated method stub
//		repo.save(ps);
//		
//	}
//	
//	
//
//	@Override
//	public Optional<PlayListSongs> getdetailsbyp_id(String p_id) {
//		// TODO Auto-generated method stub
////		return repo.findOne("636662243f15891c2826742a");
//		return repo.findById("636662243f15891c28267427");
//	}


//
//	@Override
//	public ResponseEntity<PlayListSongs> update(PlayListSongs ps, String p_id) {
//		// TODO Auto-generated method stub
//		return null;
//	}

//	public PlayListSongs updater(PlayListSongs ps,String p_id)
//	{
//		return repo.save(ps);
//	}

	

	
//	@Override
//	public  update(PlayListSongs ps, String p_id) {
//		
//		Optional<PlayListSongs> findByid= repo.findById(p_id);
//		if(findByid.isPresent()) {
//			PlayListSongs pl= findByid.get();
//			if(ps.getSongList().isEmpty()== false) {
//				pl.setSongList(ps.getSongList());
//				pl.setP_id(p_id);
//				pl.setU_id(p_id);
//			}
//			repo.save(pl);
//		}
//		
//		return null;
//	}
//
//
//	
//
//
//	@Override
//	public void deletePlaylist(String p_id) {
//		// TODO Auto-generated method stub
//		repo.deleteById(p_id);
//		
//	}
	

}
