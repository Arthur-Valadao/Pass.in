import fastify from "fastify";

const app = fastify()

app.get('/', ()=>{
  return 'Hello World'
})

app.get('/teste', ()=>{
  return 'Hello teste'
})

//Para colocar o projeto no ar
app.listen({port: 3333}).then(()=>{
  console.log('HTTP server running!')
})