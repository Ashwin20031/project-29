const questions=[
    "what is your name",
    "what is your hobbies",
    "what is you favorite movie"
]



function accept(){

    const input=document.querySelector("input").value;
    let present = false;
    
    for(let i =0 ;i < questions.length ; i++){
        if(questions[i]==input) present=true;
    }
    
    const container=document.querySelector(".askme");
    if(present){
        container.style.borderColor="green"
    }
    else{
        container.style.borderColor="red"
    }
    
}

function decline(){
    
    const input=document.querySelector("input");
    input.value="";
    const container=document.querySelector(".askme");
    container.style.borderColor="transparent"
    
}