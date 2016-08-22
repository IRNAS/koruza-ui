import {Input, Directive, HostBinding} from '@angular/core';

@Directive({
  selector:'[layout]'
})
export class LayoutDirective{
  @Input() layout: string;
  @HostBinding('style.align-items') @Input('alignItems') alignItems: string;
  @HostBinding('style.display') display = 'flex';

  @HostBinding('style.flex-direction')
  get direction(){
    return (this.layout === 'column') ? 'column': 'row';
  }
}
