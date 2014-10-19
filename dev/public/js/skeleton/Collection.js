import Observable from './Observable';
import Request from './Request';

class Collection extends Observable {
  // ajout de l'url
  constructor (model, url="/", models = [], observers = []) {
    this.model = model;
    this.models = models;
    this.url = url;
    super(observers);
  }

  toString () {
    return JSON.stringify(this.models);
  }


  add (model) {
    this.models.push(model);
    this.notifyObservers({event: "add", model: model});
    return this;
  }

  each (callbck) {
    this.models.forEach(callbck)
  }

  filter (callbck) {
    return this.models.filter(callbck)
  }

  size () { return this.models.length; }

  /*--- sync ---*/

  fetch () {
    return new Promise((resolve, reject) => {

      new Request(this.url).get().then((models) => {
        this.models = []; /* empty list */

        models.forEach((fields) => {
          this.add(new this.model(fields));
        });

        this.notifyObservers({event: "fetch", models:models});
        resolve(models);
      })
      .catch((error) => reject(error))

    });

  }


}

export default Collection;