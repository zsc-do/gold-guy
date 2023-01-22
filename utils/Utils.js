export function calcExpression(before,step,sign){
    if(sign === '+'){
        return parseInt(before.replace('px','')) + step + 'px';
    }else if(sign === '-'){
        return parseInt(before.replace('px','')) - step + 'px';
    }

}


function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

export function prototype(child, parent) {
    var prototype = object(parent.prototype);
    prototype.constructor = child;
    child.prototype = prototype;
}
