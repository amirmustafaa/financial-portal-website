package com.amirmustafaa.financialportal.controllers;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
import com.amirmustafaa.financialportal.payload.request.AccountRequest;
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
		
		//Set<User> users = new HashSet<>();
		//Set<Account> acc = new HashSet<>();
		User userAccount = userRepository.findByUsername(userDetails.getUsername())
		.orElseThrow(() -> new RuntimeException("Error: User is not found."));
		//users.add(userAccount);
		//acc.add(account);
		userAccount.setAccounts(account);
		accountRepository.save(account);
		userRepository.save(userAccount);
		return "Account Created";
	}
	
	@PostMapping("/createtransaction")
	public String createTransaction(@RequestBody Transaction transaction) {
		Account account = accountRepository.findById(transaction.getAccountId())
				.orElseThrow(() -> new RuntimeException("Error: Account is not found."));
		BigDecimal newAmount;
		if(transaction.getType().equals("Deposit")) {
			newAmount = account.getCurrentAmount().add(transaction.getAmount());
		}else {
			newAmount = account.getCurrentAmount().subtract(transaction.getAmount());
		}
		
		
		account.setCurrentAmount(newAmount);
		account.setTransactions(transaction);
		transactionRepository.save(transaction);
		accountRepository.save(account);
		
		return "Transaction Created";	
	}
	
	
	@PostMapping("/createbudget")
	public String createBudget(@RequestBody Budget budget) {
		
		UserDetails userDetails =
				(UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		
		User userAccount = userRepository.findByUsername(userDetails.getUsername())
				.orElseThrow(() -> new RuntimeException("Error: User is not found."));
		
		userAccount.setBudgets(budget);
		budgetRepository.save(budget);
		userRepository.save(userAccount);
		return "Budget Created";
	}
	
	@PostMapping("accountinformation")
	public Account accountInformation(@RequestBody AccountRequest accountRequest) {
		Account account = accountRepository.findById(accountRequest.getAccountId())
				.orElseThrow(() -> new RuntimeException("Error: Account is not found."));
		return account;
	}
		
	
	
	
	@GetMapping("/accountlist")
	public List<Account> accountList() {
		UserDetails userDetails =
				(UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		
		User userAccount = userRepository.findByUsername(userDetails.getUsername())
		.orElseThrow(() -> new RuntimeException("Error: User is not found."));
		
		return userAccount.getAccounts();
	}
	
	@PostMapping("/transactionlist")
	public List<Transaction> transactionList(Long accountId) {

		Account account = accountRepository.findById(accountId)
				.orElseThrow(() -> new RuntimeException("Error: Account is not found."));
		return account.getTransactions();
		
		
	}
	
	@GetMapping("/budgetlist")
	public List<Budget> budgetInformation() {
		UserDetails userDetails =
				(UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		User userAccount = userRepository.findByUsername(userDetails.getUsername())
				.orElseThrow(() -> new RuntimeException("Error: User is not found."));
		return userAccount.getBudgets();
		
		
	}
	
	@PostMapping("/budgetinformation")
	public Budget budgetInformation(Long budgetId) {
		Budget budget = budgetRepository.findById(budgetId)
				.orElseThrow(() -> new RuntimeException("Error: Budget is not found."));
			
		return budget;
		
		
	}
	
	

}
