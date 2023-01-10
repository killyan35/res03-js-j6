
let intervalId = setInterval(function(){
    
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let secondes = date.getSeconds();
    
    window.alert(`Il est ${hours} heures, ${minutes} minutes, et ${secondes} secondes`)
    
}, 4200); // dans une seconde
