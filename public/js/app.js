console.log('hello')
const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const msg1 = document.querySelector('#msg-1')
const msg2 = document.querySelector('#msg-2')
const msg3 = document.querySelector('#msg-3')
const msg4 = document.querySelector('#msg-4')
const msg5 = document.querySelector('#msg-5')
const msg6 = document.querySelector('#msg-6')
const msg7 = document.querySelector('#msg-7')
const msg8 = document.querySelector('#msg-8')
const msg9 = document.querySelector('#msg-9')


weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    msg1.textContent='Loading...'
    msg2.textContent=''
    msg3.textContent=''
    msg4.textContent=''
    msg5.textContent=''
    msg6.textContent=''
    msg7.textContent=''
    msg8.textContent=''
    msg9.textContent=''

    const location = search.value
    fetch('/weather?address='+location).then((response)=>{
        console.log('hii')
    response.json().then((data)=>{
        console.log('data')
        console.log(data)
        if(data.error){
            msg1.textContent=data.error
        }
        else{
            msg1.textContent= 'location :'+ data.location
            msg2.textContent= 'temperature :'+data.temperature
            msg3.textContent= 'weather_condition:' + data.condition
            msg4.textContent = 'windspeed:'+data.windspeed
            msg5.textContent = 'wind_direction:'+data.wind_dir
            msg6.textContent = 'pressure:'+data.pressure
            msg7.textContent = 'precipitation:'+data.precipitation
            msg8.textContent = 'humidity:'+data.humidity
            msg9.textContent = 'Feelsliketemp:'+data.feelslike_c
            
        }
       
    })
})
    
})