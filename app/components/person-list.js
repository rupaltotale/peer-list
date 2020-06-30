import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PersonListComponent extends Component {
  @service store;
  @tracked newPeer = '';

  @action
  createPerson() {
    const newPeer = this.newPeer;
    this.newPeer = '';
    const newRecord = this.store.createRecord('person', {
      name: newPeer,
      relationship: this.args.relationship,
    });
    newRecord.save().then(() => {
      this.args.directReport.content.addObject(newRecord._internalModel);
    });
  }
}
