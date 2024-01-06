// Задание1

let users = {} 
for(let i = 1; i <= 5; i++) {
    let name = prompt('Введите имя');
    let age = +prompt('Введите Возраст');
    users[i] = {
        name: name,
        age: age
    }
}
for(let key in users) {
    console.log(`Пользователь ${key}`);
    for(let newKey in users[key]){
        console.log(newKey == 'name' ? `Ваше имя ${users[key][newKey]}`: `Ваш возрост ${users[key][newKey]}`);
    }
}
console.log(users);

// Задание2

function receipt() {
    const arrayReceipt = [{
        'Lavash': {
            info: 'Big Cheese',
            price: 15000
        }, 'Hot-dog': {
            info: 'mini',
            price: 8500
        }, 'Cola': {
            info: '1.5 L',
            price: 9000
        }
    }, {
        'Milk': {
            info: '1 L',
            price: 8500
        },
        'Sugar': {
            info: '1 kg',
            price: 7000
        }
    }, {
        'Cola': {
            info: '1 L',
            price: 6500
        },
        'Fanta': {
            info: '1.5 L',
            price: 9000
        },
        'Lipton': {
            info: '1.2 L',
            price: 5000
        }, 
        'Nestle': {
            info: '10 L',
            price: 8500
        }
    }]
    const count = Math.floor(Math.random() * arrayReceipt.length)
    return arrayReceipt[count]
}

let cart = receipt();
console.log(cart);

let i = 9000;
let menu = 'Вы заказали ';
for(let key in cart) {
    menu = menu + `${key}`;
    for(let newKey in cart[key]) {
        menu = newKey == 'info' ? menu + ` ${cart[key][newKey]}, ` : menu + '';
        i = newKey == 'price' ? i + cart[key][newKey] : i;
    }
}
console.log(`${menu} | Общая стоимость ${i} сумм с доставкой (9000)`);