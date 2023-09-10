const Day  = document.querySelector("#days");
const hrs  = document.querySelector("#hours");
const Mints  = document.querySelector("#minutes");
const Secounds = document.querySelector("#secounds");
console.log(Day);
console.log(hrs);
console.log(Mints);
console.log(Secounds);

function yearBegin(){
const  currentYear = new Date().getFullYear();
const newYear = new Date(`january1 ${currentYear + 1} 00:00:00`);
const currentdate = new Date()
const diff = newYear - currentdate ;
const day = Math.floor(diff/1000/60/60/24);
const hour = Math.floor((diff/1000/60/60)%24);
const min = Math.floor((diff/1000/60)%60);
const sec = Math.floor((diff/1000)%60);
 Day.innerHTML = day<10?"0" + day:day ;
 hrs.innerHTML = hour <10?"0" + hour:hour ;
 Mints.innerHTML = min <10?"0" + min:min ;  
 Secounds.innerHTML = sec <10?"0" + sec:sec ;  
 }
//console.log(day+" "+hour+" "+min+" "+sec);
setInterval(yearBegin , 1000);




