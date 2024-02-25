package com.trip_india.trip_india.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.trip_india.trip_india.Entity.*; 

@Repository
public interface BookRepository extends JpaRepository <Book,Integer>{
}
