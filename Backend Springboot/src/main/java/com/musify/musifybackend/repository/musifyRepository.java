package com.musify.musifybackend.repository;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.musify.musifybackend.entity.Songs;

@Repository
public interface musifyRepository extends MongoRepository<Songs, String> {

	
}
