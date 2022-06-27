class Choix {
  constructor(db) {
    this.db = db
  }

  // pour creer une ligne avec dragons ou evoli
  create(nom) {
    return new Promise((resolve, reject) => {
      const clic = {
        nom : nom
      };
      //on insert le nom dans la bdd
      this.db.choix.insert(clic, function(err, newDoc){
        if(err)
          resolve();
        else  
          resolve(newDoc);
      })
    });
  }

  //pour recuperer les donnees
  get() {
    return new Promise((resolve, reject) => {
      this.db.choix.find({}, function(err, doc){
        if(doc){
          resolve(doc);
        }else{
          resolve();
        }
      });
    });
  }
}

exports.default = Choix;

