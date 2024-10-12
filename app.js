const addProducts = () => {
  const product = document.getElementById("product-name").value;
  const quantity = document.getElementById("product-quantity").value;
  document.getElementById("product-name").value = "";
  document.getElementById("product-quantity").value = "";
  displayProducts("product-container",product, quantity);
  setDataToLocalStorage(product, quantity);
};
const displayProducts = (id,product, quantity) => {
  const ul = document.getElementById(id);
  const li = document.createElement("li");
  li.innerText = `${product} : ${quantity}`;
  ul.append(li);
};
const getDataFromLocalStorage = () => {
  let shoppingCart = {};
  const strigifiedProducts = localStorage.getItem("cart");
  if (strigifiedProducts) {
    shoppingCart = JSON.parse(strigifiedProducts);
  }
  return shoppingCart;
};
const setDataToLocalStorage = (product, quantity) => {
  let shoppingCart = getDataFromLocalStorage();
  shoppingCart[product]=quantity;
  const strigifiedCart = JSON.stringify(shoppingCart);
  localStorage.setItem("cart",strigifiedCart)
};
const displayProductsFromLocalStorage = ()=>{
     const allProducts = getDataFromLocalStorage();
     for (const product in allProducts) {
       displayProducts('cart-container',product,allProducts[product])
     }
}
displayProductsFromLocalStorage();
