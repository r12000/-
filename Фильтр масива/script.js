function leng(name) {
    return name.length == 2
}
function filterArray(array, filter) {
    const arr = array.map(String)
    console.log(arr.filter(filter))
}
filterArray([1,11,111,1111], leng)