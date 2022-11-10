package com.smartproject.csr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smartproject.csr.model.MusicClub;

@Repository
public interface MusicClubRepo extends JpaRepository<MusicClub, Long> {

}
