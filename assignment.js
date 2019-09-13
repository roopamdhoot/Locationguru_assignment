function strLen(str,cnt) {
    cnt =cnt|| 0;
    if (str.length) {
    return strLen(str.substr(1), ++cnt);
    } else {
        return cnt;
    }
}

console.log(strLen("apple"));
