var Database = require('./connection.js'); 
var dbconfig = require('./dbconfig.js');

// create instance of database
const database = new Database( dbconfig );
//console.log(database);

const useBurgers = `USE burgers_db`;
const getBurgers = `select * from burgers`;
module.exports = {


        
    selectAll = database.query(useBurgers)
        .then((rows)=> {
            return database.query(getBurgers)
        })
        .then((rows,err)=>{
            if (err) throw err;
            var string =  JSON.stringify(rows);
            var json =  JSON.parse(string);
            console.log("rows returned", json);

            return json;
        }),


    insertOne: (name,bool) => {
        
        const burgers = {
            name: name,
            bool: bool    
        };
        
        const inBurgers = `
            INSERT INTO 
                burgers(burger_name, devoured)
            VALUES
                ("${name}","${bool}")`;
        
        database.query(useBurgers)
        .then((rows)=> {
            return database.query(inBurgers)
        })
        .then((rows,err)=>{
            if (err) throw err;
            //var string =  JSON.stringify(rows);
            //var json =  JSON.parse(string);
            console.log("rows returned", rows);

            return rows;
        });
    },

    updateOne: (name,bool,id) => {
        
        const burgers = {
            name: name,
            bool: bool,
            id: id
        };
        
        let upBurgers = `
            UPDATE burgers 
                SET 
                    burger_name = "${name}",
                    devoured = "${bool}"
                WHERE 
                    id="${id}"`;
                    
        database.query(useBurgers)
        .then((rows)=> {
            return database.query(upBurgers)
        })
        .then((rows,err)=>{
            if (err) throw err;
            //var string =  JSON.stringify(rows);
            //var json =  JSON.parse(string);
            console.log("rows returned", rows);
            return rows;
        });
    }
};