/* Humans Collection */
class Humans {

  constructor (db) {
    console.log("Humans Collection constructor")
    this.db = db;
  }

  fetch () {
    return new Promise((resolve, reject) => {
      this.db.find({}, (err, docs) => {
        if (err) {
          reject(err)
        } else {
          resolve(docs);
        }
      });
    });
  }
}

export default Humans;

