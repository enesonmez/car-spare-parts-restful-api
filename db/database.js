var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "./db/car_spares.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('> connected to the SQLite database.')
        db.run(`CREATE TABLE user (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name text, 
                secret_key text UNIQUE, 
                CONSTRAINT secret_key_unique UNIQUE (secret_key)
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO user (name, secret_key) VALUES (?,?)'
                db.run(insert, ["admin","nwbji0iPMnHCJhdwfi1JweED92hYabYc"])
                db.run(insert, ["user","ddAdGVHjyLg4SfU8o6XbPZcxjDLNWmY0"])
            }
        });
        db.run(`CREATE TABLE spare (
                part_no varchar(5) UNIQUE,
                part_name varchar(80), 
                brand varchar(80),
                model varchar(80),
                model_year int,
                picture_url text,
                price varchar(15),
                CONSTRAINT part_no_unique UNIQUE (part_no)
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO spare (part_no, part_name, brand, model, model_year, picture_url, price) VALUES (?,?,?,?,?,?,?)'
                db.run(insert, ["00000","motor","audi","a5",2019,"https://www.otokokpit.com/wp-content/uploads/2019/03/2019-model-audi-a5-sportback-turkiye-1.jpg","500.000"])
                db.run(insert, ["00001","şasi","fiat","doblo",2010,"https://www.auto-data.net/images/f88/Fiat-Doblo-II_1.jpg","200.000"])
                db.run(insert, ["00002","şasi","renault","doblo",2010,"https://www.auto-data.net/images/f88/Fiat-Doblo-II_1.jpg","200.000"])
                db.run(insert, ["00003","şasi","dacca","doblo",2010,"https://www.auto-data.net/images/f88/Fiat-Doblo-II_1.jpg","200.000"])
                db.run(insert, ["00004","jant","mercedes","doblo",2010,"https://www.auto-data.net/images/f88/Fiat-Doblo-II_1.jpg","200.000"])
                db.run(insert, ["00005","şasi","fiat","doblo",2010,"https://www.auto-data.net/images/f88/Fiat-Doblo-II_1.jpg","200.000"])
                db.run(insert, ["00006","şasi","fiat","doblo",2010,"https://www.auto-data.net/images/f88/Fiat-Doblo-II_1.jpg","200.000"])
                db.run(insert, ["00007","şasi","bmw","doblo",2010,"https://www.auto-data.net/images/f88/Fiat-Doblo-II_1.jpg","200.000"])
                db.run(insert, ["00008","vites","audi","a3",2015,"https://www.auto-data.net/images/f88/Fiat-Doblo-II_1.jpg","200.000"])
                db.run(insert, ["00009","şasi","fiat","doblo",2010,"https://www.auto-data.net/images/f88/Fiat-Doblo-II_1.jpg","200.000"])
                db.run(insert, ["00010","şasi","hyundai","accent",2007,"https://www.auto-data.net/images/f88/Fiat-Doblo-II_1.jpg","200.000"])
                db.run(insert, ["00011","direksiyon","fiat","doblo",2010,"https://www.auto-data.net/images/f88/Fiat-Doblo-II_1.jpg","200.000"])
                db.run(insert, ["00012","şasi","fiat","doblo",2010,"https://www.auto-data.net/images/f88/Fiat-Doblo-II_1.jpg","200.000"])
                db.run(insert, ["00013","koltuk","fiat","doblo",2010,"https://www.auto-data.net/images/f88/Fiat-Doblo-II_1.jpg","200.000"])
                db.run(insert, ["00014","şasi","skoda","octavia",2015,"https://www.auto-data.net/images/f88/Fiat-Doblo-II_1.jpg","200.000"])
                db.run(insert, ["00015","motor","fiat","doblo",2010,"https://www.auto-data.net/images/f88/Fiat-Doblo-II_1.jpg","200.000"])
            }
        }); 
    }
});


module.exports = db

