package com.musify.musifybackend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.musify.musifybackend.entity.UserPlayLists;

@Repository
public interface UserPlaylistsRepository extends MongoRepository<UserPlayLists,String> {

	void save(String p_id);

}
