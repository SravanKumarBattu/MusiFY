package com.musify.musifybackend.serviceImp;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.musify.musifybackend.entity.UserPlayLists;
import com.musify.musifybackend.repository.UserPlaylistsRepository;
import com.musify.musifybackend.services.UserPlaylistsService;

@Service
public class UserPlaylistsServiceImp implements UserPlaylistsService {

	@Autowired
	private UserPlaylistsRepository upr;

	@Override
	public String saveUserPlaylists(UserPlayLists user) {
		// TODO Auto-generated method stub
		upr.save(user); 
		return "Successfully Saved";
		
	}

	@Override
	public List<UserPlayLists> getUserPlaylists() {
		// TODO Auto-generated method stub
		return upr.findAll();
	}
	
	
	@Override
	public UserPlayLists addPlaylistId(String id, UserPlayLists user) {
		// TODO Auto-generated method stub
		Optional<UserPlayLists> findById = upr.findById(id);
		if(findById.isPresent())
		{
			UserPlayLists userEntity= findById.get();
			userEntity.setU_name(user.getU_name());
			userEntity.setPlaylists(user.getPlaylists());
			return upr.save(userEntity);
		}
		return null;
	}

	
	@Override
	public String deletePlaylists(String u_id, String  p_id) {
		// TODO Auto-generated method stub
				
		
		Optional<UserPlayLists> findById = upr.findById(u_id);
		if(findById.isPresent())
		{
			UserPlayLists user= findById.get();
			user.playlists.remove(String.valueOf(p_id));
			
 			return "Deleted Successfully";
		}
		else {
			return "Not Found/error";
		}
		
		
	}	
	
	

}
