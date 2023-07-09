export class IPHandler {
  private ipObj: { [k: string]: number };

  constructor() {
    this.ipObj = {};
  }

  connect(ip: string) {
    console.log("this.ipObj[ip]: ", this.ipObj[ip]);
    if (this.ipObj[ip] > 2) return false;
    if (this.ipObj[ip] === 0) {
      delete this.ipObj[ip];
    }
    this.ipObj[ip] = this.ipObj[ip] === undefined ? 0 : this.ipObj[1] + 1;
    setTimeout(() => {
      if (!this.ipObj) {
        return;
      }
      if (this.ipObj) {
        this.ipObj[ip] = this.ipObj[ip] - 1;
      }
    }, 1000);
    return true;
  }

  getIpObj() {
    return this.ipObj;
  }
}
