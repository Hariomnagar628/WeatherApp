const API_KEY =`a92b838ede22ac05126430c0f1153c5d`;
const weather = document.querySelector("#weather");
const search = document.querySelector("#search");
const form = document.querySelector("form");
// const img_url = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; 

const getweather = async(city)=>{
    weather.innerHTML=`<h2>Loding...</h2>`
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const responce = await fetch(url);  
    const data = await responce.json();
    return showeather(data); 

 
 }

const showeather = (data) =>
{  
  if(data.cod=="404")  
  { 
    weather.innerHTML = `<h2>City Not Found</h2>` 
    return;
  }
  const time = data.sys.sunrise;
  const date = new Date(time*1000);
  const hour = date.getHours();
  const minut = date.getMinutes();
  const second = date.getSeconds();
   weather.innerHTML = `<div>    
   <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
</div>
<div>
  <h2>${data.main.temp}°C</h2>
  <h4>${data.weather[0].main}</h4>
  <h4>Sun Rice - ${hour +":"+ minut+":"+ second}</h4>
    <h4>humidity: ${data.main.humidity}%</h4>  
    <h4>Wind Speed: ${data.wind.speed}km/h</h4>  
</div>`
}

form.addEventListener("submit",function(event){
    getweather(search.value);
    event.preventDefault();
})