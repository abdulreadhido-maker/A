let cart = [];
let admin = false;

let items = JSON.parse(localStorage.getItem('items')) || [
  {name:"iPhone 15",price:3500,img:"https://images.unsplash.com/photo-1592750475338-74b7b21085ab"}
];

function save(){
  localStorage.setItem('items',JSON.stringify(items));
}

/* ===== LOGIN ===== */
function login(){
  if(document.getElementById('pass').value === '1234'){
    admin = true;
    document.getElementById('loginBox').style.display = 'none';
  }
}

/* ===== PAGES ===== */
function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  if(id === 'products') renderProducts();
  if(id === 'adminPanel') renderAdmin();
}

/* ===== PRODUCTS ===== */
function renderProducts(){
  const box = document.getElementById('productList');
  box.innerHTML = "";

  items.forEach((i,idx)=>{
    box.innerHTML += `
      <div class="card">
        <img src="${i.img}">
        <h3>${i.name}</h3>
        <p>${i.price}</p>
        <button onclick="addToCart(${idx})">إضافة</button>
      </div>
    `;
  });
}

/* ===== ADMIN ===== */
function addProduct(){
  items.push({
    name:document.getElementById('name').value,
    price:document.getElementById('price').value,
    img:document.getElementById('img').value
  });

  save();
  renderProducts();
  alert("تمت الإضافة");
}

/* ===== CART ===== */
function addToCart(i){
  cart.push(items[i]);
  document.getElementById('cartCount').innerText = cart.length;
}

function toggleCart(){
  document.getElementById('cartPanel').classList.toggle('active');
}

/* ===== LOADING ===== */
window.onload = ()=>{
  setTimeout(()=>{
    document.getElementById('loading').style.display = "none";
  },900);
};
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
