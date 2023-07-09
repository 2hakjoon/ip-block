export class IPHandler {
  private ipObj: { [k: string]: number };

  constructor() {
    this.ipObj = {};
    setInterval(() => {
      for (let ip of Object.keys(this.ipObj)) {
        if (this.ipObj[ip]) {
          this.ipObj[ip] = this.ipObj[ip] - 1;
        }
        if (this.ipObj[ip] === 0) {
          delete this.ipObj[ip];
        }
      }
    }, 3333);
  }

  connect(ip: string) {
    if (this.ipObj[ip] > 2) return false;

    this.ipObj[ip] = this.ipObj[ip] === undefined ? 1 : this.ipObj[ip] + 1;
    return true;
  }

  getIpObj() {
    return this.ipObj;
  }
}
