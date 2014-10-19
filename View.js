class View {

  constructor (options={}) {
    Object.assign(this, options);
  }

  html (code) {
    this.element.innerHTML = code;
  }

  // transformer la vue en observer
  listen (observable, callback) {
    observable.addObserver(this);
    // la vue devient un observer
    this.update = callback;
  }

  show () {
    this.element.style.display = "block"
  }

  hide () {
    this.element.style.display = "none"
  }

  toggle () {
    (this.element.style.display == "block" || this.element.style.display == "") ? this.hide() : this.show();
  }
}

export default View;
