package com.amirmustafaa.financialportal.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.amirmustafaa.financialportal.models.Transaction;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
	
	Optional<Transaction> findOneById(Long id);

}
