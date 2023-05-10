
import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un Train
 */
export class Train extends AbstractForm {
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
  
// Fonction de dessin pour dessiner le train
drawTrain(ctx,x,y) {
	// Dessiner la locomotive
	ctx.fillStyle = "green";
	ctx.fillRect(x, y, 100, 50);
	ctx.fillRect(x + 10, y - 40, 80, 40);
	// Dessiner la fumée
	ctx.beginPath();
	ctx.arc(x + 20, y - 40, 20, 0, Math.PI*2);
	ctx.fillStyle = "gray";
	ctx.fill();
	ctx.beginPath();
	ctx.arc(x + 40, y - 60, 30, 0, Math.PI*2);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(x + 80, y - 60, 20, 0, Math.PI*2);
	ctx.fill();
	// Dessiner les roues
	ctx.beginPath();
	ctx.arc(x + 20, y-3 + 50, 10, 0, Math.PI*2);
	ctx.fillStyle = "gray";
	ctx.fill();
	ctx.beginPath();
	ctx.arc(x + 80, y-3 + 50, 10, 0, Math.PI*2);
	ctx.fill();
}

drawWagon(ctx,x,y){
	// Dessiner l'accroche
	ctx.fillStyle="gray"
	ctx.fillRect(x-70,y+20,70,10);
	// Dessiner le wagon
	const min = 0;
    const max = 255;
	const r = Math.floor(Math.random() * (max - min + 1)) + min;;
    const g = Math.floor(Math.random() * (max - min + 1)) + min;;
	const b = Math.floor(Math.random() * (max - min + 1)) + min;;
	ctx.beginPath();
	ctx.fillStyle = 'rgb('+r+','+g+','+b+')';
	ctx.fillRect(x-180, y, 120, 50);
	ctx.fillRect(x-180, y - 30, 120, 50);
	// Dessiner les roues
	ctx.beginPath();
	ctx.arc(x - 80, y-3 + 50, 10, 0, Math.PI*2);
	ctx.fillStyle = "gray";
	ctx.fill();
	ctx.beginPath();
	ctx.arc(x -160, y-3 + 50, 10, 0, Math.PI*2);
	ctx.fill();
	
}

draw (ctx) {
	let coul = "";
	
	ctx.save()
	let alwagon= Math.floor(Math.random() * 5) + 1;
	this.drawTrain(ctx,this.x ,this.y);
	for( let i = 0; i<alwagon; i++){
		this.drawWagon(ctx,this.x, this.y)
		this.x-=180
	}
	
	ctx.restore()

  }
    
    
 /**
   * get array of instances of this classe 
   * @return {[Object,...]}
   */

  static buildForms() {
    
	let al = ~~(Math.random()*1800)

    const train = new Train(al,650)
	
	

    const forms = [train]

    
      

    


    // votre code ici


    return forms
  }
}
