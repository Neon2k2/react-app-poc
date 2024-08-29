
function newfiboserious(n) {
    if(n<=0) return[];
    if(n===1) return[0];
    if(n===2) return[0,1];

    let fibseries = [0,1];

    for(let i = 2; i < n; i++){
        fibseries.push(fibseries[i - 1] + fibseries[i - 2]);
    }
    return fibseries;
}


const n = 7;
const fiboserious = newfiboserious(n);
console.log(fiboserious);

let sum1 = 15;
let sum2 = 5;

function xyz(test) {
    console.log(test);
}

function abc(sum1,sum2, myCallback) {
    let sum = sum1+sum2;
    xyz(sum);

}
abc(15,5, xyz);

