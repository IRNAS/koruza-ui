import {PLATFORM_DIRECTIVES, provide} from '@angular/core';
import {LayoutDirective} from './layout';
import {FlexDirective} from './flex';

export {LayoutDirective, FlexDirective};

export function provideDirectives() {
  return [
    provide(PLATFORM_DIRECTIVES, {useValue: LayoutDirective, multi: true}),
    provide(PLATFORM_DIRECTIVES, {useValue: FlexDirective, multi: true}),
  ]
}
