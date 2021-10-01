let arr = [1,3,5,7,9];

let arrAfter = arr.map(function(item,index,arr){
    
    return item * item;
});


Array.prototype.customMap = function(callback){
    let ultArr = [];
    for(var i = 0;i < this.length;i++){
        ultArr.push(callback(this[i],i,this))
    }
    return ultArr;
}
console.log(arrAfter);
console.log('------------');
let arrAfter1 = arr.customMap(function(item,index,arr){
    return item * item;
});

console.log(arrAfter1);

