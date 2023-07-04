//Promise method
// var promise = new Promise(function(resolve,reject){
//     var str1 = 'Helloworld'
//     var str2 = 'Helloworld'
//      if(str1===str2){
//         resolve();
//      }else{
//         reject();
//      }
// });
// promise.then(function(){
//     console.log('Your resolve is Helloworld Success')
// }).catch(function(){
//     console.log('Condition false its is Reject method')
// })

var Name = 'Pramod'
console.log(Name)
console.log(`my name is ${Name}`)

// Arrow functiin
function abc(){
    console.log('hello paniem leda niku');
}
abc()
let pani = ()=>console.log('ha pani em ledhu andhuke vs code lo vunna')
pani();
let sum = (data)=> console.log(data)
sum(60)

let arr = [4,5,6,7,8]

let newvarr = arr.map(function(CurrentItem,Index){
   return CurrentItem /1

})
console.log(newvarr)