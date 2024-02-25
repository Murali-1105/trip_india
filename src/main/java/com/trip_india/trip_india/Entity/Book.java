package com.trip_india.trip_india.Entity;

import jakarta.persistence.*; 

@Entity 
public class Book { 
     
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) 
    private Integer id; 
    private String place;  
    private Integer members; 
    private String arrivals;
    private String leaving; 
    private String price;   
     
    public Book(Integer id, String place, Integer members, String arrivals, String leaving, String price) { 
        super();
        this.id = id;
        this.place = place;
        this.members = members;
        this.arrivals = arrivals;
        this.leaving = leaving;
        this.price = price;
    }  
     
    public Book() { 
        super();
    } 
     
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public Integer getMembers() {
        return members;
    }

    public void setMembers(Integer members) {
        this.members = members;
    }

    public String getArrivals() {
        return arrivals;
    }

    public void setArrivals(String arrivals) {
        this.arrivals = arrivals;
    }

    public String getLeaving() {
        return leaving;
    }

    public void setLeaving(String leaving) {
        this.leaving = leaving;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }
}
