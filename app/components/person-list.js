import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PersonListComponent extends Component {
  @service store;
  @tracked newPerson = '';

  @action
  createPerson() {
    const newPerson = this.newPerson;
    this.newPerson = '';
    const newRecord = this.store.createRecord('person', {
      name: newPerson,
      relationship: this.args.relationship,
    });
    newRecord.save().then(() => {
      this.args.members.content.addObject(newRecord._internalModel);
    });
  }
}
