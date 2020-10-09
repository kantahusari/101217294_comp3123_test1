const { resolve } = require("path");

const mixedArray = ["PIZZA", 10, true, 25, false, "wings"];
function check(a) {
    let b = [];
    for (let value in a) {
        if (typeof a[value] === 'string') {
            b.push(a[value]);
        }
    }
    return b;
}

function lowerCaseWords(a){
    new Promise(
        function (resolve,reject){
            resolve(
                function (a){
                    for (let value in a) {
                        a[value].toLowerCase();
                    }
                    console.log(a);
                }
            );
            reject(console.log("Error"));
        }
    );
}
lowerCaseWords(check(mixedArray));