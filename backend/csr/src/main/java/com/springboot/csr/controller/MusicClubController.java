package com.springboot.csr.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.csr.model.MusicClub;
import com.springboot.csr.repository.MusicClubRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/")
public class MusicClubController {
	@Autowired
	private MusicClubRepository musicRepo;
	
	//insert data into db
	@PostMapping("/music/student")
	public MusicClub createStudent(@RequestBody MusicClub musicClub) {
		return musicRepo.save(musicClub);
	}
}
