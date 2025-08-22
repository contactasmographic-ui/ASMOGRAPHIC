
// Simple, local-only interactions
const cart = [];
function addToCart(name, price){
  cart.push({name, price});
  const total = cart.reduce((s,i)=>s+i.price,0).toFixed(2);
  const badge = document.getElementById('cart-count');
  badge.textContent = cart.length;
  badge.style.display = 'inline-flex';
  const toast = document.getElementById('toast');
  toast.textContent = `${name} ajouté au panier • ${price.toFixed(2)}€`;
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'),1500);
  console.log('Cart:', cart, 'Total:', total);
}
function subscribe(e){
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  if(!email){alert('Entre ton email.');return}
  alert(`Merci ! (${email}) — Newsletter locale uniquement (pas d’envoi réel).`);
  document.getElementById('email').value='';
}
