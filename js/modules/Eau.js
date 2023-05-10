
import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un environnement Eau
 */
export class Eau extends AbstractForm {
   constructor (
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesenteur = false,
    odreConstruction = 1000
  ) {
    super(x,y,width, height, fillColor, strokeColor, strokeWidth, pesenteur, odreConstruction)
  }

 /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  



  Eau(ctx){
    ctx.fillStyle="#0080ff "
    ctx.fillRect(200,750,1500,5000);
    

    
  }

    

    
  

  draw (ctx) {

    ctx.save()

    this.Eau(ctx)
    
  
    ctx.restore()
  }

  /**
   * get array of instances of this classe 
   * @return {[Object,...]}
   */
  static buildForms() {

    const eau = new Eau();
    const forms = [eau]

    


    // votre code ici


    return forms
  }
}
