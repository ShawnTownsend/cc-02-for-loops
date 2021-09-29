//1
function countToTen(){
    for(let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
countToTen();

//2
function countFromOne(int){
    for(let i = 1; i < int + 1; i++) {
        console.log(i);
    }
}
countFromOne(20)

//3
function countEveryEven(n){
    for(let i = 0; i <= n; i+=2){
        if(i > 1){
            console.log(i)
        }
    }
}
countEveryEven(30);

//4
function countEveryOdd(n){
    for(let i = 0; i <= n; i+=3){
        if(i > 1){
            console.log(i)
        }
    }
}
countEveryOdd(27);

//5 
function countEvens(){
  
}