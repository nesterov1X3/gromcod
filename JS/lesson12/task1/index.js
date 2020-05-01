const calc = expresion => {
    const [a, operator, b] = expresion.split(' ');
    let result;

    switch (operator) {
        case '+':
            result = +a + +b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = +a * +b;
            break;
        case '/':
            result = +a / +b;
            break;
    };

    return expresion + ' = ' + result;
};
