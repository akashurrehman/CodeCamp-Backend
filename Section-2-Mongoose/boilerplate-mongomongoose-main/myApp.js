const { Model } = require('mongoose');
const mongoose=require('mongoose')

require('dotenv').config();


let Person;
const Schema=mongoose.Schema;

const person=new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    favoriteFoods:{
        type:[String]
    }
})

Person=mongoose.model('Person',person);

const createAndSavePerson = (done) => {
 let p=new Person({name: "Jane Fonda", age: 84, favoriteFoods: ["eggs", "fish", "fresh fruit"]});
 p.save(function(err,data){
  if(err)
  return console.log(err)
  done(null, data);
 })
};
var arrayOfPeople = [
  {name: "Frankie", age: 74, favoriteFoods: ["Del Taco"]},
  {name: "Sol", age: 76, favoriteFoods: ["roast chicken"]},
  {name: "Robert", age: 78, favoriteFoods: ["wine"]}
];

var createManyPeople = function(arrayOfPeople, done) {
  Person.create(arrayOfPeople, function (err, people) {
    if (err) return console.log(err);
    done(null, people);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({name:personName},function(err,data){
    if(err)
    return console.log(err)
    done(null , data);  
  })
  
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods:food},function(err,data){
    if(err)
    return console.log(err)
    done(null , data);
  })
  
};

const findPersonById = (personId, done) => {
  Person.findById({_id:personId},(err,data)=>{
    if(err)
    return console.log(err)
    done(null , data);  
  })
  
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById(personId, (err, person) => {
    if(err) return console.log(err); 
  
    // Array.push() method to add "hamburger" to the list of the person's favoriteFoods
    person.favoriteFoods.push(foodToAdd);

    // and inside the find callback - save() the updated Person.
    person.save((err, updatedPerson) => {
      if(err) return console.log(err);
      done(null, updatedPerson)
    })
  })
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate({name:personName},{age:ageToSet},{ new: true },function(err,data){
      if(err)
      return console.log(err)
    done(null, data);
    })
  
};

const removeById = (personId, done) => {

  Person.findByIdAndRemove({_id:personId},function(err,data){
    if(err)
      return console.log(err)
    done(null , data);
  })
  
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove({name:nameToRemove},function(err,data){
    if(err){
      return console.log(err)
    }
    done(null , data);
  })
  
};

const queryChain = (done) => {
  const foodToSearch = "burrito";
  Person.find({favoriteFoods:foodToSearch})
  .sort({ name: 1 })
  .limit(2)
  .select({age:0})
  .exec(function(err,data){
    if(err)
    {
      return console.log(err)
    }
    done(null , data);
  })
};
mongoose.connect(process.env.MONGO_URI);
/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
