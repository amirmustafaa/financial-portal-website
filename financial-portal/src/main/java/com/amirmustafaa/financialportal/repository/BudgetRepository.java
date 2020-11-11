package com.amirmustafaa.financialportal.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.amirmustafaa.financialportal.models.Budget;

@Repository
public interface BudgetRepository extends JpaRepository<Budget, Long>  {
	Optional<Budget> findOneById(Long id);

}
