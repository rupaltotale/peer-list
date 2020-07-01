export default function (server) {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */
  // const list = server.createList('person', 5);
  const list = server.createList('person', 2, {
    reporters: server.createList('person', 3),
    peers: server.createList('person', 3),
  });
  console.log(list);
}
