import { SchemaCollection, bind, combineSchemas } from '@cypress/schema-tools';


export const schemas: SchemaCollection = combineSchemas(

);

export const api = bind({ schemas });
/*
  api has methods to validate, sanitize, etc. objects against "schemas"
  {
    assertSchema: [Function],
    schemaNames: [ 'postTodoRequest' ],
    getExample: [Function],
    sanitize: [Function],
    validate: [Function]
  }
*/
