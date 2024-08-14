export class EdarErr extends Error {
  status: number;
  msg: string;
  constructor(status: number, msg: string) {
    super();
    this.name = "EdarErr";
    this.msg = msg;
    this.status = status;
  }
}
