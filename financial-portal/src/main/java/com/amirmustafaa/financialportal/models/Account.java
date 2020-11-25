package com.amirmustafaa.financialportal.models;


import java.math.BigDecimal;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(	name = "accounts")

public class Account {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	
	private String accountType;
	
	private BigDecimal currentAmount; 
	
	private BigDecimal monthlyAmount;
	
	private BigDecimal minimumAmount;
	
	
	@OneToMany
	private Set<Transaction> transactions = new HashSet<>();
	
	
	public Account() {
		
	}

	public Account(String name, String accountType, BigDecimal currentAmount, BigDecimal monthlyAmount, BigDecimal minimumAmount) {
		this.name = name;
		this.accountType = accountType;
		this.currentAmount = currentAmount;
		this.monthlyAmount = monthlyAmount;
		this.minimumAmount = minimumAmount;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	
	public BigDecimal getCurrentAmount() {
		return currentAmount;
	}

	public void setCurrentAmount(BigDecimal currentAmount) {
		this.currentAmount = currentAmount;
	}

	public BigDecimal getMinimumAmount() {
		return minimumAmount;
	}

	public void setMinimumAmount(BigDecimal minimumAmount) {
		this.minimumAmount = minimumAmount;
	}


	public String getAccountType() {
		return accountType;
	}

	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}

	public BigDecimal getMonthlyAmount() {
		return monthlyAmount;
	}

	public void setMonthlyAmount(BigDecimal monthlyAmount) {
		this.monthlyAmount = monthlyAmount;
	}

	
	
	

}
