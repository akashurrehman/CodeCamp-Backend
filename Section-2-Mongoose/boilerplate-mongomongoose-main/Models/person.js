const mongoose=require('mongoose');
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

const Person=mongoose.model('Person',person);

module.exports=Person;