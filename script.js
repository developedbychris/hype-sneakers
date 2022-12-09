const sliderWrapper = document.querySelector('.sliderWrapper')

const products = [
    {
        id: 1,
        title: 'Air Force',
        price: 119,
        colors: [{
            code: 'black',
            img: './img/air.png'
        },
        {
            code: 'darkblue',
            img: './img/air2.png'
        }]
    },
    {
        id: 2,
        title: 'Air Jordan',
        price: 149,
        colors: [{
            code: 'lightgray',
            img: './img/jordan.png'
        },
        {
            code: 'green',
            img: './img/jordan2.png'
        }]
    },
    {
        id: 3,
        title: 'Blazer',
        price: 109,
        colors: [{
            code: 'lightgray',
            img: './img/blazer.png'
        },
        {
            code: 'green',
            img: './img/blazer2.png'
        }]
    },
    {
        id: 4,
        title: 'Crater',
        price: 129,
        colors: [{
            code: 'black',
            img: './img/crater.png'
        },
        {
            code: 'lightgray',
            img: './img/crater2.png'
        }]
    },
    {
        id: 5,
        title: 'Hippie',
        price: 99,
        colors: [{
            code: 'gray',
            img: './img/hippie.png'
        },
        {
            code: 'black',
            img: './img/hippie2.png'
        }]
    }
]
let chosenProduct = products[0]
const menuItems = document.querySelectorAll('.menuItem')

//HTML elements for product
const productImg = document.querySelector('.productImg')
const productTitle = document.querySelector('.productTitle')
const productPrice = document.querySelector('.productPrice')
const shoeColors = document.querySelectorAll('.color')
const sizes = document.querySelectorAll('.size')
const productBtn = document.querySelector('.productBtn')
productBtn.disabled = true
menuItems.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        //Changes current slide
        sliderWrapper.style.transform = `translateX(${-100 * index}vw)`

        //Changes the item to selected product in product section
        chosenProduct = products[index]

        productImg.src = chosenProduct.colors[0].img
        productTitle.innerText = chosenProduct.title
        productPrice.innerText = `$${chosenProduct.price}`
        
        shoeColors.forEach((color, i) =>{
            color.style.backgroundColor = chosenProduct.colors[i].code
        })

        console.log(shoeColors.firstChild)
        console.log(chosenProduct)
    })
})
//Changes img when selecting color
shoeColors.forEach((color, i) =>{
    color.addEventListener('click', ()=> productImg.src = chosenProduct.colors[i].img)
})

//Toggles Shoe Size Selected
sizes.forEach(size=>{
    size.addEventListener('click', ()=>{
        sizes.forEach(size =>{
            size.style.backgroundColor = 'white'
            size.style.color = 'black'
            size.classList.add('hoverable')
        })
        
        size.style.backgroundColor = 'black'
        size.style.color = 'white'
        
        if(size.style.backgroundColor = 'black'){
            productBtn.disabled = false
            size.classList.toggle('hoverable')
        }
    })
})

//FOR MODAL
const buyNowBtn = document.querySelector('.productBtn')
const paymentModal = document.querySelector('.payment')
const closeBtn = document.querySelector('.close')

buyNowBtn.addEventListener('click', ()=>{
    paymentModal.style.display = 'flex'
    closeBtn.addEventListener('click', ()=> paymentModal.style.display = 'none')
})

//Credit Card Form Validation
const ccNum = new Cleave('#ccNum', {
    creditCard: true,
    delimiter: '-'
})

const ccExp = new Cleave('#ccExp', {
    date: true,
    datePattern: ['m', 'y']
})

const ccCVV = new Cleave('#ccCVV', {
    blocks: [3]
})
console.log(window.screen)