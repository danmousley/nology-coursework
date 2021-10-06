const Student = require("../models/student.js")

const findAll = async (req, res) => {
    const students = await Student.findAll();
    res.status(200).send({ students })
}

const find = async (req, res) => {
    const student = await Student.find(req.params.id)
    console.log(req.params.id)
    res.status(200).send({ student })
}

const createStudent = (req, res) => {
    const newStudent = new Student(req.body);
    const message = newStudent.save()
    res.status(201).send({ message, newStudent })
}

const deleteStudent = async (req, res) => {
    const message = await Student.destroy(req.params.id)
    res.status(202).send({ message })
}

module.exports = { findAll, find, createStudent, deleteStudent }