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
function showPage(id){
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function toggleCart(){
  document.getElementById("cartPanel").classList.toggle("active");
}

function checkout(){
  alert("تم تنفيذ الطلب بنجاح ✅");
}

/* إغلاق السلة عند الضغط خارجها */
document.addEventListener("click", function(e){
  const cart = document.getElementById("cartPanel");
  const btn = document.querySelector(".cart");

  if(cart.classList.contains("active")){
    if(!cart.contains(e.target) && !btn.contains(e.target)){
      cart.classList.remove("active");
    }
  }
});

/* ESC */
document.addEventListener("keydown", function(e){
  if(e.key === "Escape"){
    document.getElementById("cartPanel").classList.remove("active");
  }
});
