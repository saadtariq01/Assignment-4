
function checkWeather(){

    const val1=document.querySelector(".city");
    const w1=val1.value;
    
    const opt1=document.querySelector(".result");
    
    if(w1=="lahore" || w1=="Lahore"){
        const prg=document.createElement("h1");
        prg.innerHTML="The Weather of Lahore  is 42C ,Sunny";
        opt1.appendChild(prg);} 
        
        else if (w1=="Islamabad" || w1=="islamabad"){    
            const prg=document.createElement("h1");
            prg.innerHTML="The Weather of Islamabad  is 36C ,Sunny";
            opt1.appendChild(prg);}
            
            
        else if(w1=="Karachi" || w1=="karachi") {
                const prg=document.createElement("h1");
                prg.innerHTML="The Weather of Karachi is 48C ,Sunny";
                opt1.appendChild(prg);
    
            }
            else {
    
                const prg=document.createElement("h1");
                prg.innerHTML="Enter Spellings Correctly";
                opt1.appendChild(prg);
            } 
    }
    