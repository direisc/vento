export default class Response {
  constructor({ success, status = '', error = '', data = {} }) {
    this.success = success;
    this.status = status;
    this.error = error;
    this.data = data;
  }
}
