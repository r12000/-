function sliceArray(array, count) {
    const max = array.length
    const min = 0
    let value = Math.floor((Math.random() * (max - min)) - count)
    if (value < 0) {
        value = value*-1
    }
    console.log(value)
    const end = count+value
    console.log(array.slice(value, end))
}

sliceArray([3,1,2,6,13,121,6,9], 1)