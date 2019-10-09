import { Directive, HostBinding, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.show') isOpen = false;

  @HostListener('document:click', ['$event']) toggleDropdown(eventData: Event) {

    this.isOpen = this.elementRef.nativeElement.contains(eventData.target) ? !this.isOpen : false;

    const dropdown = this.elementRef.nativeElement.querySelector('.dropdown-menu');
    if (this.isOpen) {
      this.renderer.addClass(dropdown, 'show');
    } else {
      this.renderer.removeClass(dropdown, 'show');
    }

  }

  constructor(private elementRef: ElementRef
            , private renderer: Renderer2) { }

}
