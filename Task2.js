
function checkOdd(){
    console.log("data entered");
    let val1=document.querySelector(".inp");
    let valInt=val1.value;
    let value1=parseInt(valInt,10);
    
    
    let val2=document.querySelector(".inp2");
    let valInt2=val2.value;
    let value2=parseInt(valInt2,10);
    console.log("Starting Value: "+value1);
    console.log("End Value: "+value2);
    
const ele1=value1;
const ele2=value2;


    if(value1>value2){const opt1=document.querySelector(".output");
        const prg=document.createElement("h1");
        prg.innerHTML="Value 1 should be less than value 2 ";
        opt1.appendChild(prg);}
        else{
    var arr=[];
    let x=0;
    for(let i=value1;i<=value2;i++){
       if(value1%2==1){ arr[x]=value1;
        x+=1;  } 
       value1+=1; }
        }


    console.log(arr);

    if(ele1<ele2){
arr.filter((element) => {
    const opt1=document.querySelector(".output");
    const prg=document.createElement("p");
    prg.innerHTML="Odd Value: "+element;
    opt1.appendChild(prg);

})
    }
    }
