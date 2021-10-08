import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnChanges {
  @Input() appBackground: boolean;
  constructor(public el: ElementRef) {
    this.appBackground = false;
  }
  ngOnChanges() {
    let play: any;
    console.log( "directive ",this.appBackground)
    if (this.appBackground) {
      play = setInterval(() => {
        this.el.nativeElement.scrollTop += 1;
        if (this.el.nativeElement.clientHeight >= (this.el.nativeElement.scrollHeight - this.el.nativeElement.scrollTop))
        this.el.nativeElement.scrollTop = 0;
        if (this.appBackground == false) {
          clearInterval(play);
          this.el.nativeElement.scrollTop = 0;
        }
      }, 40)

    } else {
      clearInterval(play);
      this.el.nativeElement.scrollTop = 0;
    }

  }

}
