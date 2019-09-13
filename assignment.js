function count(str){
    cntx=0;
    cnto=0;
    for(var i=0;i<str.length;i++){
        if(str[i]=='x'||str[i]=='X'){
            cntx=cntx+1;
        }
        else if(str[i]=='o' ||str[i]=='O'){
            cnto+=1;
        }
    }
    if(cntx==cnto){
        console.log("true");
    }
    else{
        console.log("false");
    }
    }
    var str="xooxx";
    count(str);
