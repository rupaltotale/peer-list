import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class PersonComponent extends Component {
  @service store;
  @tracked isEditting = false;
  @tracked newName = this.args.person.name;

  @action
  deletePerson(person) {
    let delPerson = this.store.peekRecord("person", person.id);
    delPerson.destroyRecord();
  }

  @action
  updatePerson(person) {
    let newName = this.newName;
    this.store.findRecord("person", person.id).then(function (updatedPerson) {
      // ...after the record has loaded
      updatedPerson.name = newName;
      person.save();
    });
    this.toggleEditting();
  }

  @action
  toggleEditting() {
    this.isEditting = !this.isEditting;
    if (this.isEditting) {
      this.newName = this.args.person.name;
    }
  }
}
