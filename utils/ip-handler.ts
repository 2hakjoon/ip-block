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
    this.ipObj[ip] = this.ipObj[ip] === undefined ? 0 : this.ipObj[ip] + 1;
    console.log("this.ipObj[ip]: ", this.ipObj[ip]);
    setTimeout(() => {
      if (!this.ipObj[ip]) {
        return;
      }
      if (this.ipObj[ip]) {
        this.ipObj[ip] = this.ipObj[ip] - 1;
      }
    }, 1000);
    return true;
  }

  getIpObj() {
    return this.ipObj;
  }
}
