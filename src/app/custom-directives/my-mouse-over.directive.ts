import { Directive, HostListener, ElementRef, Renderer, Input } from '@angular/core';

/* This custom directive highlights the image border with specific colors
based on the rating given to that movie. */

@Directive({
  selector: '[appMyMouseOver]'
})
export class MyMouseOverDirective {

  constructor(private el: ElementRef, private renderer: Renderer) { }

  // Input variable that stores movie rating and is used to decide background color.
  @Input('appMyMouseOver') bgColor: string;

  // Event listeners for element hosting the directive
  @HostListener('mouseenter') onMouseEnter() {
    // This switch case decides color to be applied based on movie rating.
    // Rating 1-2:RED, 3-4:ORANGE, 5:GREEN
    switch (this.bgColor) {
      case '1': {
        this.hover(`red`);
        break;
      }
      case '2': {
        this.hover(`red`);
        break;
      }
      case '3': {
        this.hover(`orange`);
        break;
      }
      case '4': {
        this.hover(`orange`);
        break;
      }
      case '5': {
        this.hover(`green`);
        break;
      }
    }
  }

  /* No color/no effects when mouse leaves image.  */
  @HostListener('mouseleave') onMouseLeave() {
    this.hover(``);
  }

  // Event method to be called on mouse enter and on mouse leave
  hover(color: string) {
    if (color !== '') {
      // Mouse enter   
      this.renderer.setElementStyle(this.el.nativeElement, 'border-radius', '10px');
      this.renderer.setElementStyle(this.el.nativeElement, 'box-shadow', `0px 0px 30px 0px ${color}`);
    } else {
      // Mouse leave           
      this.renderer.setElementStyle(this.el.nativeElement, 'border-radius', '30px');
      this.renderer.setElementStyle(this.el.nativeElement, 'box-shadow', 'none');
    }
  }

}
