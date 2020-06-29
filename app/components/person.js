import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";

export default class PersonComponent extends Component {
  @service store;

  @action
  deletePerson(person) {
    let post = this.store.peekRecord("person", person.id);
    post.destroyRecord();
  }
}
