var promise = new Promise(function(resolve, reject) { 
    resolve(
        function (){
            setTimeout("Delay success",500);
        }
    ); 
    reject(
        function (){
            setTimeout("Delay Exception",500);
        }
    );
}) 
promise.then(
    resolve()
).catch(
    reject()
)