import { createSchemaType, getDataParsed, createRelations } from './helpers' 

export const GraphQL = (name = '') => (definition = {}) => {
    const { Mutation, Query, Subscription, ...types } = definition

    return {
        name, 
        Types: createSchemaType(name)(types),
        Query: getDataParsed(Query, ':'),
        Mutation: getDataParsed(Mutation, '('),
        Subscription: getDataParsed(Subscription, ':'),
        Relations: createRelations(name)(types),
    }
} 