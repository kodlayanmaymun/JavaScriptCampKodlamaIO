function findPrime(...numbers){
    numbers.forEach(element => {
        if(isPrime(element)) console.log(element)}
        )
}

function primeOneThousand(){
    for(let i = 2; i < 1000; i++){
        if(isPrime(i)){
            console.log(i)
        }
    }      
}

const isPrime = num => {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
}

const isFriendly=(num1,num2)=>{
    let divider1=1
    let divider2=1
    for(let i = 2; i < num1; i++){
        if(num1%i==0){
            divider1+=i
        }
    }
    for(let i = 2; i < num2; i++){
        if(num2%i==0){
            divider2+=i
        }
    }
 
    if(divider1===num2&&divider2===num1){
        return true
    }else
       return false
}

function perfectNumbersOneThousand(){
    for(let i = 2; i < 1000; i++){
       if(isFriendly(i,i)){
           console.log(i)
       }
    }
}






findPrime(2,5,8,21, 13)

console.log(isFriendly(284,220))

//primeOneThousand()
//perfectNumbersOneThousand()