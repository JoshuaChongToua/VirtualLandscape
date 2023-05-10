
import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un Smileys
 */
export class Smileys extends AbstractForm {
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
  



  smileyJaune(ctx,dx,dy){
    let ox = dx;
    let oy = dy;
    ctx.beginPath();
    ctx.fillStyle='yellow';
    ctx.arc(ox+75, oy+75, 50, 0, Math.PI * 2, true);  // Cercle extérieur
    ctx.moveTo(ox+110,oy+75);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(ox+75, oy+75, 35, 0, Math.PI, false);  // Bouche (sens horaire)
    ctx.moveTo(ox+65, oy+65);
    ctx.arc(ox+60, oy+65, 5, 0, Math.PI * 3, true);  // Oeil gauche
    ctx.moveTo(ox+95, oy+65);
    ctx.arc(ox+90, oy+65, 5, 0, Math.PI * 3, true);  // Oeil droite
    ctx.fill();
    ctx.stroke();
  }

    

  smileyClown(ctx,dx,dy){
    let ox = dx;
    let oy = dy;
    ctx.beginPath();
    ctx.fillStyle="blue";
    ctx.arc(ox+185, oy+75, 50, 0, Math.PI * 2, true);  // Cercle extérieur
    ctx.moveTo(ox+160, oy+85);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle='red';
    ctx.arc(ox+145, oy+45, 8, 0,Math.PI * 2, true);
    ctx.arc(ox+150, oy+40, 8, 0,Math.PI * 2, true);
    ctx.arc(ox+155, oy+35, 8, 0,Math.PI * 2, true);
    ctx.moveTo(ox+232, oy+45);
    ctx.arc(ox+225, oy+45,8,0,Math.PI * 2, true);
    ctx.arc(ox+ 220, oy+40,8,0,Math.PI * 2, true);
    ctx.arc(ox+215, oy+35,8,0,Math.PI * 2, true);
    ctx.fill();
    ctx.stroke();


    ctx.beginPath();
    ctx.fillStyle='red';
    ctx.arc(ox+185, oy+68,8,0,Math.PI * 2, true);
    ctx.fill();
    ctx.stroke();



    ctx.beginPath();
    ctx.fillStyle='red';
    ctx.arc(ox+185, oy+85, 32, 0, Math.PI, false);
    ctx.fill();
    ctx.moveTo(ox+160, oy+88);
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle='white';
    ctx.moveTo(ox+160, oy+88);
    ctx.arc(ox+185, oy+88, 25, 0, Math.PI, false);  // Bouche (sens horaire)
    ctx.moveTo(ox+175, oy+65);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle='green';
    ctx.arc(ox+170, oy+55, 5, 0, Math.PI * 2, true);  // Oeil gauche
    ctx.moveTo(ox+205, oy+55);
    ctx.arc(ox+200, oy+55, 5, 0, Math.PI * 2, true);  // Oeil droite
    ctx.fill();
    ctx.stroke();
  }
    
   

    

  smileyChap(ctx,dx,dy){
    let ox = dx;
    let oy = dy;
    ctx.beginPath();
    ctx.moveTo(ox+350, oy+95);
    ctx.arc(ox+300, oy+95, 50, 0, Math.PI * 2, true);  // Cercle extérieur
    ctx.moveTo(ox+315, oy+130);
    ctx.arc(ox+300, oy+130, 15, 0, Math.PI, true);  // Bouche (sens horaire)
    ctx.moveTo(ox+295, oy+85);
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle='red';
    ctx.arc(ox+290, oy+85, 5, 0, Math.PI * 2, false);  // Oeil gauche
    ctx.moveTo(ox+315, oy+85)
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle='rgb(0,100,255)';
    ctx.moveTo(ox+286, oy+89);
    ctx.quadraticCurveTo(ox+292, oy+130, ox+292, oy+95);
    
    ctx.fill();
    ctx.stroke();


    ctx.beginPath()
    ctx.arc(ox+310, oy+85, 5, 0, Math.PI * 2, true);  // Oeil droite
    ctx.moveTo(ox+337, oy+60)
    ctx.arc(ox+310, oy+85, 9, 0, Math.PI * 2, true);  // Oeil droite
    ctx.stroke();
    

    ctx.beginPath();
    ctx.fillStyle='gray';
    ctx.fillRect(ox+276,oy+15,50,40);
    ctx.fillRect(ox+250,oy+45,100,10);
    ctx.stroke();


    
  }

  draw (ctx) {
    ctx.save()

    
    
    

    let al = Math.floor(Math.random() * 3) + 1;
      if(al==3){
        this.smileyChap(ctx,this.x,this.y);
      }

      else if(al==2){
        this.smileyJaune(ctx,this.x,this.y);
      }

      else{
        this.smileyClown(ctx,this.x,this.y);
      }
    ctx.restore()
  }
 /**
   * get array of instances of this classe 
   * @return {[Object,...]}
   */

  static buildForms() {
    

    let max = Math.floor(Math.random() * 10) + 1; // max in [5..10]

    let forms = []

    for(let i = 0; i < max; i++){
        forms.push(new Smileys(
          ~~(Math.random() * 1000),
          ~~(Math.random() * 550),
          i % 2 === 0 // pesenteur une fois sur 2)
          )
        )
      }
      

    


    // votre code ici


    return forms
  }
}
