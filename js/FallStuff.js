export function FallStuff(x,y,guy,score){

    this.x = x;
    this.y = y;
    this.guy = guy;
    this.score = score


    //获取视口的高度
    this.viewHeight = 500;

    //获取小球的高度
    this.goldHeight = 30;

    //设置高度差
    this.maxHeight = this.viewHeight - this.goldHeight - 2;

    //获取小球的top值
    this.top = 0;

    //设置小球的速度和加速度
    this.v = 0;

    this.SPEED = 300;//定义加速度
    this.INTERVAL = 20;

    this.dom =  document.createElement('div')
    this.dom.style.width = '50px';
    this.dom.style.height = '50px';

    this.dom.style.position = 'absolute';
    this.dom.style.left = this.x + 'px';
    this.dom.style.top = this.y + 'px';

}


FallStuff.prototype.fall = function(){

    this.v += this.SPEED * 0.02;
    this.top += this.v * 0.02 + 0.5 * this.SPEED * 0.02 * 0.02
    this.dom.style.top = this.top + "px";

    this.y =  this.top;


    if(this.y > 420 && this.x > this.guy.x -30 && this.x < this.guy.x + 50){

        this.crash();
    }

    if (this.top > this.maxHeight) {
        //当到达浏览器底部的时候
        let parentNode = this.dom.parentElement
        parentNode.removeChild(this.dom);
        clearInterval(this.timer);
    }
}

FallStuff.prototype.startFall = function(that){
    this.timer = setInterval(this.fall.bind(that), this.INTERVAL );
}