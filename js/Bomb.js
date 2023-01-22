import { FallStuff } from './FallStuff.js';
import { calcExpression, prototype } from '../Utils/Utils.js'

export function Bomb(x,y,guy,score){

    FallStuff.call(this, x,y,guy,score);
    this.dom.classList.add('bomb')
}


prototype(Bomb, FallStuff);

Bomb.prototype.crash = function(){

    console.log('die...')


    let parentNode = this.dom.parentElement
    parentNode.removeChild(this.dom);
    clearInterval(this.timer);
}