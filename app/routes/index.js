import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
export default class IndexRoute extends Route {
  @service store;
  async model() {
    return this.store.findAll("person");
  }
  async update(person, name) {
    this.store.findRecord("person", person.id).then(function (updatedPerson) {
      // ...after the record has loaded
      updatedPerson.name = name;
    });
  }
}
