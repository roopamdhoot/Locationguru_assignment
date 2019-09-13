 //assignment11
        var a = [1,2,3,4,6,7,8,9,10], count = 10;
    var missing = new Array();

    for(var i=1;i<=count;i++) {
        if(a.indexOf(i) == -1){
            missing.push(i);
        }
    }
    console.log(missing);
