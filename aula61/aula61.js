function* geradora1() {
    yield 'Valor 1 ';
    yield 'Valor 2 ';
    yield 'Valor 3 ';
}

function* geradora2() {
    let i = 0

    while(true) {
        yield 1;
        i++;
    }
}
