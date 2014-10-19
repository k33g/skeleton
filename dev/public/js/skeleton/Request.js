class Request {

  constructor (url = "/") {
    this.request = new XMLHttpRequest();
    this.url = url;
    this.method = null;
    this.data = null;
  }

  sendRequest () { /*json only*/

    return new Promise((resolve, reject) => {
      this.request.open(this.method, this.url);
      this.request.onload = () => {
        // If the request was successful
        if (this.request.status === 200) {
          resolve(JSON.parse(this.request.response)); // JSON response
        } else { /* oups */
          reject(Error(this.request.statusText));
        }
      }
      // Handle network errors
      this.request.onerror = function() {
        reject(Error("Network Error"));
      };

      this.request.setRequestHeader("Content-Type", "application/json");
      this.request.send(this.method === undefined ? null : JSON.stringify(this.data));
    });
  }

  get () {
    this.method = "GET";
    return this.sendRequest();
  }

  post (jsonData) {
    this.method = "POST";
    this.data = jsonData;
    return this.sendRequest();
  }

  put (jsonData) {
    this.method = "PUT";
    this.data = jsonData;
    return this.sendRequest();
  }

  delete () {
    this.method = "DELETE";
    return this.sendRequest();
  }
}

export default Request;