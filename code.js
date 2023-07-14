document.querySelector(".clock .hours").innerHTML = (
    new Array(24).fill(0).map((n, i)=>{
        return`
        <div>
            ${i<10 ? "0"+i : i}
        </div>
        `;
    }).join("")
);

document.querySelector(".clock .minutes").innerHTML = (
    new Array(60).fill(0).map((n, i)=>{
        return`
        <div>
            ${i<10 ? "0"+i : i}
        </div>
        `;
    }).join("")
);

document.querySelector(".clock .seconds").innerHTML = (
    new Array(60).fill(0).map((n, i)=>{
        return`
        <div>
            ${i<10 ? "0"+i : i}
        </div>
        `;
    }).join("")
);

let time = new Date();
let prevHours   = time.getHours() * 100,
    prevMinutes = time.getMinutes() * 100,
    prevSeconds = time.getSeconds() * 100;

document.querySelector(".clock .hours div").style.marginTop     = `-${prevHours}px`;
document.querySelector(".clock .minutes div").style.marginTop   = `-${prevMinutes}px`;
document.querySelector(".clock .seconds div").style.marginTop   = `-${prevSeconds}px`;

function updateClock(){
    let time        = new Date();
    let hours   = time.getHours() * 100,
        minutes = time.getMinutes() * 100,
        seconds = time.getSeconds() * 100;

    if(prevHours !== hours){
        prevHours = hours;
        document.querySelector(".clock .hours div").style.marginTop = `-${hours}px`;
        document.querySelector(".clock .hours").classList.add("animate");
        setTimeout(function(){
            document.querySelector(".clock .hours").classList.remove("animate");
        }, 666);
    }

    if(prevMinutes !== minutes){
        prevMinutes = minutes;
        document.querySelector(".clock .minutes div").style.marginTop = `-${minutes}px`;
        document.querySelector(".clock .minutes").classList.add("animate");
        setTimeout(function(){
            document.querySelector(".clock .minutes").classList.remove("animate");
        }, 666);
    }

    if(prevSeconds !== seconds){
        prevSeconds = seconds;
        document.querySelector(".clock .seconds div").style.marginTop = `-${seconds}px`;
        document.querySelector(".clock .seconds").classList.add("animate");
        setTimeout(function(){
            document.querySelector(".clock .seconds").classList.remove("animate");
        }, 666);
    }
}

setInterval(updateClock, 1);