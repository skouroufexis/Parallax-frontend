let productContainers=document.getElementsByClassName('product-container');
let l=productContainers.length;
let c;

for (c=0;c<l;c++){
    if(c!=0){
        let path='./images/products'+c+'.png';
        productContainers[c].style.backgroundImage='url('+path+')';

    }
}




