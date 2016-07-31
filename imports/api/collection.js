import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';

const Parents = new Mongo.Collection("parents");

const Parent = Class.create({
    name: "Parent",
    collection: Parents,
    typeField: 'type',
    fields: {
        name: String
    }
});

const Child = Parent.inherit({
    name: "Child",
    fields: {
        toy: String
    }
});

Meteor.methods({
    "test"() {
        const child = new Child({name: "Bobby", toy: "Stick"});
        const childId = child.save();
        console.log("Parent query: ", Parent.findOne({_id: childId}));
        console.log("Child query: ", Child.findOne({_id: childId}));
    },
});
