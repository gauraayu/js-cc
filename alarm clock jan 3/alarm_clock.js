let alarm =()=> {
    let show = document.querySelector("#display")
    // jb b input tag aye value lena h 
    let inp = document.querySelector("#inp").value;
    setInterval(()=>{
        let time = new Date()
        // double digit m krne k lie tostring() bhi use kra h 
        // padstart=agr uski value 1 h toh 0 krdo aur uske age o lgado
        // padStart(2, "0")=atleast 2 digit honi chchahie agr 1 h toh usk pehele 0 ajaye 
        let alarmtime = `${time.getHours().toString().padStart(2, "0")}
        :
        ${time.getMinutes().toString().padStart(2, "0")}`
        //19:1
        if ( alarmtime==inp) {
            show.innerHTML = "alarm is ringing"
            document.querySelector("#aud").play()
            setTimeout(()=>{
                document.querySelector("#aud").pause()
                clearInterval(inter)
            },7000)
        }
        else {
            show.innerHTML = "alarm is set";
        }
    }
        , 1000);
}
