export default function () {
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */
  // this.resource("people");
  // this.namespace = "api";

  // this.get("/people", (schema, request) => {
  //   return schema.people.all();
  // });
  // this.get("/people/:id", (schema, request) => {
  //   return schema.people.find(request.params.id);
  // });
  this.get('/people', (schema, request) => {
    // console.log(request.queryParams);
    // console.log(schema.people.findBy(request.queryParams));
    // console.log(schema.people.where(request.queryParams));
    return schema.people.where(request.queryParams);
  });
  // this.get('/people');

  this.get('/people/:id');
  this.post('/people');
  this.patch('/people/:id');
  this.del('/people/:id');
  this.passthrough();
}
