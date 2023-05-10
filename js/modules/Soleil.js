
import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un Soleil
 */
export class Soleil extends AbstractForm {
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
  



  soleil(ctx,dx,dy){
    let ox = dx;
    let oy = dy;
    
    
    //Soleil
    ctx.beginPath();
    ctx.arc(1880,50,100,0,Math.PI * 2)
    ctx.fillStyle="orange";
    ctx.fill();
    
    
    //Soleil Effet
    
    ctx.beginPath();
    ctx.arc(1880,50,110,0,Math.PI * 2)
    ctx.fillStyle="rgb(255,213,0,0.5)";
    ctx.fill();

    //Reflet
    ctx.beginPath();
    ctx.arc(1820,76,13,0,Math.PI * 2)
    ctx.fillStyle='rgb(255,255,255,0.7)'
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1810,80,11,0,Math.PI * 2)
    ctx.fillStyle='rgb(255,255,255,0.5)'
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1812,88,11,0,Math.PI * 2)
    ctx.fillStyle='rgb(255,255,255,0.3)'
    ctx.fill();

    //part 2
    ctx.beginPath();
    ctx.arc(1830,96,13,0,Math.PI * 2)
    ctx.fillStyle='rgb(255,255,255,0.7)'
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1820,90,11,0,Math.PI * 2)
    ctx.fillStyle='rgb(255,255,255,0.5)'
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1820,99,11,0,Math.PI * 2)
    ctx.fillStyle='rgb(255,255,255,0.3)'
    ctx.fill();

    //part 3
    ctx.beginPath();
    ctx.arc(1820,60,13,0,Math.PI * 2)
    ctx.fillStyle='rgb(255,255,255,0.7)'
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1810,65,11,0,Math.PI * 2)
    ctx.fillStyle='rgb(255,255,255,0.5)'
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1803,69,11,0,Math.PI * 2)
    ctx.fillStyle='rgb(255,255,255,0.3)'
    ctx.fill();
  }
  

    

    
  

  draw (ctx) {

    ctx.save()

    this.soleil(ctx,1880,50)
    
  
    ctx.restore()
  }

  /**
   * get array of instances of this classe 
   * @return {[Object,...]}
   */
  static buildForms() {

    const sol = new Soleil();
    const forms = [sol]

    


    // votre code ici


    return forms
  }
}
