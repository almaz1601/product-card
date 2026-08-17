//task 3

const user = {
  myName: 'Almaz',
  mySurname: 'Faizrakhmanov',
  myJob: 'Electrical networks',
  myWork: 'Lineman',
  myAge: 40,
  myCountry: 'Russia',
  myCity: ' Kazan'

}
console.log(user)

//task 4

const car = {
  make: 'toyota',
  model: 'esquire',
  year: '2016',
  color: 'black',
  transmission: 'automatic',
}

console.log(car)

//task 5

function reachMaxSpeed(car) {
  if (car.hasOwnProperty("maxSpeed"))
    return;

  car.maxSpeed = 180;
}

//task 6

function showCarInfo(car, property) {
  console.log(car[property]);
}

showCarInfo(car, 'make');
showCarInfo(car, 'model');

//task 7

const products = [
  'Water',
  'Milk',
  'Eggs',
  'Cheese',
  'Meat',
];

console.log(products);

//task 8

const books = [
  {
    title: 'Евгений Онегин',
    author: "Александр Пушкин",
    year: 1830,
    coverColor: "Красный",
    genre: "Роман в стихах",
  },
  {
    title: "Горе от ума",
    author: "Алексанр Грибоедов",
    year: 1824,
    coverColor: "Чёрный",
    genre: "Комедия",
  },
  {
    title: "Мцыри",
    author: "Михаил Лермонтов",
    year: 1839,
    coverColor: "Синий",
    genre: "Романтическая поэма",
  },
  {
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    year: 1866,
    coverColor: "Коричневый",
    genre: " Роман",
  },
  {
    title: "Властелин колец",
    author: "Джон Рональд Руэл Толкин",
    year: 1954,
    coverColor: "Зелёный",
    genre: "Фэнтези"
  }
];

books.push({
  title: "Мертвые души",
  author: "Николай Гоголь",
  year: 1842,
  coverColor: "Золотой",
  genre: "Поэма"
});

console.log(books);


//task 9

const booksharryPushkinBooks = [
  {
    name: "Евгений Онегин",
    year: 1830
  },
  {
    name: "Капитанская дочка",
    year: 1836
  },
  {
    name: "Дубровский",
    year: 1833
  },
  {
    name: "Руслан и Людмила",
    year: 1820
  },
  {
    name: "Медный всадник",
    year: 1833
  }
];

const allBooks = [...books, ...booksharryPushkinBooks]

console.log(allBooks);

//task 10

function addIsRare(allbooks) {
  allbooks.map(book => {
    if (book.year > 1820) {
      book.isRare = true;
    } else {
      book.isRare = false;
    }
  });
}


