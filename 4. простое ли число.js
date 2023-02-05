function simpleNum(num){
    for (let i = 2; i <= num ; i++ ){
        if (num % i){
            return('число простое')
        } else {
            return('число не простое')
        }        
    }
}

console.log(simpleNum(12))