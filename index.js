var output = [];
var count = 1;

function fizzbuzz() {

    while(count <= 100) {

    if (count % 5 === 0 && count % 3 === 0){
        output.push("fizzbuzz");
        count++;
    } else if (count % 5 === 0) {
        output.push("buzz");
        count++
    } else if (count % 3 === 0) {
        output.push("fizz");
        count++
    } else {
        output.push(count);
        count++;
    }
    }
    
    console.log(output);
}
