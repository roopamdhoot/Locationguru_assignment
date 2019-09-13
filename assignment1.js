    //assignmenrt1
        function myfunction(){
            let a=[1,2,3];
            console.log(a[0]);
        }
        myfunction();

    function myfun(){
        let a={value:10}
        console.log(a++);
    }
    myfun()
    //assignment2
    let a={
        value:10
    };
    function myfun(a){
    a.value++;

    }
    myfun(a)
    console.log(a);
    //assignment3
    let a=2
    let b=4
    let c=4;
    function animals(){
    let x=2
    let y=3
    let z=5
    let d=a*x+b*y+c*z;  
    console.log(d);
    }
    animals()
    //assignment4
    function strLen(str,cnt) {
        cnt =cnt|| 0;
        if (str.length) {
        return strLen(str.substr(1), ++cnt);
        } else {
            return cnt;
        }
    }
    
    console.log(strLen("apple"));
    
    //assignment5
    let s="";
    function empty(s){
    if(s=="")
        console.log("true");
    else
        console.log("false");

    }
    empty(s) ;
    //assignment6
    let arr=[1,2,3,4];
    function reverse(arr){
    arr=arr.reverse();
    console.log(arr);
    }
    reverse(arr);
    //assignment7
    let s=[1,2,3]
    let y=[4,5,6]
    function concat(s,y){
        let z=s.concat(y);
        console.log(z);
    }
        concat(s,y);
        //assignment8
        function include(){
            var arr=['1','2','3']
        var a= arr.includes('1');
        console.log(a);
        }  
        include()
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
        //assignment11
        var a = [1,2,3,4,6,7,8,9,10], count = 10;
    var missing = new Array();

    for(var i=1;i<=count;i++) {
        if(a.indexOf(i) == -1){
            missing.push(i);
        }
    }
    console.log(missing);
    //assignment10
    function isEqual() 
    { 
    var a = [1, 2]; 
    var b = [2,1]; 
        if(a.length!=b.length) 
    return "False"; 
    else
    {
    for(var i=0;i<a.length;i++) 
    if(a[i]!=b[i]) 
        return "False"; 
        return "True"; 
    } 
    } 
    var g = isEqual(); 
    console.log(g)
    //assignment11
    function upper(str){
        var strr=str.toLowerCase().split(' ');
        for(i=0;i< strr.length;i++){
            strr[i]=strr[i].charAt(0).toUpperCase()+strr[i].substring(1);
            }
        return strr.join(' ');
        }
        console.log(upper("hello world"));
    //assignement12
    function count(str){
        cntx=0;
        cnto=0;
        for(var i=0;i<str.length;i++){
            if(str[i]=='x'){
                cntx=cntx+1;
            }
            else if(str[i]=='o'){
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
