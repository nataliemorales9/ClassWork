package com.frank.playingcard;

public class PlayingCard {
	public static void main( String[] args )
	{
		System.out.println("Welcome to our class and object usage demo!");
		
		PlayingCard aCard = new PlayingCard();
		
		System.out.println("aCard Object:" + aCard);
	}
		private String suit;
		private String color;
		private int value;
}
