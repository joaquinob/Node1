//bson(string, boolean, number, array, objectId) == json(string, boolean, number, array)

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: { type: String, require: true},
    surname: { type: String, require: true},
    age: { type: Number}
},
{
    collection: 'students'
}
);

const Student = mongoose.model('students', studentSchema);
module.exports = Student;