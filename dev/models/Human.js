
class Human {
  constructor (db, fields={}) {
    console.log("Human constructor, fields:", fields);
    this.db = db;
    this.fields = fields;
  }

  findOne (id) {
    return new Promise((resolve, reject) => {
      this.db.findOne({ _id: id }, (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data);
        }
      });
    });
  }

  delete (id) {
    return new Promise((resolve, reject) => {
      this.db.remove({ _id: id }, {}, (err, numRemoved) => {
        if (err) {
          reject(err)
        } else {
          resolve(numRemoved);
        }
      });
    });
  }


  insert () {
    return new Promise((resolve, reject) => {
      this.db.insert(this.fields, (err, newDoc) => {
        if (err) {
          reject(err)
        } else {
          resolve(newDoc);
        }
      });
    });
  }

  update (id) {
    return new Promise((resolve, reject) => {
      this.db.update({_id:id},this.fields, {}, (err, newDoc) => {
        if (err) {
          reject(err)
        } else {
          resolve(newDoc);
        }
      });
    });
  }


}

export default Human;
