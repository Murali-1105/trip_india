package com.trip_india.trip_india.Controller; 
 
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import com.trip_india.trip_india.Entity.Book;
import com.trip_india.trip_india.Service.BookService;


@Controller 
public class BookController{ 
     
    @Autowired 
    private BookService service;   
     

    @GetMapping("/")
    public ModelAndView getAllBook(){ 
        List<Book>list=service.getAllBook();  
        return new ModelAndView("index","book",list);
    } 

//ModelAndView m =new ModelAndView(); 
//m.setViewName("index");  
//m.addObject("book", List); 
     
    @GetMapping("/book")
    public String book(){ 
        return "book";
    } 
     
    @GetMapping("/Artical")
    public String Artical(){ 
        return "Artical";
    } 
     
    @GetMapping("/register")
    public String register(){ 
        return "register";
    } 
     
    @PostMapping("/save") 
    public String addBook(@ModelAttribute Book b){  
        service.save(b);
        return "redirect:/";
    }    
      
    @RequestMapping("/deleteMyList/{id}")
    public String deleteMyList(@PathVariable("id") int id){  
      service.deleteById(id);
      return "redirect:/";
    }
} 
 

