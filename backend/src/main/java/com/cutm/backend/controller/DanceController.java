package com.cutm.backend.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cutm.backend.model.DanceClub;
import com.cutm.backend.repository.DanceRepository;



@RestController
@CrossOrigin("*")
@RequestMapping("/csr/culture")
public class DanceController {
	
	@Autowired
	private DanceRepository danceRepository;
	
	@PostMapping("/dance")
	DanceClub danceClub(@RequestBody DanceClub danceClub) {
		return danceRepository.save(danceClub);
	}
	
	@GetMapping("/dance")
	List<DanceClub> getAllDanceClub(){
		return danceRepository.findAll();
	}

}
