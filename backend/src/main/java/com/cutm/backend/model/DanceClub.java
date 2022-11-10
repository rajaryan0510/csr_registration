package com.cutm.backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "dance")
public class DanceClub {
	
	@Id
	private Long registrationNo;
	private String name;
	private String branch;
	private String semester;
	private String mobileNo;
	
	public Long getRegistrationNo() {
		return registrationNo;
	}
	public void setRegistrationNo(Long registrationNo) {
		this.registrationNo = registrationNo;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getBranch() {
		return branch;
	}
	public void setBranch(String branch) {
		this.branch = branch;
	}
	public String getSemester() {
		return semester;
	}
	public void setSemester(String semester) {
		this.semester = semester;
	}
	public String getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}
	
	
	
}

