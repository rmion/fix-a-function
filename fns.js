function double(n) {
    return n + n;
}

function today() {
    return new Date();
}

function bigger(a,b) {
    return Math.max(a,b);
}

function loop(list) {
    for (i=0;i<list.length;i++) {
        console.log(list[i])
    }
}

function sayHello() {
    return "Hello";
}

function sum(a,b,c) {
    return a + b + c;
}

function loop(list) {
    list.forEach(i => list[i]);
}

function equals() {
    return 3 == '3';
}

function strictEquals() {
    return 3 === 3;
}

function isObj(obj) {
    return typeof obj == "object";
}