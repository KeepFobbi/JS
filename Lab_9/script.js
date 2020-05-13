class Humburger{
    constructor(size, stuffing){
        this.size = size;
        this.stuffing = stuffing;
    }


    addTopping(topping){
        if (!("addedToppings" in this)) {
            this.addedToppings = [];
        }else if(this.addedToppings.indexOf(topping)>=0){
            this.removeToping(topping);
            return;
        }
        this.addedToppings.push(topping);
    }

    removeToping(topping){
        if(this.addedToppings.indexOf(topping)>=0)
            this.addedToppings.splice(this.addedToppings.indexOf(topping),1);

    }

    get Toppings(){
        alert('aaaaaaaa');
        return this.addedToppings;
    }

    get Size(){
        console.log(this.size.name);
        return this.size.price;
    }
    set Size(newV){
        if(newV.name === 'SMALL' || newV.name === 'BIG')
            this.size=newV;

    }


    get Stuffing(){
        console.table(this.stuffing);
        alert(this.stuffing);
    }

    set Stuffing(newV){
        if(newV.name === 'CHEESE' || newV.name === 'SALAD' || newV.name === 'POTATO')
            this.stuffing = newV;
    }


    calculetePrice(){
        let price=0;
        price += this.size.price + this.stuffing.price;
        if(this.addedToppings)
            for (let i = 0; i<this.addedToppings.length;i++)
                price+=this.addedToppings[i].price;
        document.getElementById('price').innerHTML = price.toString();
    }

    calculeteCalories(){
        let cals=0;

        cals += this.size.call + this.stuffing.call;
        if(this.addedToppings)
            for (let i = 0; i<this.addedToppings.length;i++)
                cals+=this.addedToppings[i].call;
        document.getElementById('call').innerHTML = cals.toString();
    }
}

Humburger.SIZE_SMALL = {
    name:"SMALL",
    price: 50,
    call: 20
};

Humburger.SIZE_LARGE = {
    name:'BIG',
    price: 100,
    call: 40
};

Humburger.STUFFING_CHEESE = {
    name: 'CHEESE',
    price: 10,
    call: 20
};

Humburger.STUFFING_SALAD = {
    name: 'SALAD',
    price: 20,
    call: 5
};

Humburger.STUFFING_POTATO = {
    name: 'POTATO',
    price: 15,
    call: 10
};

Humburger.TOPPING_MAYO = {
    name: 'MAYONNAISE',
    price: 20,
    call: 5,
};

Humburger.TOPPING_SPICE = {
    name: 'SPICE',
    price: 15,
    call: 0,
};

Humburger.TOPPINGS = [Humburger.TOPPING_SPICE, Humburger.TOPPING_MAYO];
Humburger.STUFFINGS = [Humburger.STUFFING_CHEESE, Humburger.STUFFING_POTATO, Humburger.STUFFING_SALAD];
Humburger.SIZES = [Humburger.SIZE_LARGE, Humburger.SIZE_SMALL];

Humburger.addedStuffing = [];
Humburger.addedStuffing = {};
Humburger.addedSize = {};


window.onload= function () {
    let humburger = new Humburger(Humburger.SIZE_SMALL, Humburger.STUFFING_CHEESE);
    document.getElementById('menu_size').innerHTML = 'SMALL';
    document.getElementById('menu_st').innerHTML = 'CHEESE';
    document.body.addEventListener('click', function (event) {


        if (event.target.id === 'ch_small') {
            document.getElementById('menu_size').innerHTML = 'SMALL';
            humburger.Size = Humburger.SIZE_SMALL;
        }
        if (event.target.id === 'ch_big') {
            document.getElementById('menu_size').innerHTML = 'BIG';
            humburger.Size = Humburger.SIZE_LARGE;
        }
        if (event.target.id === 'ch_cheese') {
            document.getElementById('menu_st').innerHTML = 'CHEESE';
            humburger.Stuffing = Humburger.STUFFING_CHEESE;
        }
        if (event.target.id === 'ch_salad') {
            document.getElementById('menu_st').innerHTML = 'SALAD';
            humburger.Stuffing = Humburger.STUFFING_SALAD;
        }
        if (event.target.id === 'ch_potato') {
            document.getElementById('menu_st').innerHTML = 'POTATO';
            humburger.Stuffing = Humburger.STUFFING_POTATO;

        }
        if (event.target.id === 'ch_spice') {
            humburger.addTopping(Humburger.TOPPING_SPICE);
            document.getElementById('menu_tp').innerHTML = "";
            for( let i = 0; i < humburger.addedToppings.length; i++)
                document.getElementById('menu_tp').innerHTML += humburger.addedToppings[i].name + ' ';
        }

        if (event.target.id === 'ch_mayo') {
            humburger.addTopping(Humburger.TOPPING_MAYO);
            document.getElementById('menu_tp').innerHTML = "";
            for( let i = 0; i < humburger.addedToppings.length; i++)
                document.getElementById('menu_tp').innerHTML += humburger.addedToppings[i].name + " ";
        }

        if (event.target.id === 'calc') {
            humburger.calculeteCalories();
            humburger.calculetePrice();
        }

    });
};
