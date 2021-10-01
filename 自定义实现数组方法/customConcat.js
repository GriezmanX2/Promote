var arr = [2,4,6,8,10];

Array.prototype.customConcat = function(){
    console.log('arguments: ',arguments)
    var ultArr = this;

    Array.prototype.forEach.call(arguments,function(item){
        console.log('item: ',item)
        if(Array.isArray(item)){
            ultArr.push(...item);
        }else{
            ultArr.push(item);
        }
    })
}


arr.customConcat([5,4,3,2,1],0,1,2,[3,4,5])

console.log(arr);