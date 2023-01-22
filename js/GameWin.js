export function GameWin(width,height){

    this.width = width;
    this.height = height;

    this.dom =  document.createElement('div')
    this.dom.style.width = this.width + 'px';
    this.dom.style.height = this.height + 'px';

    this.dom.style.position = 'absolute';
    this.dom.style.left = '10%';
    this.dom.style.top = '10%';

    document.body.appendChild(this.dom);
    
}



GameWin.prototype.addContent = function(node){

    let gameWin = this.dom
    gameWin.appendChild(node)
}

