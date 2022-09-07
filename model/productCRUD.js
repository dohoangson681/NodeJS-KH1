const fs = require('fs') ;
let readAllData = ()=>{
    let product = fs.readFileSync("data/product.json").toString() ; 
    let productArr = JSON.parse(product) ; 
    return productArr ; 
}
let readDetail = (id) => {
    let productArr = readAllData() ; 
    let index = productArr.findIndex((product)=>{
        return product.id === id ; 
    })
    if(index > -1){
        let foundProduct = productArr[index] ; 
        return foundProduct ; 
    }else {
        console.log("ID not found !") ; 
    }

}
let createProduct = (name,price,amount,desc) => {
    
    let newProduct = {
        id : (Math.random()*1000).toFixed(5).toString() , 
        name , 
        price , 
        amount , 
        desc
    }
    // console.log(newProduct) ; 
    let productArr = readAllData() ;
    productArr = [...productArr , newProduct] ; 
    fs.writeFileSync("data/product.json" , JSON.stringify(productArr) ); 

}
let deleteProduct = (id) => {
    let productArr = readAllData() ; 
    let index = productArr.findIndex((product)=>{
       return product.id === id ; 
    })
    if(index > -1){
        productArr.splice(index , 1) ; 
        fs.writeFileSync("data/product.json" , JSON.stringify(productArr)) ; 
        return true ; 
    }else {
        console.log("Product Not Fount !") ; 
    }
    
}
let updateProduct = (id , name , price , amount , desc) => {
    let productArr = readAllData() ; 
    let index = productArr.findIndex((product) => {
       return product.id === id ; 
    })
    if(index > -1){
        console.log("Product Found !") ;
        // productArr[index].name = name ; 
        // productArr[index].price = price ;
        // productArr[index].amount = amount ; 
        // productArr[index].desc = desc ; 
        productArr[index] = {...productArr[index] , name , price , amount , desc} ; 
        fs.writeFileSync("data/product.json" , JSON.stringify(productArr)) ; 
    }else {
        console.log("Product Not Found !") ; 
    }
}
module.exports = {
    readAllData,
    readDetail,
    createProduct,
    deleteProduct,
    updateProduct
}