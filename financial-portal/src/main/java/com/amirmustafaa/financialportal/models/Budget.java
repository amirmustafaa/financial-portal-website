package com.amirmustafaa.financialportal.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(	name = "Budgets")
public class Budget {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	
	private String duration;
	
	private Long maximumAmount;
	
	private String Goal;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinTable(	name = "budget_accounts", 
				joinColumns = @JoinColumn(name = "budget_id"), 
				inverseJoinColumns = @JoinColumn(name = "account_id"))
	
	private Set<Account> acounts  = new HashSet<>();

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

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public Long getMaximumAmount() {
		return maximumAmount;
	}

	public void setMaximumAmount(Long maximumAmount) {
		this.maximumAmount = maximumAmount;
	}

	public String getGoal() {
		return Goal;
	}

	public void setGoal(String goal) {
		Goal = goal;
	}

	public Set<Account> getAcounts() {
		return acounts;
	}

	public void setAcounts(Set<Account> acounts) {
		this.acounts = acounts;
	}

	
}
