import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'RH+',
            version: '1.0.0',
            description:
                'MVP de um sistema de gerenciamento de Recursos Humanos.',
            contact: {
                name: 'Gustavo Bossolani',
                email: 'gustavo.wyd@outlook.com',
            },
            servers: ['http://localhost:3333'],
        },
    },
    apis: ['routes.js'],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
export default {
    serve: swaggerUi.serve,
    setup: swaggerUi.setup(swaggerDocs),
};
