function showWeather(city,
  temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}

showWeather('Kazan', 25);


const lightSpeed = 300000000

function checkSpeed(speed) {
  if (speed > lightSpeed) {
    console.log('Cверхсветовая скорость')
  } else if (speed < lightSpeed) {
    console.log('Субсветовая скорость')
  } else {
    console.log('Скорость света')
  }
}
checkSpeed(301101000)
checkSpeed(295292450)
checkSpeed(300000000)

let product = 'Laptop';
let price = 1500;

function buyProduct(product) {
  if (product >= price) {
    console.log(`${"Laptop"} оплачен. Спасибо за покупку!`)
  } else {
    console.log(`У вас не хватает денежных средств ${price - product}$, пополните баланс`)
  }
}

buyProduct(1500)
buyProduct(1400)


function sayHello() {
  console.log("Привет!")
}

sayHello();

const pi = 3.14;
let myName = "Almaz";
let age = 40;