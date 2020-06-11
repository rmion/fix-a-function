function chopHead(list) {
    return list.shift();
}

function newHead(list, item) {
    return list.unshift(item);
}

function mean(list) {
    return list.reduce((i, acc) => acc + i)/list.length;
}

function oddsOnly(numbers) {
    return numbers.filter(n => n % 2);
}

function evensOnly(numbers) {
    return numbers.filter(n => n % 2 == 0);
}

function negatives(numbers) {
    return numbers.map(n => -n);
}

function newElement(tag) {
    return document.createElement(tag);
}

function colorText(DOMNode, color) {
    DOMNode.setAttribute('color', color);
}

function eventPlanner(DOMNode, e, fn) {
    DOMNode.addEventListener(e, fn);
}

function predictable(number) {
    return (Math.ceil(Math.random()) * number);
}

function bond() {
    return Object.values({0:0,1:0,2:7}).join("");
}

function rihanna() {
    return "b" + "a" + +"ana" + "as";
}

function economics($) {
    return Array(...$);
}

function factorial(x) {
    return x <= 0 ? 1 : x * factorial(x - 1)
}

function coercion() {
    return Boolean("0" == true);
}

function leaky(list) {
    for (i=0;i<list.length;i++) {
        console.log(window.i)
    }
}