let items=[];
onload();
function onload(){
     let itemstr=localStorage.getItem('bagitems');
    items=itemstr?JSON.parse(itemstr):[];
    page();
    displaybagicon();
};
function addtobag(itemid){
     items.push(itemid);
     localStorage.setItem('bagitems',JSON.stringify(items));
     displaybagicon();
}; 
 function displaybagicon(){
   
    let itemcount=document.querySelector('#bag_item_count');
    if(items.length>0){
        itemcount.style.visibility='visible';
        itemcount.innerText=items.length;
    }
    else{
        itemcount.style.visibility='hidden';
    }
 };

 
 