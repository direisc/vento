export enum LoaderTypes {
  START = '@loading/START',
  STOP = '@loading/STOP',
}

export interface LoaderState {
  show: boolean;
}
