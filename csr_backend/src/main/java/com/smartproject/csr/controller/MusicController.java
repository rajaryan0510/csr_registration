package com.smartproject.csr.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smartproject.csr.model.MusicClub;
import com.smartproject.csr.repository.MusicClubRepo;

@RestController
@CrossOrigin("*")
@RequestMapping("/csr/culture")
public class MusicController {
	
	@Autowired
	private MusicClubRepo musicClubRepo;
	
	@PostMapping("/music")
	MusicClub mewMusicClub(@RequestBody MusicClub newMusicClub) {
		return musicClubRepo.save(newMusicClub);
	}
	
	@GetMapping("/music")
	List<MusicClub> getAllMusicClub(){
		return musicClubRepo.findAll();
	}

}
