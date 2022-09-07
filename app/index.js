const yargs = require('yargs') ; 
const chalk = require('chalk') ;
const productCRUD = require('../model/productCRUD') ; 
let {readAllData,readDetail,createProduct,deleteProduct,updateProduct,nhapHang} = productCRUD ; 
// create
// test cmd : node app/index.js create
// node app/index.js create --name "iPhone 10 Pro Max 128GB" --price "28490" --amount "0" --desc "iPhone mới kế thừa thiết kế đặc trưng từ iPhone 12 Pro Max khi sở hữu khung viền vuông vức, mặt lưng kính cùng màn hình tai thỏ tràn viền nằm ở phía trước."
yargs.command({
    command : "create" , 
    builder : {
        name : {
            type:"string" , 
        },
        price : {
            type : "number" , 
        },
        amount : {
            type : "number" ,
        } ,
        desc : {
            type:"string" ,
        }
    },
    handler : (args)=>{
        // console.log(chalk.yellowBright("create")) ; 
        let {name,price,amount,desc} = args ; 
        // console.log(`${name} ${price} ${amount} ${desc}`) ; 
        createProduct(name,price,amount,desc) ; 
    }
}) ; 
// read-all
// test cmd : node app/index.js read-all
// command : node app/index.js read-all
yargs.command({
    command : "read-all" , 
    handler : ()=>{
        console.log(chalk.yellowBright("read-all")) ; 
        let productArr = readAllData() ; 
        console.log(productArr) ; 
    }
}) ; 
// read-detail
// test cmd : node app/index.js read-detail
yargs.command({
    command : "read-detail" , 
    builder : {
        id : {
            type : "string",
        }
    },
    handler : (args)=>{
        let {id} = args ; 
        console.log(chalk.yellowBright("read-detail")) ; 
        let wishProduct =  readDetail(id) ; 
        console.log(wishProduct) ; 
       
    }
}) ; 
// update
// test cmd : node app/index.js update
yargs.command({
    command : "update" ,
    builder : {
        id : {
            type : "string" ,
        },
        name : {
            type:"string" , 
        },
        price : {
            type : "number" , 
        },
        amount : {
            type : "number" ,
        } ,
        desc : {
            type:"string" ,
        }

    },
    handler : (args)=>{
        let {id , name , price , amount , desc } = args ;
        updateProduct(id , name , price , amount , desc) ; 
    }
}) ; 
// delete
// test cmd : node app/index.js delete
yargs.command({
    command : "delete" , 
    builder : {
        id : {
            type : "string" , 
        }
    },
    handler : (args)=>{
        let {id} = args ; 
        if(deleteProduct(id)){
            console.log("Delete Successfully !") ; 
        }; 
        
        
    }
}) ;
// nhap hang
// command :  node app/index.js nhapHang --id "..."
yargs.command({
    command : "nhapHang" , 
    builder : {
        id : {
            type : "string" ,
        }
    },
    handler : (args) => {
        let {id} = args ; 
        nhapHang(id) ; 
        
    }
})
// parse()
yargs.parse() ; 
