const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return "Tidak bisa dibagi dengan nol";
        }
    }
};


console.log(calculator.add(10, 5));      
console.log(calculator.subtract(10, 5)); 
console.log(calculator.multiply(10, 5)); 
console.log(calculator.divide(10, 5));   
console.log(calculator.divide(10, 0));   
