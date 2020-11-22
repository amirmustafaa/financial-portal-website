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
	
	private long currentAmount; 
	
	private long monthlyAmount;
	
	private long minimumAmount;
	
	
	
	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(	name = "user_accounts", 
				joinColumns = @JoinColumn(name = "user_id"), 
				inverseJoinColumns = @JoinColumn(name = "account_id"))
	private List <User> users;
	
	

	public Account(String name, String accountType, long currentAmount, long monthlyAmount, long minimumAmount) {
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


	
	public List<User> getUsers() {
		return users;
	}

	public void setUsers(List <User> users) {
		this.users = users;
	}

	public long getCurrentAmount() {
		return currentAmount;
	}

	public void setCurrentAmount(long currentAmount) {
		this.currentAmount = currentAmount;
	}

	public long getMinimumAmount() {
		return minimumAmount;
	}

	public void setMinimumAmount(long minimumAmount) {
		this.minimumAmount = minimumAmount;
	}


	public String getAccountType() {
		return accountType;
	}

	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}

	public long getMonthlyAmount() {
		return monthlyAmount;
	}

	public void setMonthlyAmount(long monthlyAmount) {
		this.monthlyAmount = monthlyAmount;
	}

	
	
	

}
