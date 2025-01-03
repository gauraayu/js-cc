let date=new Date();
console.log(date.toLocaleString());//to make it in redable format we use local string
// let year=date.getFullYear();
// console.log(year);
// let month=date.getMonth();
// console.log(month);
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getMilliseconds());
let data=()=>{
    let day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let time=new Date();
  let ans=document.querySelector("#click2")
  
  ans.innerHTML=day[time.getDay()];
  ans.innerHTML=time.getFullYear();

}