let user=document.getElementById('user');
let pwd = document.getElementById('pwd');

function validate(callback){
    
    if (user.value=="admin"){
        
        $("#users").html("")
    }
    else{
        $("#users").html("username is not valid")
        return false;
    }
    if(pwd.value=="12345"){
        $("#pwds").html("")
       
        callback();
    }
    else{
        $("#pwds").html("password is not valid")
        return false;
    }
    
}
 redirect = ()=>{
     
     $("form").attr("action","index.html");
 }

