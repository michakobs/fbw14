const thumbnailObj = document.getElementsByClassName('thumbnail');

const thumbnailContainerObj = document.getElementById('thumbnail-container');

const productDetailsObj = document.getElementById('product-details');

const cartObj = document.getElementById('cart');

const thankyouObj = document.getElementById('thankyou');

// in den Warenkorb legen - Button
const putItemCartObj = document.getElementById('put-item-cart');

const showProductDetails = () => {
    productDetailsObj.style.display = 'block';
    thumbnailContainerObj.style.display = 'none';        
    cartObj.style.display = 'none';
    thankyouObj.style.display = 'none';    
}

const showCart = () => {
    productDetailsObj.style.display = 'none';
    thumbnailContainerObj.style.display = 'none';        
    cartObj.style.display = 'block';
    thankyouObj.style.display = 'none';    
}

const showThankYou = () => {
    productDetailsObj.style.display = 'none';
    thumbnailContainerObj.style.display = 'none';        
    cartObj.style.display = 'none';
    /*
    analog zu:

    .thankyou {
        display: flex
    }
    */
    thankyouObj.style.display = 'flex';    
}

putItemCartObj.onclick = () => {
    showCart();
}

for(let i=0; i<thumbnailObj.length; i++) {
    thumbnailObj[i].onclick = () => {
        showProductDetails();
    }
}

