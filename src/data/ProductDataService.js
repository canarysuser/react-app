import { productList } from "./product";

export function getAllProducts() { 

    let list = productList; 
    return list; 

}
export function getProductDetails( productId ) { 
    let list = productList; 
    let item = list.find( (x) => x.productId==productId );
    if(item) //is found 
        return item; 
    else 
        return null;
}

export function updateProductDetails(productObj) { 
    let item = productList.find((x)=>x.productId==productObj.productId);
    if(item){
        //update the list 
        //get the index position of the matching item
        let index = productList.findIndex((x)=>x.productId===productObj.productId);
        productList.splice(index, 1); //remove the old item from the array
        productList.push(productObj); //insert the new item into the array
    } else { 
        //insert the item to the list. 
        let count = productList.length + 101; //generating a new Id 
        productObj.productId = count;        
        productList.push(productObj);
    }
}