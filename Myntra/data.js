function page(){
let display_item=document.querySelector('.all_product');
if(!display_item){
    return;
};
let newhtml='';
product.forEach(product=>{
    newhtml+=`<div class="item_container">
                <img src="${product.item_image}" id="image">
                <div class="rating">
                    ${product.rating.stars} Stars || ${product.rating.review}k
                </div>
                <div class="company_name">${product.company_name}</div>
                <div class="item_name">${product.item_name}</div>
                <div class="price">
                    <span>₹ ${product.current_price}</span>
                     <span id="original_price"> ${product.original_price}</span>
                      <span>(${product.discount}% OF)</span>
                </div>
                <button id="add_to_bag" onclick="addtobag(${product.id});">Add to bag</button>
                </div>`;
                
});
 
    display_item.innerHTML=newhtml;
 
};


let product=
[
    {
        id:'1',
        item_image:'product_image/Cotton Rayon Blend Anarkali Kurta.png',
        item_name:'Anarkali Kurta',
        company_name:'CARLTON LONDON',
        rating:{
            stars:2.8,
            review:3.2
        },
        current_price:643,
        original_price:715,
        discount:10,
        return_days:15,
        delivery_date:'12 sep 2025',
    },
     { 
        id:'2',
        item_image:'product_image/saree.png',
        item_name:'saree',
        company_name:'MYNTRA',
        rating:{
            stars:6.2,
            review:3.2
        },
        current_price:904,
        original_price:1560,
        discount:42,
        return_days:15,
        delivery_date:'12 sep 2025',
    },
     { 
        id:'3',
        item_image:'product_image/Granthva Fab Kurta.png',
        item_name:'Granthva Fab Kurta',
        company_name:'AMAZON',
        rating:{
            stars:2.4,
            review:1.2
        },
        current_price:550,
        original_price:715,
        discount:23,
        return_days:15,
        delivery_date:'12 sep 2025',
    },
     { 
        id:'4',
        item_image:'product_image/KLOSIA Women Printed.png',
        item_name:'KLOSIA Women ',
        company_name:'MYNTRA',
        rating:{
            stars:5.2,
            review:2.2
        },
        current_price:339,
        original_price:515,
        discount:34,
        return_days:15,
        delivery_date:'12 sep 2025',
    },
     { 
        id:'5',
        item_image:'product_image/Kurta & Dupatta.png',
        item_name:'Kurta & Dupatta',
        company_name:'CARLTON LONDON',
        rating:{
            stars:1.3,
            review:2.2
        },
        current_price:342,
        original_price:1560,
        discount:46,
        return_days:15,
        delivery_date:'12 sep 2025',
    },
     { 
        id:'6',
        item_image:'product_image/Line Kurta.png',
        item_name:'Line Kurta',
        company_name:'MYNTRA',
        rating:{
            stars:4.2,
            review:1.8
        },
        current_price:470,
        original_price:540,
        discount:13,
        return_days:15,
        delivery_date:'12 sep 2025',
    },
     { 
        id:'7',
        item_image:'product_image/Long Shirt for Women.png',
        item_name:'Long Shirt for Women',
        company_name:'MICROSOFT',
        rating:{
            stars:3.4,
            review:2.2
        },
        current_price:346,
        original_price:450,
        discount:23,
        return_days:15,
        delivery_date:'12 sep 2025',
    },
     { 
        id:'8',
        item_image:'product_image/Stylish Frock Dress.png',
        item_name:'Stylish Frock Dress',
        company_name:'CARLTON LONDON',
        rating:{
            stars:4.2,
            review:3.2
        },
        current_price:1089,
        original_price:1676,
        discount:35,
        return_days:15,
        delivery_date:'12 sep 2025',
    },
     { 
        id:'9',
        item_image:'product_image/SWORNOF.png',
        item_name:'SWORNOF',
        company_name:'MYNTRA',
        rating:{
            stars:1.8,
            review:1.6
        },
        current_price:555,
        original_price:730,
        discount:24,
        return_days:15,
        delivery_date:'12 sep 2025',
    },
     { 
        id:'10',
        item_image:'product_image/TAASHI Saree.png',
        item_name:'TAASHI Saree',
        company_name:'CARLTON LONDON',
        rating:{
            stars:2.5,
            review:2.2
        },
        current_price:1206,
        original_price:1370,
        discount:12,
        return_days:15,
        delivery_date:'12 sep 2025',
    },
     { 
        id:'11',
        item_image:`product_image/Women's Kanjivaram.png`,
        item_name:`Women's Kanjivaram`,
        company_name:'AMAZON',
        rating:{
            stars:3.2,
            review:2.2
        },
        current_price:429,
        original_price:650,
        discount:34,
        return_days:15,
        delivery_date:'12 sep 2025',
    },
     { 
        id:'12',
        item_image:`product_image/Women's Rayon Blend.png`,
        item_name:`Women's Rayon Blend`,
        company_name:'CARLTON LONDON',
        rating:{
            stars:2.9,
            review:1.7
        },
        current_price:444,
        original_price:600,
        discount:26,
        return_days:15,
        delivery_date:'12 sep 2025',
    },
    ];
    