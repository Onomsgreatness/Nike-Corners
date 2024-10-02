const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        text: " Introduced in 1982, designed by Bruce Kilgore. Nike Air Force 1s are widely available through various retailers, including Nike's official website, JD Sports, Foot Locker, and others. They come in men's, women's, and children's sizes with various price points.",
        colors: [
            {
                code: "black",
                img: "./img/air.png",
            },
            {
                code: "darkblue",
                img: "./img/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        text: "The first Air Jordan model was released in 1985. The original design was created by Peter Moore. Air Jordans are available through various retailers, including Nike's official website, Foot Locker, and JD Sports. They come in men's, women's, and children's sizes with various price points.",
        colors: [
            {
                code: "lightgray",
                img: "./img/jordan.png",
            },
            {
                code: "green",
                img: "./img/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        text: "Intoduced in 1973, Launched by Nike as a basketball shoe, available through various retailers, including Nike's official website, Foot Locker, and JD Sports. They come in men's, women's, and children's sizes with various price points.",
        colors: [
            {
                code: "lightgray",
                img: "./img/blazer.png",
            },
            {
                code: "green",
                img: "./img/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        text: "The Nike Crater line, particularly the Crater Impact model, represents Nike's commitment to sustainability while providing stylish and comfortable footwear options, available through various retailers",
        colors: [
            {
                code: "black",
                img: "./img/crater.png",
            },
            {
                code: "lightgray",
                img: "./img/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        text: "Hippie available through various retailers. They come in men's, women's, and children's sizes with various price points.",
        colors: [
            {
                code: "gray",
                img: "./img/hippie.png",
            },
            {
                code: "black",
                img: "./img/hippie2.png",
            },
        ],
    },
]

let choosenProduct = products[0] //Assigned products[0] to choosenProducts

/*Below helps to manipulate the slide interaction */
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const currentProductDesc = document.querySelector(".productDesc");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform= `translateX(${-100 * index}vw)`; //noticed we used the symbol "``" 

        //Change the choosen product
        choosenProduct = products[index]

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "£" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;
        currentProductDesc.textContent = choosenProduct.text;

        //assing new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index)=>{
    size.addEventListener("click", ()=>{
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white"
            size.style.color = "black"
        });

        size.style.backgroundColor= "black"
        size.style.color= "white"
    })
})

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex"
});

close.addEventListener("click", () => {
    payment.style.display = "none"
});``