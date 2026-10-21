function countdowntimer(){
    const timer = document.getElementById("count");
    const current = new Date().getTime();
    const target = new Date("2027-05-20T00:00:00").getTime();
    const remaining = target - current;
    const days = Math.floor(remaining/(1000*60*60*24));
    const hours = Math.floor((remaining/(1000*60*60))%24);
    const minutes = Math.floor((remaining/(1000*60))%60);
    const seconds = Math.floor((remaining/1000)%60);
    timer.innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds left`
}
const timer = document.getElementById("count");
setInterval(countdowntimer, 1000);

const style = document.createElement("style");

style.textContent = `
    body {
        text-align: center;
        margin-top: 250px;
        font-family: Arial, sans-serif;
        background-color: black;
        color: whitesmoke;
    }

    .comm {
        font-size: 30px;
        margin: 20px;
    }

    #count {
        color: blue;
    }
`;

document.head.appendChild(style);
