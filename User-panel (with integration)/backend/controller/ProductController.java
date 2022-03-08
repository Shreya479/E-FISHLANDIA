package com.examly.springapp.controller;

import org.springframework.ui.Model;
import com.examly.springapp.model.ProductModel;
import com.examly.springapp.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.*;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.stereotype.Controller;

@CrossOrigin(origins = "*")
@RestController
public class ProductController {

@Autowired
private ProductService productService;

//api
//add
@PostMapping("/addProduct")
public ProductModel addProduct(@RequestBody ProductModel product){
    return productService.saveProduct(product);
}

@PostMapping("/addProducts")
public List<ProductModel> addProducts(@RequestBody List<ProductModel> products){
    return productService.saveProducts(products);
}

//view
@GetMapping("/product/{id}")
public ProductModel findProductByID(@PathVariable int id){
    return productService.getProductById(id);
}

@GetMapping("/products")
public List<ProductModel> findAllProducts(){
    return productService.getProducts();
}

//delete
@DeleteMapping("/deleteProduct/{id}")
public String deleteProduct(@PathVariable int id){
    productService.deleteProduct(id);
    return "Product Removed";
}

@DeleteMapping("/multideleteProduct")
public String deleteSomeProduct(@RequestBody List<Integer> ids){
for(int id : ids){
    productService.deleteProduct(id);
}
    return "Products Removed";
}

//update
@PutMapping("/updateProduct")
    public ProductModel updateProduct(@RequestBody ProductModel product) {
        return productService.updateProduct(product);
    }


}
