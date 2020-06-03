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