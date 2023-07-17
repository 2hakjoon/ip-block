export class IPHandler {
  private ipObj: { [k: string]: number };
  private persistIpObj: { [k: string]: number };

  constructor() {
    this.ipObj = {};
    this.persistIpObj = {};
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
    this.ipObj[ip] = this.ipObj[ip] === undefined ? 1 : this.ipObj[ip] + 1;

    this.persistIpObj[ip] =
      this.persistIpObj[ip] === undefined ? 1 : this.persistIpObj[ip] + 1;

    if (this.ipObj[ip] > 3) {
      return false;
    }
    return true;
  }

  getIpObj() {
    return this.ipObj;
  }

  getConnectCount(ip: string) {
    return this.ipObj[ip] || 0;
  }

  getPersistIpObj() {
    return this.persistIpObj;
  }

  getPersistConnectCount(ip: string) {
    return this.persistIpObj[ip] || 0;
  }
}
