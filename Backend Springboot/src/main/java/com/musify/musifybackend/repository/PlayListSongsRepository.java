package com.musify.musifybackend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.musify.musifybackend.entity.PlayListSongs;

@Repository
public interface PlayListSongsRepository extends MongoRepository<PlayListSongs, String> {

//	public PlayListSongs findOne(String p_id);

//	public PlayListSongs findByP_id(String p_id);
	

}