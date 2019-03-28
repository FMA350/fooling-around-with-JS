// Write a program that outputs all possibilities to put + or - or nothing between the numbers 1, 2, ...,9 (in this order)
//  such that the result is always 100
let numbers = ['1', '2', '3', '4', '5' ,'6' , '7', '8', '9', '10'];

class Node{
    constructor(d, o){
        if (d==0){
            return;
        }
        this.depth = d;
        this.operator = o;
        this.childPlus = new Node(d-1, "+");
        this.childMinus = new Node(d-1, "-");
        this.childNothing = new Node(d-1, " ");
    }
}

function depthFirstSearch(string, node, d){
    if(d>1){
        depthFirstSearch(string.concat(node.childPlus.operator),node.childPlus, d-1);
        depthFirstSearch(string.concat(node.childMinus.operator),node.childMinus, d-1);
        depthFirstSearch(string.concat(node.childNothing.operator),node.childNothing, d-1);
    }
    else{
        let finalString = "";
        for(let i=0; i < string.length ; i++){
            finalString= finalString.concat(numbers[i]);
            finalString = finalString.concat(string.charAt(i));
        }
        finalString= finalString.concat(numbers[string.length]);

        finalString = finalString.replace(/\s/g, "");
        if(math.eval(finalString) == 100){
            console.log("#Found!");
            console.log(finalString);
            console.log(math.eval(finalString));
        }
    }
}

let nodePlus = new Node(9, "+");
let nodeMinus = new Node(9, "-");
let nodeNothing = new Node(9, " ");

depthFirstSearch("+",nodePlus,8);
depthFirstSearch("-",nodeMinus,8);
depthFirstSearch(" ",nodeNothing,8);
