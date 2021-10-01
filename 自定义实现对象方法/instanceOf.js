function customInstanceOf(obj,Fn){
    var prototype = Fn.prototype;
    var proto = obj.__proto__;

    while(proto){
        if(prototype === proto){
            return true;
        }
        proto = proto.__proto__;
    }

    return false;
}