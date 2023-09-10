
const digitalCk = document.querySelector(".clock");
function workclock(){
     var actTime = new Date();
     var hrs = actTime.getHours();
     var min = actTime.getMinutes();
     var sec = actTime.getSeconds();
     var  text = "AM" 
    if( hrs > 12 ){
        hrs =hrs-12;
        text="PM"
    }else if(hrs === 0){
          hrs = 12;
          text = "AM"
    }
    hrs = hrs<10? "0"+ hrs :hrs;
    min = min<10? "0"+ min :min;
    sec = sec<10? "0"+ sec:sec;
   digitalCk.innerHTML =`${hrs}: ${min}: ${sec} PM`;
}
workclock()
setInterval(workclock,1000);

