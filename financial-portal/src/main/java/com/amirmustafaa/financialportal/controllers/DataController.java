package com.amirmustafaa.financialportal.controllers;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.amirmustafaa.financialportal.models.Account;
import com.amirmustafaa.financialportal.models.Budget;
import com.amirmustafaa.financialportal.models.Transaction;
import com.amirmustafaa.financialportal.models.User;
import com.amirmustafaa.financialportal.payload.request.LoginRequest;
import com.amirmustafaa.financialportal.repository.AccountRepository;
import com.amirmustafaa.financialportal.repository.BudgetRepository;
import com.amirmustafaa.financialportal.repository.TransactionRepository;
import com.amirmustafaa.financialportal.repository.UserRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value ="/api/data")
public class DataController {
	
	@Autowired
	AccountRepository accountRepository;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	BudgetRepository budgetRepository;
	
	@Autowired
	TransactionRepository transactionRepository;
	

	@PostMapping("/createaccount")
	public String createAccount(@RequestBody Account account){
		
		UserDetails userDetails =
				(UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		
		Set<User> users = new HashSet<>();
		Set<Account> acc = new HashSet<>();
		User userAccount = userRepository.findByUsername(userDetails.getUsername())
		.orElseThrow(() -> new RuntimeException("Error: User is not found."));
		users.add(userAccount);
		acc.add(account);
		userAccount.setAccounts(account);
		accountRepository.save(account);
		userRepository.save(userAccount);
		return "Account Created";
	}
	
	@PostMapping("/createtransaction")
	public String createTransaction(@RequestBody Transaction transaction) {
		
		
		return "Transaction Created";	
	}
	
	
	@PostMapping("/createbudget")
	public String createBudget(@RequestBody Budget budget) {
		
		UserDetails userDetails =
				(UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		
		User userAccount = userRepository.findByUsername(userDetails.getUsername())
				.orElseThrow(() -> new RuntimeException("Error: User is not found."));
		
		Set<Budget> userBudget = new HashSet<>();
		userBudget.add(budget);
		userAccount.setBudgets(userBudget);
		userRepository.save(userAccount);
		budgetRepository.save(budget);
		return "Budget Created";
	}
	
	@PostMapping("accountinformation")
	public String accountInformation(Long accountId) {
		return null;
	}
		
	
	
	
	@GetMapping("/accountlist")
	public List<Account> accountList() {
		UserDetails userDetails =
				(UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		
		User userAccount = userRepository.findByUsername(userDetails.getUsername())
		.orElseThrow(() -> new RuntimeException("Error: User is not found."));
		
		return userAccount.getAccounts();
	}
	
	@GetMapping("/transactioninformation")
	public String transactionInformation() {

		return null;
		
		
	}
	
	@GetMapping("/budgetinformation")
	public Set<Budget> budgetInformation() {
		UserDetails userDetails =
				(UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		User userAccount = userRepository.findByUsername(userDetails.getUsername())
				.orElseThrow(() -> new RuntimeException("Error: User is not found."));
		return userAccount.getBudgets();
		
		
	}

}
