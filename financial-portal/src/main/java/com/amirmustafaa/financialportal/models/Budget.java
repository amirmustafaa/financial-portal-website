package com.amirmustafaa.financialportal.models;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(	name = "Budgets")
public class Budget {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	
	private String duration;
	
	private BigDecimal housingAmount;
	
	private BigDecimal utilitiesAmount;
	
	private BigDecimal transportationAmount;
	
	private BigDecimal insuranceAmount;
	
	private BigDecimal savingsAmount;
	
	private BigDecimal foodAmount;
	
	private BigDecimal entertainmentAmount;
	
	private BigDecimal clothingAmount;
	
	private String Goal;
	
	

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


	public String getGoal() {
		return Goal;
	}

	public void setGoal(String goal) {
		Goal = goal;
	}

	public BigDecimal getHousingAmount() {
		return housingAmount;
	}

	public void setHousingAmount(BigDecimal housingAmount) {
		this.housingAmount = housingAmount;
	}

	public BigDecimal getUtilitiesAmount() {
		return utilitiesAmount;
	}

	public void setUtilitiesAmount(BigDecimal utilitiesAmount) {
		this.utilitiesAmount = utilitiesAmount;
	}

	public BigDecimal getFoodAmount() {
		return foodAmount;
	}

	public void setFoodAmount(BigDecimal foodAmount) {
		this.foodAmount = foodAmount;
	}

	public BigDecimal getEntertainmentAmount() {
		return entertainmentAmount;
	}

	public void setEntertainmentAmount(BigDecimal entertainmentAmount) {
		this.entertainmentAmount = entertainmentAmount;
	}

	public BigDecimal getClothingAmount() {
		return clothingAmount;
	}

	public void setClothingAmount(BigDecimal clothingAmount) {
		this.clothingAmount = clothingAmount;
	}

	public BigDecimal getTransportationAmount() {
		return transportationAmount;
	}

	public void setTransportationAmount(BigDecimal transportationAmount) {
		this.transportationAmount = transportationAmount;
	}

	public BigDecimal getInsuranceAmount() {
		return insuranceAmount;
	}

	public void setInsuranceAmount(BigDecimal insuranceAmount) {
		this.insuranceAmount = insuranceAmount;
	}

	public BigDecimal getSavingsAmount() {
		return savingsAmount;
	}

	public void setSavingsAmount(BigDecimal savingsAmount) {
		this.savingsAmount = savingsAmount;
	}

	
}
