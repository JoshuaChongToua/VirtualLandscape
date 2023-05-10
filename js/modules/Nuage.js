
import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un Nuage
 */
export class Nuage extends AbstractForm {
   constructor (
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesenteur = false,
    odreConstruction = 10000
  ) {
    super(x,y,width, height, fillColor, strokeColor, strokeWidth, pesenteur, odreConstruction)
  }

 /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  



  Nuage(ctx,x,y,width,height,numDrops){
        // Dessiner le nuage
      ctx.fillStyle = "#FFFFFF";
      ctx.beginPath();
      ctx.moveTo(x, y + height/2);
      ctx.bezierCurveTo(x + width/4, y, x + width/2, y - height/4, x + 3*width/4, y + height/2 - height/4);
      ctx.bezierCurveTo(x + width, y + height/2, x + 3*width/4, y + height/2 + height/4, x + width/2, y + height);
      ctx.bezierCurveTo(x + width/4, y + height/2 + height/4, x, y + height/2, x, y + height/2 - height/4);
      ctx.closePath();
      ctx.fill();
      // Dessiner la pluie
      ctx.strokeStyle = "blue";
      ctx.lineWidth = 1;

      for (let i = 0; i < numDrops; i++) {
        const dropX = x + Math.random() * 100;
        const dropY = y + Math.random() * 500;
        ctx.beginPath();
        ctx.moveTo(dropX, dropY);
        ctx.lineTo(dropX + 5, dropY + 10);
        ctx.stroke();
      }
  }

  

    

    
  

  draw (ctx) {
    
    ctx.save();
    const min = 450;
    const max = 1100;
    const min2 = 10;
    const max2 = 50;
    let x = Math.floor(Math.random() * (max - min + 1)) + min;;
    let y = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;;
    for(let i = 0; i<3; i++){
      for(let j = 0; j<3; j++){
        this.Nuage(ctx,x,y,100,60,50);
        x+=50;
        y=Math.floor(Math.random() * (max2 - min2 + 1)) + min2;;
        
      }
      y=Math.floor(Math.random() * (max2 - min2 + 1)) + min2;;
      x+=150;
      
    }
    
    
  
    ctx.restore()
  }

  /**
   * get array of instances of this classe 
   * @return {[Object,...]}
   */
  static buildForms() {

    const nuage = new Nuage();
    const forms = [nuage]

    


    // votre code ici


    return forms
  }
}
