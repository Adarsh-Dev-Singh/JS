
// const beverageDrink = {
//     coffee : "Cappucino : $120 + tax for 100ml",
//     tea : "$1200 for 100ml",
//     lassi : "Meethi Lassi : $12000 + tax for 100ml",

// };

// console.log(beverageDrink.coffee);
// console.log(beverageDrink.lassi);
// console.log(beverageDrink.tea);

// beverageDrink.tea = 'Masala Chai : $1250 + tax for 10ml '
// console.log(beverageDrink);

// beverageDrink.coldDrink = '$9999999 + tax for 2ml Cold Drink of your choice';
// console.log(beverageDrink); 

// delete beverageDrink.coffee;
// console.log(beverageDrink); 

// const logan = {
//     name : 'Wolverine',
//     ability:{
//         superPower:'healing',
//         strength:'claws'
//     }
// };

// console.log(logan['ability']['superPower']); // Bracket Notation

// const a = JSON.stringify(logan);//JSON 
// console.log(a);
// // localStorage is not done here 
// // JSON.parse(a);
// console.log(JSON.parse(a));
// //objects are just refrences if we take

const lassi ={
    flavour : 'meethi',
    rate : 10,
    quantity : '100ml'
}; // The object lassi is just a refrence to a partucular location in computer's memory where all these property value pairs are stored 

const bassi = lassi; // This doesn't make copy of lassi object in bassi but makes a copy of refrence to that location so bassi and lassi points to the same location in memory . Also known as Copy by refrence

const massi = {
    flavour : 'meethi',
    rate : 10,
    quantity : '100ml',
    // other : function function1(){
    //     console.log('Hello  Longhand method notation');
    // },
    other(){
        console.log('Hello Shorthand method notation');
    }
};

console.log(massi === lassi); // This will give false because they are not refrencing to the same location in memory

console.log(bassi === lassi);

// const flavour = lassi.flavour;
const { flavour , rate } = lassi;// Destructuring an object 
console.log(flavour); // So the Destruction shortcut took the flavour out of the lassi and saved it in the lassi variable
console.log(rate);

const jassi = {
    // flavour : flavour// This will take whatever is inside flavour variable and will substitute it here
    flavour // This will do same thing 
}
console.log(jassi);
massi.other();