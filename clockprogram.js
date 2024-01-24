function starttime(){
    let date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();

    document.getElementById('hourshand').style.transform="rotate("+hours*30+Math.round(minutes/12)+"deg)"
    document.getElementById('minuteshand').style.transform="rotate("+minutes*6+"deg)"
    document.getElementById('secondshand').style.transform="rotate("+seconds*6+"deg)"

    let ampm=hours>12?'pm':"am";
    hours=hours>12?hours%12:hours;
    hours=format(hours)
    minutes=format(minutes)
    seconds=format(seconds)
    console.log(`${hours}:${minutes}:${seconds} ${ampm}`);
}
function format(time){
    time=time.toString();
    return time.length<2?`0${time}`:`${time}`
}
let timer1=setInterval(starttime,1000);
// clearInterval(timer1);