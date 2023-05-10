
import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine des Rails
 */
export class Rail extends AbstractForm {
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
  



  // Fonction de dessin pour dessiner la voie ferrée
drawRailRoad(ctx) {
	// Dessiner la voie ferrée
	ctx.beginPath();
	ctx.moveTo(0, 700);
	ctx.lineTo(8000, 700);
	ctx.strokeStyle = "#000";
	ctx.lineWidth = 20;
	ctx.stroke();
	// Dessiner les traverses
	ctx.fillStyle = "#8B4513";
	for (var i = 50; i < 8000; i += 100) {
		ctx.fillRect(i, 690, 50, 10);
	}
}
    

    
  

  draw (ctx) {

    ctx.save()

    this.drawRailRoad(ctx);
    
  
    ctx.restore()
  }

  /**
   * get array of instances of this classe 
   * @return {[Object,...]}
   */
  static buildForms() {

    const rail = new Rail(100,300,45,150,"","",1,false);
    const forms = [rail]

    


    // votre code ici


    return forms
  }
}
