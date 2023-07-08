function clickBtn(){
    let msg
    let uname=document.getElementById('inp').value
    let password=document.getElementById('pass').value
    btn.style.transform ="scale(0.7)"
    // document.writeln(uname)
    if (uname==='' || uname===null){
        //  alert("user name not empty")
        msg="user name not empty"
        error=style.color='red'
        inp.style.border='2px red solid'
        return flase
       
    }
    else if (uname!=='pyspider')
    {
        // alert("invalid username")
        msg="invalid username"
        error=style.color='red'
        inp.style.border='2px red solid'
        return flase

      

    }
    else if (password==='' || password===null){
        //  alert("user name not empty")
        msg="password not empty"
        error=style.color='red'
        pass.style.border='2px red solid'
        return flase



    }
    else if (password.length<6){
        msg="password cantain minimum 6 charator"
        pass.style.border='2px red solid'
        return flase


    }
    else if (password!=='pysp123'){
        msg="invalid password"
        error=style.color='red'
        pass.style.border='2px red solid'
        return flase



    }
    else{
        // alert("validation successfull")
        error.style.displya='none'
        document.getElementById('succ').innerHTML="validation successfull"
        succ=style.color='green'
        inp.style.border='2px green solid'
        pass.style.border='2px green solid'
        check.style.disply='inline'
        document.getElementById('check').innerHTML='show'
        return true



    }
    document.getElementById('error').innerHTML=msg
    
    
}
function showpass(){
    let password=document.getElementById('pass')
    if(password.type=='text'){
        password.type='password'
    }
    else{
        password.type='text'
    }
}