
class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();//рекомендация, чтобы метод был вызван в текущем классе
        this.render();//вывод товаров на страницу
    }
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000, img:'img\\notebook.jpg'},
            {id: 2, title: 'Mouse', price: 20, img:'img\\mouse.jpg'},
            {id: 3, title: 'Keyboard', price: 200, img:'img\\keyboard.jpg'},
            {id: 4, title: 'Gamepad', price: 50, img:'img\\gamepad.jpg'},
        ];
    }
    
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
             const item = new ProductItem(product);
             block.insertAdjacentHTML("beforeend",item.render());
//              block.innerHTML += item.render();
        }
    }

    productsSum() {
        let sum = 0;
            for(let product of this.goods) {
            sum += product.price;
        }
        console.log("Суммарная стоимость всех товаров: " + sum);
    }
}

class ProductItem{
    constructor(product){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = product.img;
    }
    render(){
           return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

class Cart {
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render();
    }
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000, img:'img\\notebook.jpg'},
            {id: 2, title: 'Mouse', price: 20, img:'img\\mouse.jpg'},
            {id: 3, title: 'Keyboard', price: 200, img:'img\\keyboard.jpg'},
            {id: 4, title: 'Gamepad', price: 50, img:'img\\gamepad.jpg'},
        ];
    }
    addProduct () {

    }
    removeProduct () {

    }
    calculateSum () {
        
    }
}

let list = new ProductList();




/** 
const products = [
    {id: 1, title: 'Notebook', price: 2000, img:'img\\notebook.jpg' },
    {id: 2, title: 'Mouse', price: 20, img:'img\\mouse.jpg' },
    {id: 3, title: 'Keyboard', price: 200, img:'img\\keyboard.jpg' },
    {id: 4, title: 'Gamepad', price: 50, img:'img\\gamepad.jpg' },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = obj => {
    return `<div class="product-item">
                <h3>${obj.title}</h3>
                <image class="product-img" src=${obj.img}></image>
                <p>${obj.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);*/