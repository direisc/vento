import { LoaderTypes } from './types';

export function start() {
  return {
    type: LoaderTypes.START,
  };
}

export function stop() {
  return {
    type: LoaderTypes.STOP,
  };
}
