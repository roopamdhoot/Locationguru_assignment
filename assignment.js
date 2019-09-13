 //assignment9
 function remove(array){
    var arr=[];
    for(i=0;i< array.length;i++){
        if(arr.indexOf(array[i]) === -1){
            arr.push(array[i]);
        }
    }

return arr;
}

var names= ['1','2','3','1','1'];
var g=remove(names);
console.log(g);
