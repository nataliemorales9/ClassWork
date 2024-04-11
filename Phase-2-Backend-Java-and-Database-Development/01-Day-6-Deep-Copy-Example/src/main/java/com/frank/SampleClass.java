package com.frank;

import java.util.Arrays;

public class SampleClass {
        // member data - instance data for the class
		// private means only members of the class can access it
		private int[] anArray;		

		// Below is the constructor to recieve the array and assign it to the member data array
		// An array is a reference type - name of array contains the location of the array in memory
        public SampleClass(int[] intArray) {
        	// Assign the reference recieved to the reference in this class
        	// Shallow copy - copy one reference into another - both point to the same data
        
        	anArray = intArray;  // assign the reference received to the reference in this class
      
        }
        // Below is the getter to return the member data array 
        public int[] getAnArray() {
               return anArray;  // replaced by defensive return
                
        }
        // Helper method to display the contents of the member data array
        public void showClass() {
                System.out.println(("\nContents of array in aClass: "));
                for (int i = 0; i < anArray.length; i++) {
                        System.out.println("Element " + i + ": " + anArray[i]);
                }
        }
}
