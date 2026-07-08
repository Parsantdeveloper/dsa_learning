

var evalRPN = function (token) {
    let stack = [];
    for (let i = 0; i < token.length; i++) {
        if (token[i] === "+" || token[i] === "-" || token[i] === "*" || token[i] === "/") {
            let b = stack.pop();
            let a = stack.pop();
           
            let res=0;
            switch (token[i]) {
                case '+': res = a + b; break;
                case '-': res = a - b; break;
                case '*': res = a * b; break;
                case '/': res = Math.trunc(a / b); break;
            }
            stack.push(res)
        } else {
            stack.push(+token[i]);
        }
    }
    return stack[0]
};

let tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];
console.log(evalRPN(tokens))