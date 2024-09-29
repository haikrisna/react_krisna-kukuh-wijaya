// Nilai value dapat berubah dengan deklarasi menggunakan let

function swapValuesLet(a, b) {
    let value = a; 
    a = b;
    b = value;
    console.log("Let setelah swap: a =", a, ", b =", b);
}

swapValuesLet(5, 10);


// Swap menggunakan var memiliki function scope

function swapValuesVar(a, b) {
    var value = a; 
    a = b;
    b = value;
    console.log("Var setelah swap: a =", a, ", b =", b);
}

swapValuesVar(5, 10);

// Swap menggunakan Const 

function swapValuesConst(a, b) {
    const value = a; 
    a = b;
    b = value; 
    console.log("Var setelah swap: a =", a, ", b =", b);
}

swapValuesConst(5, 10);

// Deklarasi variabel menggunakan Let lebih di rekomendasikan dibandingkan menggunakan var. Alasannya karena Let memiliki deklarasi tertutup dalam suatu scope, sehingga membuatnya lebih aman.