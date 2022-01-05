var k = document.querySelector(".kepiting");
var l = document.querySelector(".lobster");
var a = document.querySelector(".a");
var b = document.querySelector(".b");
var jumlahUang = document.querySelector(".uang");
var tampilProduk = document.querySelector(".produk");
var ambil = document.querySelector(".ambil");

var Uang = 0;
var produkOutput = "none";

function tampilkan(){
    jumlahUang.innerHTML = Uang;
    tampilProduk.innerHTML = produkOutput;
}

tampilkan();

a.addEventListener('click', function(){
    if(Uang === 0){
        Uang = 50000;
        produkOutput = "none";
    }
    else if(Uang === 50000){
        Uang = 100000;
        produkOutput = "none";
    }
    else if(Uang === 100000){
        Uang = 150000;
        produkOutput = "none";
    }
    else if(Uang === 150000){
        Uang = 200000;
        produkOutput = "none";
    }
    else if(Uang === 200000){
        Uang = 200000;
        produkOutput = 50000;
        a.setAttribute('disabled', 'disabled');
        b.setAttribute('disabled', 'disabled');
        k.setAttribute('disabled', 'disabled');
        l.setAttribute('disabled', 'disabled');
    }
    tampilkan();
});
b.addEventListener('click', function(){
    if(Uang === 0){
        Uang = 100000;
        produkOutput = "none";
    }
    else if(Uang === 50000){
        Uang = 150000;
        produkOutput = "none";
    }
    else if(Uang === 100000){
        Uang = 200000;
        produkOutput = "none";
    }
    else if(Uang === 150000){
        Uang = 200000;
        produkOutput = 50000;
    }
    else if(Uang === 200000){
        Uang = 200000;
        produkOutput = 100000;
        a.setAttribute('disabled', 'disabled');
        b.setAttribute('disabled', 'disabled');
        k.setAttribute('disabled', 'disabled');
        l.setAttribute('disabled', 'disabled');
    }
    tampilkan();
})

k.addEventListener('click', function(){
    if(Uang === 0){
        Uang = 0
        produkOutput = "none";
    }
    else if(Uang === 50000){
        Uang = 50000
        produkOutput = "none";
    }
    else if(Uang === 100000){
        Uang = 0;
        produkOutput = "Kepiting";
        a.setAttribute('disabled', 'disabled');
        b.setAttribute('disabled', 'disabled');
        k.setAttribute('disabled', 'disabled');
        l.setAttribute('disabled', 'disabled');
    }
    else if(Uang === 150000){
        Uang = 0;
        produkOutput = ["Kepiting", 50000];
        a.setAttribute('disabled', 'disabled');
        b.setAttribute('disabled', 'disabled');
        k.setAttribute('disabled', 'disabled');
        l.setAttribute('disabled', 'disabled');
    }
    else if(Uang === 200000){
        Uang = 0;
        produkOutput = ["Kepiting", 100000];
        a.setAttribute('disabled', 'disabled');
        b.setAttribute('disabled', 'disabled');
        k.setAttribute('disabled', 'disabled');
        l.setAttribute('disabled', 'disabled');
    }
    tampilkan();
})

l.addEventListener('click', function(){
    if(Uang === 0){
        Uang = 0
        produkOutput = "none";
    }
    else if(Uang === 50000){
        Uang = 50000
        produkOutput = "none";
    }
    else if(Uang === 100000){
        Uang = 100000;
        produkOutput = "none";
    }
    else if(Uang === 150000){
        Uang = 150000;
        produkOutput = "none"
    }
    else if(Uang === 200000){
        Uang = 0;
        produkOutput = "Lobster";
        a.setAttribute('disabled', 'disabled');
        b.setAttribute('disabled', 'disabled');
        k.setAttribute('disabled', 'disabled');
        l.setAttribute('disabled', 'disabled');
    }
    tampilkan();
})

ambil.addEventListener("click", function(){
    produkOutput = "none";
    tampilkan();
    a.removeAttribute('disabled', 'disabled');
    b.removeAttribute('disabled', 'disabled');
    k.removeAttribute('disabled', 'disabled');
    l.removeAttribute('disabled', 'disabled');
}) 