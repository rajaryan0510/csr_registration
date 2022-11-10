package com.cutm.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cutm.backend.model.DanceClub;

@Repository
public interface DanceRepository extends JpaRepository<DanceClub, Long> {

}
