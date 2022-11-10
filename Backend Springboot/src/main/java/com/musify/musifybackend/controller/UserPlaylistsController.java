package com.musify.musifybackend.controller;


import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
//import org.springframework.data.mongodb.core.query.Criteria;
//import org.springframework.data.mongodb.core.query.Query;
//import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.musify.musifybackend.entity.UserPlayLists;
import com.musify.musifybackend.services.UserPlaylistsService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/playlists")
public class UserPlaylistsController {

	@Autowired
	private UserPlaylistsService ups; 
	

	@PostMapping("/save")
	public String saving(@RequestBody UserPlayLists user) {
		return ups.saveUserPlaylists(user);
	}
	
	@GetMapping("/get")
	public List<UserPlayLists> getAll(){
		
		return ups.getUserPlaylists();
	}
	
	
	
	@PostMapping("/{u_id}")
	public UserPlayLists updateUser(@RequestBody UserPlayLists user, @PathVariable("u_id") String id) {
		return ups.addPlaylistId(id,user);
	}
	
	@DeleteMapping("/delete/{u_id}/{p_id}")
	public void deleter(@PathVariable(name="u_id") String u_id, @PathVariable(name="p_id") String p_id)
	{
		ups.deletePlaylists(u_id, p_id);
		
	}
	
	
	
	
}
