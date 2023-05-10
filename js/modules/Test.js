
import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un environnement Montagne
 */
export class Test extends AbstractForm {
   constructor (
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesenteur = false,
    odreConstruction = 100
  ) {
    super(x,y,width, height, fillColor, strokeColor, strokeWidth, pesenteur, odreConstruction)
  }

 /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  



 mont(ctx, dx, dy){
      let ox = dx;
      let oy = dy;
      ctx.fillStyle = "#9ACD32";
      ctx.beginPath();
      ctx.moveTo(ox, oy + this.canvas.height);
      ctx.lineTo(ox, oy + this.canvas.height - 200);
      ctx.lineTo(ox + 100, oy + this.canvas.height - 100);
      ctx.lineTo(ox + 200, oy + this.canvas.height - 250);
      ctx.lineTo(ox + 300, oy + this.canvas.height - 150);
      ctx.lineTo(ox + 400, oy + this.canvas.height - 300);
      ctx.lineTo(ox + 500, oy + this.canvas.height - 200);
      ctx.lineTo(ox + this.canvas.width, oy + this.canvas.height);
      ctx.closePath();
      ctx.fill();
}

    

    
  

  draw (ctx) {

    ctx.save()

    this.mont(ctx, this.dx, this.dy)
    
  
    ctx.restore()
  }

  /**
   * get array of instances of this classe 
   * @return {[Object,...]}
   */
  static buildForms() {

    const monta = new Test(10,20,15,10,"","",1,true);
    const forms = [monta]

    


    // votre code ici


    return forms
  }
}
