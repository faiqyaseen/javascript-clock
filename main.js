console.log("Hello Clock");

function updateClock(){
    // Get the current date
    let currentTime = new Date();

    // Extract hour, minutes and seconds from date 
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    //  Pad 0 if hours, minutes or seconds less than 10 (single digit)
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
    currentHours = (currentHours < 10 ? "0" : "") + currentHours;

    //  Convert railway clock to AM/PM clock 
    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
    currentHours = (currentHours == 0) ? 12 : currentHours;

    //  Choose AM/PM as per the time of the day
    let timeOfDay = (currentHours < 12 ) ? "AM" : "PM";

    //  Prepare the time string from hours, minutes and seconds
    let currentTimeStr = currentHours + ":" + currentMinutes + ":" +  currentSeconds + " " + timeOfDay

    //  Insert the time string inside DOM
    document.getElementById('clock').innerHTML = currentTimeStr;
}