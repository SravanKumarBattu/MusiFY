package com.musify.musifybackend.controller;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.musify.musifybackend.entity.Songs;
import com.musify.musifybackend.services.musifyService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class musifyController {

	@Autowired
	private musifyService ms;
	
	@Autowired
	private MongoTemplate MT;
	
	@GetMapping("/song")
	public List<Songs> getSongs(){
		return ms.getSongs();
	}
	
	@GetMapping("/song/{s_id}")
	public List<Songs> getSong(@PathVariable( value = "s_id") String s_id) {
		
		Query q= new Query();
		
		q.addCriteria(Criteria.where("s_id").is(s_id));
		
		return MT.find(q,Songs.class);
		
	}
	
	@PostMapping("/song")
	public Songs saveSong(@RequestBody Songs song) {
		return ms.saveSongs(song);
		
	}
	
	
	
}
