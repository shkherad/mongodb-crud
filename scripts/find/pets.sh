db.pets.find().sort( { "kind": 1, "bornOn": -1 } );

db.pets.find({ $or: [ { "name": "Max" }, { "name": "Star" } ] })

db.pets.find( { "name": "Max", "kind": "cat" } )
