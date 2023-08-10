let icono=document.getElementById('btcarrito')
let carrito=document.getElementById('carrito')
let botonCompra=document.getElementById('comprar')
console.log(botonCompra)
let producto=document.querySelectorAll('.card')
console.log(producto)

icono.addEventListener('mouseover', ()=>{
    carrito.style.display="block"
})

icono.addEventListener('mouseleave', ()=>{
    carrito.style.display="none"
})

botonCompra.addEventListener('click',()=>{
    carrito.innerHTML=`<div><img src="${producto1.children[0]}"> </div>`
})

let producto1=producto[0]
console.log(producto1.img)