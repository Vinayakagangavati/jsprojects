let button=document.getElementById("btn");
button.addEventListener("click",weather);  
function weather(){
    let city=document.getElementById("text").value;
    if(city.value!=""){
    let City=city[0].toUpperCase()+city.slice(1);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2a5e107f502c3e3c1a4292c5e2d2465b&units=metric`;
    let a=fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
    console.log(data.main.temp,data);
    let det=document.getElementById("details");
    let know=document.getElementById("know");
    det.style.visibility="visible";
    know.style.visibility="visible";
    let city=document.getElementById('city');
    let temp=document.getElementById('temp');
    let mxtemp=document.getElementById('mxtemp');
    let mntemp=document.getElementById('mntemp');
    city.textContent=`City : ${City}`;
    temp.textContent=`Temperature : ${data.main.temp}`;
    mxtemp.textContent=`Maximum Temperature : ${data.main.temp_max}`;
    mntemp.textContent=`Minimum Temperature : ${data.main.temp_min}`;

    know.addEventListener("click",()=>{
        let last=document.getElementById("last");
        know.style.visibility="hidden";
        last.style.visibility="visible";
        let Sunrise=document.getElementById("Sunrise");
        let Sunset=document.getElementById("Sunset");
        function millisecondsToTime(ms) {
            const timestamp = ms;
            const date = new Date(timestamp*1000);
            console.log(date.toLocaleString('en-US')); 
            return date.toLocaleString('en-US');
        }
        let sunrmilli = `${data.sys.sunrise}`;
        let sunrval= millisecondsToTime(sunrmilli);
        let sunsmilli = `${data.sys.sunset}`;
        let sunsval= millisecondsToTime(sunsmilli);
        Sunrise.innerText=`${sunrval}`;
        Sunset.innerText=`${sunsval}`;
        let long=document.getElementById("long");
        long.innerText=`${data.coord.lon}`;
        let lat=document.getElementById("lat");
        lat.innerText=`${data.coord.lat}`;
        let desc=document.getElementById("desc");
        desc.innerText=`${data.weather[0].description}`;
        let reset=document.getElementById("reset");
        reset.style.visibility="visible";
        reset.addEventListener("click",()=>{
            text.value=" ";
            det.style.visibility="hidden";
            last.style.visibility="hidden";
            reset.style.visibility="hidden"
        })
   })
}).catch((value)=>{
    console.log(value.message);
    let det=document.getElementById("details");
    det.style.visibility="hidden";
    know.style.visibility="hidden";
    alert("Enter a Valid Location");
})
}
 else if(city.value==" "){
    alert("Please Enter the Location...")
 }
}