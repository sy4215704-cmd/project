 const convenience_fee=99;
let bagitemobject=[];
onload();
function onload(){
    loadbagitem();
    displaybagitem();
    displaybagsumary();
     
};
function displaybagsumary(){
    let bagsumary=document.querySelector('.bag_summary');
    let total_mrp = 0;
    let discount=0;
    let total_amount=0;
    bagitemobject.forEach(item =>{
        total_mrp += item.original_price;
        discount+=item.original_price-item.current_price;
        total_amount=total_mrp-discount+convenience_fee;
    });
    
    bagsumary.innerHTML=` <div class="bag_item_detail">
                <div class="price_header">PRICE DETAILS(${bagitemobject.length} items)</div>
                <div class="total_mrp">
                    <span class="right">Total MRP</span>
                    <span class="mrp">Rs ${total_mrp}</span>
                </div>
                <div class="total_mrp">
                    <span class="right">Discount on MRP</span>
                    <span class="discount">-Rs ${discount}</span>
                </div>
                <div class="total_mrp">
                    <span class="right">Convenience Fee</span>
                    <span class="convenience">Rs. ${convenience_fee}</span>
                </div>
                <hr>
                <div class="total_mrp">
                    <span class="right">Total Amount</span>
                    <span class="total_amount">₹ ${total_amount}</span>
                </div>
                  <button class="place_order">Place Order </button>
            </div>`;
};

function loadbagitem(){
  bagitemobject=  items.map(itemid=>{
        for(let i=0; i<product.length; i++){
            if(itemid==product[i].id){
                return product[i];
            }
        }
    });
      
};

function displaybagitem(){
let bag_item=document.querySelector('.bag_item');
let innerHTML='';
bagitemobject.forEach(bagitem => {
    innerHTML+=generateitemhtml(bagitem);
});
bag_item.innerHTML= innerHTML;
};
function removefrombag(itemid){
  items=  items.filter(bagitemid=> bagitemid!=itemid );
    localStorage.setItem('bagitems',JSON.stringify(items));
    loadbagitem();
    displaybagitem();
    displaybagicon();
    displaybagsumary();
}


function generateitemhtml(item){
    return  `  <div class="bag_items_container">
                 
                   <div class="image">
                        <img id="image" src="${item.item_image}">
                    </div>
                    <div class="item_detail">
                        <div class="company_name">${item.company_name}</div>
                        <div class="item_name">${item.item_name}</div>
                        <div class="price">
                            <span class="current_price">₹${item.current_price}</span>
                            <span id="original_price">${item.original_price}</span>
                            <span class="discount">(${item.discount}% OF)</span>
                        </div>
                        <div class="return_period">
                            <span class="return_days">${item.return_days} days</span>  return available
                        </div>
                        <div class="delivery_details">
                            Delivery by  <span class="delivery_date">${item.delivery_date}</span>
                        </div>
                    </div>
                    <div class="remove_from_cart"onclick="removefrombag(${item.id})">X</div>
           </div>`;
};
