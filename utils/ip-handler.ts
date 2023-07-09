export class IPHandler {
  private ipObj: { [k: string]: number };

  constructor() {
    this.ipObj = {};
  }

  connect(ip: string) {
    if (this.ipObj[ip] > 2) return false;

    this.ipObj[ip] = this.ipObj[ip] === undefined ? 0 : this.ipObj[ip] + 1;
    setTimeout(() => {
      if (!this.ipObj[ip]) {
        return;
      }
      if (this.ipObj[ip] === 0) {
        delete this.ipObj[ip];
      }
      if (this.ipObj[ip]) {
        this.ipObj[ip] = this.ipObj[ip] - 1;
      }
    }, 10000);
    return true;
  }

  getIpObj() {
    return this.ipObj;
  }
}
