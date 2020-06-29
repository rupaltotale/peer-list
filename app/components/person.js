import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class PersonComponent extends Component {
  @service store;
  @tracked isEditting = false;

  @action
  deletePerson(person) {
    let delPerson = this.store.peekRecord("person", person.id);
    delPerson.destroyRecord();
  }

  @action
  updatePerson(person) {
    this.store.findRecord("person", person.id).then(function (updatedPerson) {
      // ...after the record has loaded
      updatedPerson.name = person.name;
      person.save();
    });
    this.toggleEditting();
  }

  @action
  toggleEditting() {
    this.isEditting = !this.isEditting;
    if (this.isEditting) {
      //   this.person.name.focus();
    }
  }
}
