import { FallStuff } from './FallStuff.js';
import { calcExpression, prototype } from '../Utils/Utils.js'

export function Bomb(x,y,guy,score,randSpeed){

    FallStuff.call(this, x,y,guy,score,randSpeed);
    this.dom.classList.add('bomb')
}


prototype(Bomb, FallStuff);

let boom = new Audio('../music/boom.wav')

Bomb.prototype.crash = function(){

    

    let parentNode = this.dom.parentElement
    parentNode.removeChild(this.dom);
    clearInterval(this.timer);

    boom.play()

    let res = confirm('你被炸死了！！！')

    if(res){
        location.reload()
    }
}