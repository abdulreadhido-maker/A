// إغلاق عند الضغط خارج السلة
document.addEventListener("click", function(e){
  const cart = document.getElementById("cartPanel");
  const cartBtn = document.querySelector(".cart");

  if(cart.classList.contains("active")){
    if(!cart.contains(e.target) && !cartBtn.contains(e.target)){
      cart.classList.remove("active");
    }
  }
});

// إغلاق بزر ESC
document.addEventListener("keydown", function(e){
  if(e.key === "Escape"){
    document.getElementById("cartPanel").classList.remove("active");
  }
});
