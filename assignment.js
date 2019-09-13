//assignment13
var abc=""
function fun(str){
    
    for(var i=0;i<str.length;i++){
        if(str[i]>='A'&& str[i]<='Z'){
            abc+= ' ' + str[i];
            
        }
        else {
        abc+= str[i];
        }
    }
    console.log(abc);
}
var str="HelloWorldItsRoopam";

fun(str);