const ilk = document.getElementById("ilk");
const iki = document.getElementById("iki");
const funksiya = document.getElementById("funksiya");

const sonuc = document.getElementById("sonuc");
const problem = document.getElementById("problem");

    
    function aaa(){
        document.getElementById("container-iki").style.display = "none"
        document.getElementById("container").style.display = "block"
        
    }


    function aaaa(){
        document.getElementById("container").style.display = "none"
        document.getElementById("container-iki").style.display = "block"
        
    }

function yusif() {

    if ((ilk.value == "" || iki.value == "") && funksiya.value == "null") {
        problem.textContent = "ədədi və funksiyanı girin";
        problem.style.color = "orange";
        sonuc.textContent = "";
        return;
    }

    else if (ilk.value == "" || iki.value == "") {
        problem.textContent = "ədədi girin";
        problem.style.color = "orange";
        sonuc.textContent = "";
        return;
    }

    else if (funksiya.value == "null") {
        problem.textContent = "funksiyanı girin";
        problem.style.color = "orange";
        sonuc.textContent = "";
        return;
    }

    problem.textContent = "";

    let a = Number(ilk.value);
    let b = Number(iki.value);
    let cavab;
    function ebob(a, b) {
    while (b !== 0) {
        let qalıq = a % b;
        a = b;
        b = qalıq;
    }
    return a;
}

function ekob(a, b) {
    return Math.abs(a * b) / ebob(a, b);
}



    if (funksiya.value == "+") {
        cavab = a + b;
    }
    else if (funksiya.value == "-") {
        cavab = a - b;
    }
    else if (funksiya.value == "*") {
        cavab = a * b;
    }
    else if (funksiya.value == "/") {
        cavab = a / b;
    }
    else if (funksiya.value == "%") {
        cavab = a % b;
    }
    else if (funksiya.value == "**") {
        cavab = a ** b;
    }
    else if(funksiya.value == "eebob"){
        cavab = ebob(a,b) 
    }
    else if(funksiya.value == "eekob"){
        cavab = ekob(a,b)
    }

    sonuc.textContent = "cavab " + cavab;
    sonuc.style.color = "green";
}
const funksiyaiki = document.getElementById("birfunksiya");
const eded  = document.getElementById("sah");
const answer = document.getElementById("sonuc20");

function yusif1(){
    let x = Number(eded.value);
    if(funksiyaiki.value == "sqrt"){
        answer.textContent="cevab "+Math.sqrt(x) ;
        answer.style.color = "green"
       }
    else if(funksiyaiki.value == "sqrtkub"){
        answer.textContent="cevab "+Math.cbrt(x) ;
        answer.style.color = "green"
    } 
    else if(funksiyaiki.value == "raund"){
        answer.textContent="cevab "+Math.round(x) ;
        answer.style.color = "green"
    }  
    else if(funksiyaiki.value == "raund"){
        answer.textContent="cevab "+Math.round(x) ;
        answer.style.color = "green"
    } 
     else if(funksiyaiki.value == "sin"){
        answer.textContent="cevab "+ Math.sin(x);
        answer.style.color = "green"
    }  
    else if(funksiyaiki.value == "cos"){
        answer.textContent="cevab "+ Math.cos(x);
        answer.style.color = "green"
    }  
    else if(funksiyaiki.value == "tan"){
        answer.textContent="cevab "+ Math.tan(x);
        answer.style.color = "green"
    }  
    else if(funksiyaiki.value == "modul"){
        answer.textContent="cevab "+ Math.abs(x);
        answer.style.color = "green"
    }  
    else if(funksiyaiki.value == "log"){
        answer.textContent="cevab "+ Math.log(x);
        answer.style.color = "green"
    }  
    else if(funksiyaiki.value == "log10"){
        answer.textContent="cevab "+ Math.log10(x);
        answer.style.color = "green"
    }  
    else if(funksiyaiki.value == "log2"){
        answer.textContent="cevab "+ Math.log2(x);
        answer.style.color = "green"
    }  
    else if(funksiyaiki.value == "exp"){
        answer.textContent="cevab "+ Math.exp(x);
        answer.style.color = "green";
    }  
    else if(funksiyaiki.value == "!" && x>0){
        
        let y = 1 
        for(let i = 1 ; i<=x;++i){
            y *= i;

        }
        answer.textContent="cevab "+ y ;
        answer.style.color = "green";
    }  
    else if(funksiyaiki.value == "cemard"){
    let y = 0;

    for(let i = 1; i <= x; ++i){
        y += i;
    }

    answer.textContent = "cevab " + y;
    answer.style.color = "green";
}
}

function restart(){
    location.reload();
}
