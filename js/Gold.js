import { FallStuff } from './FallStuff.js';
import { calcExpression, prototype } from '../Utils/Utils.js'

export function Gold(x,y,guy,score,randSpeed){
    FallStuff.call(this, x,y,guy,score,randSpeed);
    this.dom.classList.add('coin')
}


prototype(Gold, FallStuff);

let gainGold = new Audio('../music/gainGold.mp3')

Gold.prototype.crash = function(){


    gainGold.play() // 播放

    this.score.add()

    let parentNode = this.dom.parentElement
    parentNode.removeChild(this.dom);
    clearInterval(this.timer);
}

