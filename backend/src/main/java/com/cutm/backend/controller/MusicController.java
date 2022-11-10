package com.cutm.backend.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cutm.backend.model.MusicClub;
import com.cutm.backend.repository.MusicRepository;



@RestController
@CrossOrigin("*")
@RequestMapping("/csr/culture")
public class MusicController {
	
	@Autowired
	private MusicRepository musicRepository;
	
	@PostMapping("/music")
	MusicClub mewMusicClub(@RequestBody MusicClub newMusicClub) {
		return musicRepository.save(newMusicClub);
	}
	
	@GetMapping("/music")
	List<MusicClub> getAllMusicClub(){
		return musicRepository.findAll();
	}

}
