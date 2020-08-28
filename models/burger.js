 
const { selectAll, insertOne, updateOne } = require('../config/orm.js');
const select = selectAll();
console.log(
    //insertOne('testburger',0)
    "burger ",select
    //updateOne('testburger2',1,2)
);

module.exports = {
    select(){
        return selectAll()
    },
    insert(name,bool){
        return insertOne(name,bool)
    },
    update(name,bool,id){
        return updateOne(name,bool,id)
    }
};