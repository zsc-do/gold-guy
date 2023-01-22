import { FallStuff } from './FallStuff.js';
import { calcExpression, prototype } from '../Utils/Utils.js'

export function Gold(x,y,guy,score){
    FallStuff.call(this, x,y,guy,score);
    this.dom.classList.add('coin')
}


prototype(Gold, FallStuff);


Gold.prototype.crash = function(){

    console.log('碰到了')


    this.score.add()

    let parentNode = this.dom.parentElement
    parentNode.removeChild(this.dom);
    clearInterval(this.timer);
}

