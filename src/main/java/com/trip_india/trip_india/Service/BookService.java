package com.trip_india.trip_india.Service;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trip_india.trip_india.Entity.Book;
import com.trip_india.trip_india.Repository.BookRepository;

@Service
public class BookService {
      
    @Autowired 
    private BookRepository bookRepos;  
       
    
    public void save(Book b){ 
         bookRepos.save(b);
    } 
     
    public List<Book> getAllBook(){ 
        return bookRepos.findAll();
    }  
     
    public void deleteById(int id){ 
        bookRepos.deleteById(id);
    }
}
