export default function (server) {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */
  // const list = server.createList('person', 5);
  const list = server.createList('person', 1, {
    reporters: server.createList('person', 8),
    peers: server.createList('person', 1),
  });
  // console.log(list[0].peers.models);
  const root = server.create('person', {
    reporters: list.concat(list[0].peers.models),
  });
  // console.log(root);
  // console.log(list);
}
