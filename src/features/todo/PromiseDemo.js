const PromiseDemo = () => {
    var promise = new Promise( (resolve, reject) => {
        let name = 'Christian'
        if (name === 'Christian') {
           resolve("Promise resolved successfully");
        }
        else {
           reject(Error("Promise rejected"));
        }
     });
     promise.then(function(result) {
        console.log(result); // "Promise resolved successfully"
     }, err => {
        console.log(err); // Error: "Promise rejected"
     });
    }
export default PromiseDemo;