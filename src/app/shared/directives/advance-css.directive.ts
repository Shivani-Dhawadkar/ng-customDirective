import { HostListener } from "@angular/core";
import { Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appAdvanceCss]'
})
export class AdvanceCssDirective implements OnInit {

  constructor(private eleref : ElementRef, private renderer :Renderer2  ) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.eleref.nativeElement, 'transform', 'scale(.115)')
    this.renderer.setStyle(this.eleref.nativeElement, "background-color", "yellowgreen")
  }
  
  @HostListener('mouseover') onMouseOver(){
    this.renderer.setStyle(this.eleref.nativeElement, 'transform', 'scale(2)')
  }

  @HostListener('mouseout') onMouseOut(){
    this.renderer.setStyle(this.eleref.nativeElement, 'transform', 'scale(.115)')
  }
}
