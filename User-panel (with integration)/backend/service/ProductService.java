package com.examly.springapp.service;

import com.examly.springapp.model.ProductModel;
import com.examly.springapp.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class ProductService {

@Autowired
private ProductRepository repository; 

//service methods
//add

public ProductModel saveProduct(ProductModel product){
    return repository.save(product);
}
 
public List<ProductModel> saveProducts(List<ProductModel> products){
    return repository.saveAll(products);
}

//view
public ProductModel getProductById(int id){
    return repository.findById(id).orElse(null);
}

public List<ProductModel> getProducts(){
    return repository.findAll();
}

//delete
public void deleteProduct(int id){
    repository.deleteById(id);
    
}

//update
public ProductModel updateProduct(ProductModel product) {
    ProductModel existingProduct = repository.findById(product.getId()).orElse(null);
    existingProduct.setStatus(product.getStatus());
    existingProduct.setStock(product.getStock());
    existingProduct.setPrice(product.getPrice());
    return repository.save(existingProduct);
}

 
}