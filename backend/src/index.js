import Koa from 'koa';
import mount from 'koa-mount'; 
import { createHandler } from 'graphql-http/lib/use/koa';
import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt } from 'graphql';
import cors from '@koa/cors';

const dbInMemory = [
  {id : 1, value : 'world'}, 
  {id : 2, value:'darling'}, 
  {id : 3, value:'how are you?'},
  {id : 4, value :'i am fine'},
]

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      hello: {
        type: new GraphQLList(GraphQLObjectType()),
        resolve: () => dbInMemory,
      },
    },
  }),
});

const app = new Koa();
app.use(cors());
app.use(mount('/api', createHandler({ schema })));

app.listen({ port: 8001 });
console.log('Listening to port 8001');
