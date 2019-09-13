function convert(str){
    str=str.split(' ');
    for(var i=0;i<str.length;i++){
    if(str[i]=='zero'){
        str[i]='0';
    }
    else if(str[i]=='one'){
        str[i]='1';
    }
    console.log(str[i]);
}
}
var str="zero one one zero";
convert(str);
