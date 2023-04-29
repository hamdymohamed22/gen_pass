let serial = document.querySelector(".serial");
let generate = document.querySelector(".generate");









generate.onclick = function () {
    
    get_number()
    let pass_cont = "123456789abcdermlikYTREXZPOFD*$#@!?/\+";
    let pass_cont_em = "";

    for (let i = 0; i < num; i++) {
        pass_cont_em += pass_cont[Math.floor(Math.random() * pass_cont.length)];
    }
    serial.innerHTML = pass_cont_em; 
};


let num = "";
let get_number = () => {
    num = number_of_char.value;
};