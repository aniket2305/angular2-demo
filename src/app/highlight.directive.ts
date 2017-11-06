import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[myHighlight]'
})

export class HighlightDirective {
    constructor( private el:ElementRef){
        
    }

    @HostListener('mouseenter') onMouseEnter(){
        this.highlight(this.highlightColor || 'green');
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.highlight(null);
    }    

    highlight (color:string){
        this.el.nativeElement.style.backgroundColor = color;
    }

    @Input('myHighlight') highlightColor: string;

}