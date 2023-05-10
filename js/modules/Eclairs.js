
import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un Eclairs
 */
export class Eclairs extends AbstractForm {
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
  
  



  Eclairs(ctx){
    const lineWidth = 5;
    const lineLength = 50;
    const gapLength = 20;
    const numLines = 5;
    const angleOffset = 45;
    
    
    // Dessiner les éclairs
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    for (let i = 0; i < numLines; i++) {
      const startX = Math.random() * 500;
      const startY = Math.random() * 150;

      // Dessiner le contour
      ctx.beginPath();
      ctx.strokeStyle = "white";
      ctx.lineWidth = lineWidth + 2;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      for (let j = 0; j < lineLength + gapLength; j++) {
        const angle = Math.random() * Math.PI * 2;
        const length = j % (lineLength + gapLength) < lineLength ? 1 : 0;
        const endX = startX + Math.cos(angle) * j * length;
        const endY = startY + Math.sin(angle) * j * length;
        ctx.lineTo(endX, endY);
        
      }
      ctx.stroke();

      // Dessiner l'éclair
      ctx.beginPath();
      ctx.strokeStyle = "#FFD700";
      ctx.lineWidth = lineWidth;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      for (let j = 0; j < lineLength + gapLength; j++) {
        const angle = Math.random() * Math.PI * 2;
        const length = j % (lineLength + gapLength) < lineLength ? 1 : 0;
        const endX = startX + Math.cos(angle) * j * length;
        const endY = startY + Math.sin(angle) * j * length;
        ctx.lineTo(endX, endY);
      }
      ctx.stroke();
    }

  }
  

    

    
  

  draw (ctx) {

    ctx.save()

    this.Eclairs(ctx)
    
  
    ctx.restore()
  }

  /**
   * get array of instances of this classe 
   * @return {[Object,...]}
   */
  static buildForms() {

    const ecl = new Eclairs();
    const forms = [ecl]

    


    // votre code ici


    return forms
  }
}
