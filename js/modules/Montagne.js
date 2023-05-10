
import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un environnement Montagne
 */
export class Montagne extends AbstractForm {
   constructor (
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesenteur = false,
    odreConstruction = 10
  ) {
    super(x,y,width, height, fillColor, strokeColor, strokeWidth, pesenteur, odreConstruction)
  }

 /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  



  montagne(ctx,dx,dy,width,height){
    let ox = dx;
    let oy = dy;
    // Dessiner la montagne
    ctx.fillStyle = "#888888";
    ctx.beginPath();
    ctx.moveTo(ox, oy);
    ctx.lineTo(ox + width / 2, oy - height);
    ctx.lineTo(ox + width, oy);
    ctx.fill();
    ctx.stroke();

    
  }

    

    
  

  draw (ctx) {
    const min = 300;
    const max = 550;
    let x=-20;
    
    ctx.save();
    for(let i = 0; i<5; i++){
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        this.montagne(ctx,x,700,500,random);
        x+=90;
    }
    
  
    ctx.restore()
  }

  /**
   * get array of instances of this classe 
   * @return {[Object,...]}
   */
  static buildForms() {

    const mont = new Montagne();
    const forms = [mont]

    


    // votre code ici


    return forms
  }
}
