let limit = 9;
const BEGIN = 0;
const serie = [BEGIN]
for (let i=BEGIN; i<limit ; i++) {
    if(i>0)
        serie[i]=serie[i-1]+i;
}
console.log(serie)