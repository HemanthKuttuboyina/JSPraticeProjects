
const clk = document.querySelector("#time")

setInterval(() => {
    let date = new Date
    clk.innerHTML = date.toLocaleTimeString();
}, 1000);