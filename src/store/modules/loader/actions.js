import Types from './types';

export function start() {
  return {
    type: Types.START,
  };
}

export function stop() {
  return {
    type: Types.STOP,
  };
}
