
const beverageDrink = {
    coffee : "Cappucino : $120 + tax for 100ml",
    tea : "$1200 for 100ml",
    lassi : "Meethi Lassi : $12000 + tax for 100ml",

};

console.log(beverageDrink.coffee);
console.log(beverageDrink.lassi);
console.log(beverageDrink.tea);

beverageDrink.tea = 'Masala Chai : $1250 + tax for 10ml '
console.log(beverageDrink);

beverageDrink.coldDrink = '$9999999 + tax for 2ml Cold Drink of your choice';
console.log(beverageDrink); 

delete beverageDrink.coffee;
console.log(beverageDrink); 
