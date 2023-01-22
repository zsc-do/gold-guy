import { GameWin } from './js/GameWin.js';
import { Guy } from './js/Guy.js';
import { calcExpression } from './utils/Utils.js'
import {Gold} from './js/Gold.js'
import {Score} from './js/Score.js'

let gameWin = new GameWin(800,500);

let score = new Score('分数:',0,0)
gameWin.addContent(score.dom)

let guy = new Guy(0,395);
guy.listenKeyBoard()
gameWin.addContent(guy.dom)



setInterval(randCreateGold, 1000);



function randCreateGold(){
    let randX = Math.round(Math.random()*50) * 10 
    console.log('ranx :>> ', randX);
    let gold = new Gold(randX,0,guy,score);
    gameWin.addContent(gold.dom)
    gold.startFall(gold)
}

