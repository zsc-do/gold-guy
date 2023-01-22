export function calcExpression(before,step,sign){
    if(sign === '+'){
        return parseInt(before.replace('px','')) + step + 'px';
    }else if(sign === '-'){
        return parseInt(before.replace('px','')) - step + 'px';
    }

}