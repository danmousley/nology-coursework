const findAll = {
    tags: ["Students"],
    description: "GET all students - receive a list of all the students",
    operationId: "findAll", 
    responses: {
        200: {
            description: "The students were received",
            content: "application/json"
        }
    }
}

const find = {
    tags: ["Students"],
    description: "GET one student - receive particular student using their id",
    operationId: "find", 
    responses: {
        200: {
            description: "The student were received",
            content: "application/json"
        }
    }
}

const createStudent = {
    tags: ["Students"],
    description: "POST a student - adds a student to the list of students",
    operationId: "createSTudent", 
    responses: {
        201: {
            description: "The student was succesfully created",
            content: "application/json"
        }
    }
}

const deleteStudent = {
    tags: ["Students"],
    description: "DELETE one student - remove a student from the list of students using its id",
    operationId: "deleteStudent", 
    responses: {
        202: {
            description: "The student was succesfull deleted",
            content: "application/json"
        }
    }
}

module.exports = { findAll, find, createStudent, deleteStudent}