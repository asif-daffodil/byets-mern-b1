const time = document.getElementById("time");
const day = document.getElementById("day");
const week = document.getElementById("week");
const changeBg = document.getElementById("change-bg");

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

daysOfWeek.forEach((dayName) => {
    const div = document.createElement("div");
    div.className = "text-center text-sm border rounded p-1"; 
    div.innerText = dayName;
    week.appendChild(div);
})

const updateTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const d = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formatedHours = hours % 12 || 12;
    time.innerText = `${formatedHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
    day.innerText = `${d.toString().padStart(2, '0')} ${month} ${year}`;
    week.children[date.getDay()].classList.add("bg-blue-500", "text-white", "font-bold");
}

updateTime();
setInterval(updateTime, 1000);

const changeBgColor = () => {
    const hexNumber = "0123456789ABCDEF";
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
        newColor += hexNumber[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = newColor;
}
changeBgColor();

changeBg.addEventListener("click", changeBgColor);