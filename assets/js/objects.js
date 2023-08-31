/*const customer = {
    vorName: 'Oksana',
    firstName: 'Savchenko',
    e_mail: 'oksana_98@gmail.com',
    password: '123456',
    telefonNummer: '+380961867867',
    adres: 'Centralna 12 haus 2 flat 35'
    
} 
const customerAdres = customer.adres;
console.log('adres :>>', customerAdres);

customer.telefonNummer = '+380997894567'
console.log('customer :>>', customer);

//Не зрозуміла, куди вписати умову. Я розумію як, але не розумію, де саме це писати: в об.єкті чи окремо(((
customer.isMale = 'male';
console.log('customer :>>', customer)

delete customer.adres;
console.log('customer :>>', customer);

let customer1 = Object.assign({}, customer);
console.log(customer1);

let customer2 = {...customer};
console.log(customer2);

const cat = {
name: 'Murka',
color: "black",
isMale: false,
isFurnitureDamage: true,
}

for(key in cat){
    console.log('key >>', key)
}*/

function Book(author, name, yearOfPublication, publication, price){
    this.author = author;
    this.name = name;
    this.yearOfPublication = yearOfPublication;
    this.publication = publication;
    this.price = price;
    this.ageOfBook = function () {
    return 2023 - this.yearOfPublication;
}

this.chagePrice = function (newPrice) {
    this.price = newPrice;
}
}

const book1 = new Book('Shevchenko', "Taras", '1991', "Kyiv 'DrykandKo'", '250');
console.log(book1)

const ageOfBook = book1.ageOfBook();
console.log(ageOfBook);

book1.chagePrice(345);
