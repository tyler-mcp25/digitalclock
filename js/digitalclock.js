// display the current time
function currentTime() {

    let theTime = new Date();

    let hours = theTime.getHours();
    let min = theTime.getMinutes();
    let sec = theTime.getSeconds();

    let theDay = theTime.getDay();
    const daysofweek = ['SUN','MON','TUE','WED','THU','FRI','SAT'];

    let ampm = "AM"
    if (hours>=12) {
        ampm = 'PM';
    }

    if (hours>12) {
        hours %= 12;
    }

    if (hours<10) {
        hours = "0"+hours;
    }

    if (min<10) {
        min = "0"+min;
    }

    if (sec<10) {
        sec = "0"+min;
    }

    // display in html page
    document.getElementById('day').innerHTML = daysofweek[theDay];
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('min').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;
    document.getElementById('ampm').innerHTML = ampm;

    document.getElementById('cyear').innerHTML = theTime.getFullYear()

    let evenSeconds = sec % 2;

    if (evenSeconds === 0) {
        document.getElementById("c1").style.color = "red";
        document.getElementById("c2").style.color = "red";
    }
    else {
        document.getElementById("c1").style.color = "white";
        document.getElementById("c2").style.color = "white";
    }



}

// set interval for time
setInterval(() => {
    currentTime();
}, 1000);

window.onload = currentTime