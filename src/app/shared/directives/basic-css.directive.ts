import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBasicCss]'
})
export class BasicCssDirective implements OnInit {

  constructor(private eleref : ElementRef, private renderer : Renderer2) { }

  ngOnInit(): void {
    // console.log(this.eleref.nativeElement)
    // this.eleref.nativeElement.style.backgroundColor = 'yellow';
    // this.eleref.nativeElement.style.padding= '10px';
   
    this.renderer.setStyle(this.eleref.nativeElement, "background-color", "orange")
  }
 @HostListener('mouseover') onMouseOver(){
  this.renderer.setStyle(this.eleref.nativeElement,"background-color","hotpink")
 }

 @HostListener('mouseout') onMouseOut(){
  this.renderer.setStyle(this.eleref.nativeElement, "background-color", "orange")
 }
}






