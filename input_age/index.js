let input = document.querySelector("#age");

let button = document.querySelector("#send");

let save = document.querySelector(".save");

function sendAge() {
    
    let saveAge = document.createElement("div");

    saveAge.innerHTML = input.value;

    save.append(saveAge);

    input.value = "";
}



