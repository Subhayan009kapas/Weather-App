const apiKey="72f8438d24451e633e9d76a3cc041c6f";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let temp=document.querySelector(".temp");
let city=document.querySelector(".city");
let humidity=document.querySelector(".humidity-unit");
let wind_speed=document.querySelector(".wind-unit");

let search_btn=document.querySelector(" button");
let  input_place=document.querySelector(" input");
let weather_img=document.querySelector(".weather-icon");

async function  fun(){
          const response=await fetch(apiUrl+`${input_place.value}&appid=${apiKey}`);
          const data=await response.json();
          console.log(data);

          temp.innerHTML=Math.round(data.main.temp)+" °C"
        
          city.innerHTML=data.name;
          humidity.innerText=data.main.humidity+" %";
          wind_speed.innerHTML=data.wind.speed+" Km/h";

          if(data.weather[0].main=="Clear"){
                   weather_img.src="clear sky.png";


          }
          else if(data.weather[0].main=="Clouds"){
                    weather_img.src="new cloud.png";
          }
          else if(data.weather[0].main=="Rain"){
                    weather_img.src="rain_image.png";
          }
          else if(data.weather[0].main=="Drizzle"){
                    weather_img.src="drizzle.png";
          }
          else if(data.weather[0].main=="Mist"){
                    weather_img.src="Mist.png";

          }
          document.querySelector(".weather").style.display="block";
          document.querySelector(".details").style.display="flex";

          
}
search_btn.addEventListener("click",()=>{
          fun();
})