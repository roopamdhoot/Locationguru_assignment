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
