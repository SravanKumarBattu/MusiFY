package com.musify.musifybackend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.musify.musifybackend.entity.PlayListSongs;
import com.musify.musifybackend.services.PlayListSongsService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class PlayListSongsController {

	@Autowired
	private PlayListSongsService service;
	

	@Autowired
	private MongoTemplate MT;
	

	@GetMapping("/playlists")
	public List<PlayListSongs> getSongs(){
		return service.getList();
	}
	
	@GetMapping("/playlists/{p_id}")
	public PlayListSongs getPlays(@PathVariable  String p_id) {
		
		Query q= new Query();
		
		q.addCriteria(Criteria.where("p_id").is(p_id));
		
		return MT.findOne(q,PlayListSongs.class);
	}
	
	
	@PostMapping("/playlists")	
	public PlayListSongs save(@RequestBody PlayListSongs ps) {
		return service.savePlaylist(ps);	
	}
	
//	@PutMapping("/playlists/{p_id}")
//	public void updater(@RequestBody PlayListSongs ps, @PathVariable (name="p_id") String p_id) {
//		
//		Query q= new Query();
//		
//		PlayListSongs pl = MT.findOne(new Query(Criteria.where("p_id").is(p_id)), PlayListSongs.class);
//		pl.setSongList(ps.getSongList());
//		
//		service.update(pl,p_id);
//	}

	
	
	
	
//	@PutMapping("/playlists/{p_id}")
//	public String updater(@RequestBody PlayListSongs ps, @PathVariable (name="p_id") String p_id) {
//       
//		
//		Optional<PlayListSongs> old= service.getdetailsbyp_id(p_id);
//		System.out.println(old.get().getSongList());
//		PlayListSongs update= old.get();
//		update.setP_id(p_id);
//		update.setSongList(ps.getSongList());
//		old.setSongList(ps.getSongList());
//		service.savePlaylist(update);
//		
//		return "Hello";
//	}	

	
	
	
//	@RequestMapping(value = "/playlists/remove/{p_id}", method = RequestMethod.POST)
//    public void removePlayList(@PathVariable(name="p_id")String p_id) {
//		Query q= new Query();
//		q.addCriteria(Criteria.where("p_id").is(p_id));
//		DeleteResult pl = (MT.remove(q, p_id));
//		System.out.println(pl);
//    }
	
	

//	
//	@PutMapping("/playlists/delete/{p_id}")
//	public String deleter(@PathVariable String p_id) {
//		service.deletePlaylist(p_id);
//		return "Deleted";
//	}
	
}

