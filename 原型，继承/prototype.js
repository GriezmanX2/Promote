let animal = {
    eats: true,
};

let rabbit = {
    jumps: true,
};

// rabbit.__proto__ = animal;
//  推荐新写法
Object.setPrototypeOf(rabbit,animal)

console.log('rabbit.eats',rabbit.eats);
console.log('rabbit',rabbit)