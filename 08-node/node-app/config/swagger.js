const students = require('../docs/student.swagger.js');

const swaggerDocument = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: "Dan's node api",
        description: "The documentation for the _nology self-paced course Node API, designed to teach server-side programming to trainees.",
        contact: {
            name: '_nology',
            email: 'Dan',
            url: 'https://nology.io'
        }
    },
    servers: {
        url: 'hhtps://localhost:3000/',
        description: 'Local Server'
    },
    tags: {
        name: 'Students'
    },
    paths: {
        "/api/students": {
            get: students.findAll,
            post: students.createStudent
        },
        "/aoi/students/:id": {
            get: students.find,
            delete: students.deleteStudent
        }
    }
}

module.exports = swaggerDocument;