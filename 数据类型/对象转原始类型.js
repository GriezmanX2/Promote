let a = {
    valueOf(){
        return 9527;
    },

    toString(){
        return 'str';
    },
    //  转换原始类型时最优先调用，默认在转换字符串时内部调用toString(),在转换数字时内部调用valueOf();可以重写覆盖；
    [Symbol.toPrimitive](){
        return 'toPrimitive';
    }
};

console.log('valueOf',Number(a));
console.log('toString',String(a));

console.log(4 + [1,2,3])

console.log('global',global);