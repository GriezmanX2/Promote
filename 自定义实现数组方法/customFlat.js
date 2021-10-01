// 数组扁平化
Array.prototype.customFlat = function(depth){
    var ultArr = [];

    this.forEach(function(item){
        if(Array.isArray(item)){
            ultArr = ultArr.concat(item.customFlat());
        }else{
            ultArr = ultArr.concat(item);
        }
    });
    
    return ultArr;
}

var arr = [[[1,2,3],4,5],6,7,[[[[[[[[8]]]]]]]]];

arr = arr.customFlat();

console.log(arr);