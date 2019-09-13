function move(){
    var arr = [1, 2, 6, 3, 4, 5];
    var g=4;
        arr.push(arr.splice(arr.indexOf(g), 1)[0]);
        console.log(arr); }
        move();
