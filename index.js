import { GameWin } from './js/GameWin.js';
import { Guy } from './js/Guy.js';
import { calcExpression,Random } from './utils/Utils.js'
import {Gold} from './js/Gold.js'
import {Score} from './js/Score.js'
import { Bomb } from './js/Bomb.js';

let bgMusic = new Audio('./music/background.mp3')
bgMusic.loop = true
bgMusic.play()

let gameWin = new GameWin(800,500);



let score = new Score('分数:',0,0)
gameWin.addContent(score.dom)

let guy = new Guy(0,395,gameWin);
guy.listenKeyBoard()
gameWin.addContent(guy.dom)



setInterval(randCreateGold, 1000);
setInterval(randCreateBomb, 4000);



function randCreateGold(){
    
    let count = Random(2,6);
    while(count > 0){
        let randX = Random(0,500)
        let randSpeed = Random(200,500)
    
        let gold = new Gold(randX,0,guy,score,randSpeed);

        gameWin.addContent(gold.dom)
        gold.startFall(gold)

        count --;
    }
    
}


function randCreateBomb(){

    let count = Random(1,4);
    while(count > 0){

        let randX = Random(0,500)
        let randSpeed = Random(200,500)

        let bomb = new Bomb(randX,0,guy,score,randSpeed);
        console.log('object :>> ', bomb);
        gameWin.addContent(bomb.dom)
        bomb.startFall(bomb)

        count --;

    }
    
}




