package com.springboot.csr.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.csr.model.MusicClub;

public interface MusicClubRepository extends JpaRepository<MusicClub, Long> {

}
