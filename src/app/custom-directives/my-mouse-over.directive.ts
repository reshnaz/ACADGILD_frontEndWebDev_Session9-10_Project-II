import { Directive, HostListener, ElementRef, Renderer, Input } from '@angular/core';
import { DatePipe } from '@angular/common'

/* This custom directive highlights the table rows with specific colors
based on the due date of task. */

@Directive({
  selector: '[appMyMouseOver]',
  providers: [DatePipe]
})
export class MyMouseOverDirective {

  constructor(private el: ElementRef, private renderer: Renderer, public datepipe: DatePipe) { }

  // Input variable that stores due date and is used to decide background color.
  @Input('appMyMouseOver') dueDate: Date;

  d2 = Date.parse(this.datepipe.transform(new Date(), 'yyyy-MM-dd'));

  // Event listeners for element hosting the directive
  @HostListener('mouseenter') onMouseEnter() {
    let d1 = Date.parse(this.dueDate.toString());

    /*  Due date > Current Date : YELLOW, 
        Due date < Current Date : RED, 
        Due date = Current Date : GREEN */
    if (d1 === this.d2) {
      this.hover(`green`);
    }
    else if (d1 > this.d2) {
      this.hover(`yellow`);
    }
    else {
      this.hover(`red`);
    }
  }

  /* No color/no effects when mouse leaves row.  */
  @HostListener('mouseleave') onMouseLeave() {
    this.hover(``);
  }

  // Event method to be called on mouse enter and on mouse leave
  hover(color: string) {
    if (color !== '') {
      // Mouse enter   
      this.renderer.setElementStyle(this.el.nativeElement, 'background-color', `${color}`);
    } else {
      // Mouse leave           
      this.renderer.setElementStyle(this.el.nativeElement, 'background-color', `transparent`);
    }
  }

}
