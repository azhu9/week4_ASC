let score = 0;

let true1 = document.querySelector("#t1");
let false1 = document.querySelector("#f1");
let answer1 = document.querySelector("#a1");
let answered1 = false;
true1.onclick = function(){
    answer1.innerHTML = "Your Answer: True";
    if (answered1 == false){
        score++;
    }
    answered1 = true;
}
false1.onclick = function(){
    answer1.innerHTML = "Your Answer: False";
    answered1 = true;
}

let true2 = document.querySelector("#t2");
let false2 = document.querySelector("#f2");
let answer2 = document.querySelector("#a2");
let answered2 = false;
true2.onclick = function(){
    answer2.innerHTML = "Your Answer: True";
    answered2 = true;
}
false2.onclick = function(){
    answer2.innerHTML = "Your Answer: False";
    if (answered2 == false){
        score++;
    }
    answered2 = true;
}

let true3 = document.querySelector("#t3");
let false3 = document.querySelector("#f3");
let answer3 = document.querySelector("#a3");
let answered3 = false;
true3.onclick = function(){
    answer3.innerHTML = "Your Answer: True";
    answered3 = true;
}
false3.onclick = function(){
    answer3.innerHTML = "Your Answer: False";
    if (answered3 == false){
        score++;
    }
    answered3 = true;
}

let true4 = document.querySelector("#t4");
let false4 = document.querySelector("#f4");
let answer4 = document.querySelector("#a4");
let answered4 = false;
true4.onclick = function(){
    answer4.innerHTML = "Your Answer: True";
    if (answered4 == false){
        score++;
    }
    answered4 = true;
}
false4.onclick = function(){
    answer4.innerHTML = "Your Answer: False";
    answered4 = true;
}


let submitRef = document.querySelector("#submit");
let scoreRef = document.querySelector("#score");

submitRef.onclick = function(){
    scoreRef.innerHTML = "Your Score: "+score;
}
