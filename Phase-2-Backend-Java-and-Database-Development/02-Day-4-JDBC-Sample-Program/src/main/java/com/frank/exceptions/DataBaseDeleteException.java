package com.frank.exceptions;

// This is a custom exception used when there is a data base delete error 
// We wanted to provide more granularity to a problem than the generic DataAccessException provided by SpringJDBC

// To define a custom exception:
//
//		1. Make it a subclass of exception
//		2. Provide a default constructor that calls the Exception constructor (super())
//		3. Provide a constructor that takes a string parameter (error message) and pass it to super constructor
//		4. Anything else you think you want in the custom exception

public class DataBaseDeleteException extends Exception {

	public DataBaseDeleteException() {
		super();
	}
	
	public DataBaseDeleteException(String message) {
		super(message);
		
		System.out.println("Problem deleting data in database:");
		System.out.println(message);
	}
}

