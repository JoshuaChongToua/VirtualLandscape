
import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un Pont
 */
export class Pont extends AbstractForm {
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
  



  Pont(ctx){
    ctx.fillStyle="#807d7a"
    ctx.fillRect(0,700,10000,5000);
    

    
  }

    

    
  

  draw (ctx) {

    ctx.save()

    this.Pont(ctx)
    
  
    ctx.restore()
  }

  /**
   * get array of instances of this classe 
   * @return {[Object,...]}
   */
  static buildForms() {

    const pont = new Pont();
    const forms = [pont]

    


    // votre code ici


    return forms
  }
}
