package com.springboot.csr.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "music_club")
public class MusicClub {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	
	private String name;
	
	
	private long registrationNo;
	

	private String branch;
	
	
	private String semester;
	
	
	private long mobileNo;

	public MusicClub(String name, long registrationNo, String branch, String semester, long mobileNo) {
		super();
		this.name = name;
		this.registrationNo = registrationNo;
		this.branch = branch;
		this.semester = semester;
		this.mobileNo = mobileNo;
	}
	
	
}
