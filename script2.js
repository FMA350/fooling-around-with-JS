// Create an external JS file called 'combinations.js' which contains a JavaScript function that generates all
// combinations of a string. Include 'combinations.js in
// body sections and display the output. Example string : 'dog'  Expected Output : d,do,dog,o,og,g

// ##########################################################################################################

let letters = ["A", "B", "C", "D", "E", "F", "G"];
let stack = [];

function recursive(s, l){
    if(!l.length){

        console.log(s);
        return;
    }
    let st = s.slice();
    let le = l.slice();
    let cur = le.pop();
    recursive(st,le);
    st.push(cur)
    recursive(st, le);

    return;
}

recursive(stack, letters)
