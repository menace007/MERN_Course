function timing(){
    const timer = document.getElementById("root");
    const now = new Date();
    const indianTime = now.toLocaleTimeString();
    timer.innerHTML = indianTime;
}

const timer = document.getElementById("root");
setInterval(timing, 1000);
timer.style.fontSize = "200px";
timer.style.display = "flex";
timer.style.height = "100vh";
timer.style.justifyContent = "center";
timer.style.alignItems = "center";

