const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


const app =  express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Hello World',
            version: '1.0.0',
        },
    },
    apis: ['app.js'], // files containing annotations as above
};

const swaggerDocs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

/**
 * @swagger
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
app.get('/', (req,res, next) => {
    const data = [
        {
            id: 1,
            title: 'Tarea 1',
            body: 'Tarea creada de documentacion '
        }
    ]
    res.status(200).json({
        success: true,
        msg: 'data enviada',
        data
    })
})


app.listen(5000, () => console.log('Server is rinning in port 5000'))
