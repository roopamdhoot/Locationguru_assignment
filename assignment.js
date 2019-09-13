//assignment12
function upper(str){
    var strr=str.toLowerCase().split(' ');
    for(i=0;i< strr.length;i++){
        strr[i]=strr[i].charAt(0).toUpperCase()+strr[i].substring(1);
        }
    return strr.join(' ');
    }
    console.log(upper("hello world"));
