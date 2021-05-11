const db = require('../utils/database');

const clothing_05 = class clothing_05{
    constructor(id,name,cat_id,price,remote_url,local_url){
        this.id = id;
        this.name = name;
        this.cat_id = cat_id;
        this.price = price;
        this.remote_url = remote_url;
        this.local_url = local_url;
    }

    static fetchAll(){
        return db.execute('SELECT * from clothing_05');
    }
    static getProductsByCategory(cid){
        return db.execute('SELECT * from clothing_05 where cat_id = ?', [cid]);
    }
}

module.exports = clothing_05;