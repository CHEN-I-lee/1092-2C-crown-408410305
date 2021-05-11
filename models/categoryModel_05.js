const db = require('../utils/database');

const category_05 = class category_05{
    constructor(id,name,size,remote_url,local_url){
        this.id = id;
        this.name = name;
        this.size = size;
        this.remote_url = remote_url;
        this.local_url = local_url;
    }

    static fetchAll(){
        return db.execute('SELECT * from category_05');
    }
}

module.exports = category_05;