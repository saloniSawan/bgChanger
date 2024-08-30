

let btnStart = document.querySelector('#start')
let btnStop = document.querySelector('#stop')

let naam = document.getElementById("naam");

let names = ["Diya", "Saloni", "Sonali", "Salini", "Sonam", "Jiya"]


function randomValueGenerator(length) {
    return Math.floor(Math.random() * length)
}


function changeBackgroundColor() {
    let color = "";
    let color2 = "";
    let str = "0123456789abcdef"
    for (let i = 0; i < 6; i++) {
        let num = randomValueGenerator(str.length)
        let num2 = randomValueGenerator(str.length)
        color += str.charAt(num);
        color2 += str.charAt(num2)
    }
    document.body.style.background = `linear-gradient(to right,#${color},#${color2})`
}



function name() {
    // return names[0]
    let value = randomValueGenerator(names.length)
    let naam2 = names[value];
    naam.textContent = naam2;
}

function NameColorChange() {
    let nameColor = "";
    let str = "0123456789abcdef"
    for (let i = 0; i < 6; i++) {
        let num = randomValueGenerator(str.length)
        nameColor += str.charAt(num);
    }
    naam.style.color = `#${nameColor}`
}

function sabKuhcKaro() {
    changeBackgroundColor();
    name()
    NameColorChange();
}


let interval;
btnStart.addEventListener('click', () => {
    interval = setInterval(sabKuhcKaro, 1000)
})

btnStop.addEventListener('click', () => {
    clearInterval(interval)
})


console.log(name())
console.log(name())
