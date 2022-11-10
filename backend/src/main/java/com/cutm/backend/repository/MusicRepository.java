package com.cutm.backend.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cutm.backend.model.MusicClub;

@Repository
public interface MusicRepository extends JpaRepository<MusicClub, Long> {

}
