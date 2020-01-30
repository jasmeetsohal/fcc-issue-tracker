const mongo = {
  db:null,
  setDB:(db)=>{
    this.db = db;
  },
  getDB:()=>this.db,
  save:(query)=>{
      return new Promise((resolve,reject)=>{
        this.db.collection('issues').insert(query,(err, result)=>{
          if(err) reject(err);
          resolve(result);
        });
      });
  },
  update:(query)=>{
    return new Promise((resolve,reject)=>{
      this.db.collection('issues').update(query,(err,result)=>{
        if(err) reject(err);
        resolve(result);
      });
    });
  },
  delete:(query)=>{
    return new Promise((resolve,reject)=>{
      this.db.collection('issues').remove(query,(err,result)=>{
        if(err) reject(err);
        resolve(result);
      })
    });
  }
};

module.exports = mongo; 