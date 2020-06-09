$(document).ready(()=>{
    $.getJSON("https://jsonplaceholder.typicode.com/todos",function(data){
        var output='';
        $.each(data,function(key,value){
            if(value.completed==false){
                output += `<div class="border-bottom" style="padding:10px;"><input type="checkbox" value=false> `  +  value.title  +  `</div>`; 
            }
            else{
                output += `<div class="border-bottom" style="padding:10px;"><input type="checkbox" checked disabled> `  +  value.title  +  '</div>';  
            }
                
        });
        $("form").append(output);
        



    });
    

});
let counter=new Promise((resolve,reject) => {
    var ctr=0;

    $('form').change((e)=>{
        
        var bool= e.target;
        console.log(bool);
        if(bool.checked==true){
            ctr=ctr+1;
            console.log(ctr);
            if (ctr==5){
                resolve("Congrats.5 Tasks have been successfully completed!!!!");
        }
        }
        else{
            ctr=ctr-1
            console.log(ctr);
        }
        
    })
    
});


counter.then((e)=>{
    alert(e);
});
