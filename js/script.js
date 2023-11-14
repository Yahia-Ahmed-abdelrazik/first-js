var addtoCartBtns = document.querySelectorAll(".addtocart")
var cart = document.getElementById("cart")
var totalprice = document.getElementById("totalprice")
var show = document.getElementById("show")

var cardImg = document.querySelectorAll(".card-img")
// var imgSrc = ""
// "img/images (8).jpeg" 



// "../img/images (9).jpeg"
var total = 0


addtoCartBtns.forEach(function (btn) {
    btn.onclick = function () {
        cart.innerHTML += newItem(btn.getAttribute("itemInfo"))
        total += +(btn.getAttribute("price"))
       

    }
})






function newItem(itemName ,imgSrc) {
    return '<div   class="items-in-cart text-white d-flex  justify-content-between  align-items-center col-8 m-auto  " > <img src="" >  <h2> '
    // +cardImgs.textcontent+
     + itemName +
     
     " </h2>  </div>"

}

show.onclick = function () {
    totalprice.innerHTML = total
}

/////////////////////////////////////////
