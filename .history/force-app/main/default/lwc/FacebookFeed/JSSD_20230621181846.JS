//Promise method
var promise = new Promise(function(resolve,reject){
    var str1 = 'Helloworld'
    var str2 = 'helloworld'
     if(b===b){
        resolve();
     }else{
        reject();
     }
});
promise.then(function(){
    console.log('Your resolve is Helloworld Success')
}).catch(function(){
    console.log('Condition false its is Reject method')
})

