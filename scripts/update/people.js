// update documents

// updates first chris
db.people.update({"given_name":"Chris"}, {$set: {"given_name":"Christopherson"}})

//update all that fit criteria
db.people.update({"given_name":"Chris"}, {$set: {"given_name":"Christopherson"}}, {multi:true})
