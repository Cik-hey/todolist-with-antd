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
        console.log(result);
     }, err => {
        console.log(err);
     });
    }
export default PromiseDemo;