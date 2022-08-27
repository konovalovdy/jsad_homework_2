//делаем гамбургеры
class Kitchen {
    constructor () {
        this.type = {};
        this.filling = {};
        this.toppings = [];
        this.listOfTypes = [{name:"Большой гамбургер", price:100, energy:40}, 
                            {name:"Малый гамбургер", price:50, energy:20}];
        this.listOfFillings = [{name:" с сыром", price:10, energy:20},
                                {name:" с салатом", price:20, energy:20},
                                {name:" с картофелем", price:15, energy:10}];
        this.listOfToppings = [{name:" + приправа", price:15, energy:0},
                                {name:" + майонез", price:20, energy:5}];
    }
    setType (burgerType) {
        this.type = burgerType;
    }
    setFilling (burgerFilling) {
        this.filling = burgerFilling;
    }
    setTopping (burgerTopping) {
        if (this.toppings.length != 0) {
            for (const topping of this.toppings) {
                if(burgerTopping.name === topping.name) {
                    this.removeTopping(burgerTopping);
                    return;
                }
            }
        }
        this.toppings.push(burgerTopping);
    }
    removeTopping(burgerTopping){
        let removing = this.toppings.indexOf(burgerTopping);
        this.toppings.splice(removing);
    }
    makeHamburger () {
        if (this.type.name && this.filling.name) {
            const burger = new Hamburger (this.type, this.filling, this.toppings)
            burger.calculate();
        } else {
            alert ("Выберите гамбургер и начинку!");
        }
        
    }
    initType () {
        let typesSelectors = document.getElementsByName("hamburger");
        for (let i = 0; i < typesSelectors.length; i++) {
            typesSelectors[i].addEventListener("click", () => this.setType(this.listOfTypes[i]));
        }
    }
    initFillings () {
        let fillingsSelectors = document.getElementsByName("filling");
        for (let i = 0; i < fillingsSelectors.length; i++) {
            fillingsSelectors[i].addEventListener("click", () => this.setFilling(this.listOfFillings[i]));
        }
    }
    initToppings() {
        let toppingsSelectors = document.querySelectorAll(".topping_type");
        for (let i = 0; i < toppingsSelectors.length; i++) {
            toppingsSelectors[i].addEventListener("click", () => this.setTopping(this.listOfToppings[i]));
        }
    }
    initMakeHamburger() {
        let button = document.getElementById("calculate");
        button.addEventListener('click', () => this.makeHamburger());
    }
    init() {
        this.initType();
        this.initFillings();
        this.initToppings();
        this.initMakeHamburger();
    }
}

class Hamburger {
    constructor(type, filling, toppings) {
        this.type = type;
        this.filling = filling;
        this.toppings = toppings;
        this.price = 0;
        this.energy = 0;
        this.burgerInfo = document.querySelector(".info_string");
        this.priceInfo = document.querySelector(".price_info");
        this.energyInfo = document.querySelector(".energy_info");
    }
    _calculatePrice () {
        let burgerPrice = this.type.price + this.filling.price;
        if (this.toppings) {
            for (const topping of this.toppings) {
                burgerPrice += topping.price;
            }
        }
        this.price = burgerPrice;
    }
    _calculateEnergy () {
        let burgerEnergy = this.type.energy + this.filling.energy;
        if (this.toppings) {
            for (const topping of this.toppings) {
                burgerEnergy += topping.energy;
            }
        }
        this.energy = burgerEnergy;
    }
    calculate () {
        this._calculatePrice();
        this._calculateEnergy();
        this.getTypeName();
        this.getFillingName();
        this.getToppingsNames();
        this.getBurgerPrice();
        this.getBurgerEnergy();
    }
    getTypeName () {
        this.burgerInfo.innerHTML = this.type.name;
    }
    getFillingName () {
        this.burgerInfo.insertAdjacentText("beforeend", this.filling.name);
    }
    getToppingsNames () {
        for (const topping of this.toppings) {
            this.burgerInfo.insertAdjacentText("beforeend", topping.name);
        }
    }
    getBurgerPrice () {
        this.priceInfo.innerHTML = this.price;
    }
    getBurgerEnergy () {
        this.energyInfo.innerHTML = this.energy;
    }
}

let go = new Kitchen();
go.init();