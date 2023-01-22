import { calcExpression } from '../utils/Utils.js'

export function Guy(x,y){

    this.x = x;
    this.y = y;


    this.dom = document.createElement('div')
    this.dom.style.width = '100px';
    this.dom.style.height = '100px';

    this.dom.style.position = 'absolute';
    this.dom.style.left = this.x + 'px';
    this.dom.style.top = this.y + 'px';


    this.dom.classList.add('guy')
}



Guy.prototype.listenKeyBoard = function(){

    document.onkeydown = (e) =>{

        if(e.code === 'ArrowLeft'){

            this.dom.classList.remove('guy')

            this.dom.classList.remove('guy-move')

            this.dom.classList.add('guy-reverse')

            this.dom.classList.add('guy-reverse-move')

            if(!this.dom.classList.contains('guy-reverse-move')){
                
                this.dom.classList.add('guy-reverse-move')
                setTimeout(()=>{
                    this.dom.classList.remove('guy-reverse-move')
                },150)
                
            }

            let leftAfter = calcExpression(this.dom.style.left,20,'-')
            this.dom.style.left = leftAfter;
            this.x = parseInt(leftAfter.replace('px',''));
        }else if(e.code === 'ArrowRight'){

            this.dom.classList.remove('guy-reverse')

            this.dom.classList.remove('guy-reverse-move')

            this.dom.classList.add('guy')

            this.dom.classList.add('guy-remove')


            if(!this.dom.classList.contains('guy-move')){
                
                this.dom.classList.add('guy-move')
                setTimeout(()=>{
                    this.dom.classList.remove('guy-move')
                },150)
                
            }

            

            let rightAfter = calcExpression(this.dom.style.left,20,'+')
            this.dom.style.left = rightAfter;
            this.x = parseInt(rightAfter.replace('px',''));

        }
    }
}

