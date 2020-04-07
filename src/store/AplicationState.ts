import { LoaderState } from './modules/loader/types';

export default interface ApplicationState {
  loader: LoaderState;
  auth: any;
}
