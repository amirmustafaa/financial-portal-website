package com.amirmustafaa.financialportal.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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
import org.springframework.web.bind.annotation.RestController;

import com.amirmustafaa.financialportal.models.Account;
import com.amirmustafaa.financialportal.models.Transaction;
import com.amirmustafaa.financialportal.models.User;
import com.amirmustafaa.financialportal.payload.request.LoginRequest;
import com.amirmustafaa.financialportal.repository.AccountRepository;
import com.amirmustafaa.financialportal.repository.TransactionRepository;
import com.amirmustafaa.financialportal.repository.UserRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/data")
public class DataController {
	
	@Autowired
	AccountRepository accountRepository;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	TransactionRepository transactionRepository;
	

	@PostMapping("/createaccount")
	public String createAccount(@RequestBody Account account){
		UserDetails userDetails =
				(UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		List<User> users = new ArrayList<>();
		User userAccount = userRepository.findByUsername(userDetails.getUsername())
		.orElseThrow(() -> new RuntimeException("Error: User is not found."));
		users.add(userAccount);
		account.setUsers(users);
		accountRepository.save(account);
		return "Account Created";
	}
	
	@PostMapping("/createtransaction")
	public String createTransaction(@RequestBody Transaction transaction) {
		transactionRepository.save(transaction);
		return "Transaction Created";	
	}
	
	@GetMapping("/accountinformation")
	public ResponseEntity<?> accountInformation() {
		return null;
		
	}
	
	@GetMapping("/transactioninformation")
	public ResponseEntity<?> transactionInformation() {
		return null;
		
	}

}
