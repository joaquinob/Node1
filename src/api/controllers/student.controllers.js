const Student = require('../models/student.model');

const add = async (req, res) => {
        try{
            const body = req.body;
            const newStudent = new Student(body);
            const createStudent = await newStudent.save();
            return res.json({
                sucess: true,
                student: createStudent
            }) 
        } catch(error){
            console.error('Error')
        }
};

module.exports = { add };