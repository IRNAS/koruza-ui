import {AuthenticationEffects} from './authentication';
import {KoruzaEffects} from './koruza';

export {AuthenticationEffects};
export {KoruzaEffects};

export const effects = [
  AuthenticationEffects,
  KoruzaEffects
];
