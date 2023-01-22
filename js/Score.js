export function Score(title,x,y){

    this.title = title
    this.num = 0

    this.dom = document.createElement('div')
    
    this.dom.style.width = '100px';
    this.dom.style.height = '20px';
    this.dom.style.color = 'red'

    this.dom.style.position = 'absolute';
    this.dom.style.left = this.x + 'px';
    this.dom.style.top = this.y + 'px';

    this.dom.innerText = this.title + this.num;
}



Score.prototype.add = function(){
    this.dom.innerText = this.title + this.num ++;
}