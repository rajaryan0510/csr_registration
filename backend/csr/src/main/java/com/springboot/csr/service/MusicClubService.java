package com.springboot.csr.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.csr.model.MusicClub;
import com.springboot.csr.repository.MusicClubRepository;

@Service
public class MusicClubService {
	
	@Autowired
	private MusicClubRepository musicClubRepository;
	
	public MusicClub saveStudent(MusicClub musicClub) {
		return musicClubRepository.save(musicClub);
	}
	
	public List<MusicClub> saveStudents(List<MusicClub> students){
		return musicClubRepository.saveAll(students);
	}
}
