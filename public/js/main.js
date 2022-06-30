const cityName=document.getElementById('cityName');
const submitBtn= document.getElementById('submitBtn');
const city_name=document.getElementById('city_name');
const datahide=document.querySelector('.middle_layer');
const temp_real_val=document.getElementById('temp_real_val');


const getInfo= async (e)=>{
    e.preventDefault();
    let cityVal=cityName.value;
    if (cityVal=="") 
    {
      city_name.innerText='please enter your city name'    
    }else{
       try {
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=1cb6532aea3c298a830a71380eace21ehttps://api.openweathermap.org/data/2.5/weather?q=bengaluru&units=metric&appid=1cb6532aea3c298a830a71380eace21e`
        let response=await fetch(url) ;
        let data= await response.json();
        let arrData=[data]
        city_name.innerText=`${arrData[0].name},${arrData[0].main.temp},${arrData[0].sys.country}`;
        temp_real_val.innerText = arrData[0].main.temp;    
       } catch  {
           city_name.innerText='Please enter a valid city name'
       }
    }
}
submitBtn.addEventListener('click',getInfo);
