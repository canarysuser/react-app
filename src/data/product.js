export class Product { 
    productId = 0;
    productName=''; 
    unitPrice = 0; 
    unitsInStock=0; 
    categoryId=0; 
    discontinued = false;
}


//Mock List of Products 
export const productList = [
    {productId:101, productName:'Markers', unitPrice:75, unitsInStock:100, categoryId:1, discontinued:false},
    {productId:102, productName:'Staplers', unitPrice:45, unitsInStock:66, categoryId:2, discontinued:true},
    {productId:103, productName:'Adhesive Tapes', unitPrice:66, unitsInStock:188, categoryId:3, discontinued:true},
    {productId:104, productName:'Compass Kit', unitPrice:100, unitsInStock:200, categoryId:1, discontinued:false},
    {productId:105, productName:'Boards', unitPrice:233, unitsInStock:983, categoryId:2, discontinued:false},
    {productId:106, productName:'Panels', unitPrice:9842, unitsInStock:19, categoryId:3, discontinued:false}
];
