module.exports = {
    up: QueryInterface => {
        return QueryInterface.bulkInsert(
            'Departamento',
            [
                {
                    NM_DEPTO: 'RECURSOS HUMANOS',
                    CREATED_AT: new Date(),
                    UPDATED_AT: new Date(),
                },
                {
                    NM_DEPTO: 'TECNOLOGIA DA INFORMAÇÃO',
                    CREATED_AT: new Date(),
                    UPDATED_AT: new Date(),
                },
                {
                    NM_DEPTO: 'CONTABILIDADE',
                    CREATED_AT: new Date(),
                    UPDATED_AT: new Date(),
                },
            ],
            {}
        );
    },

    down: () => {},
};
