import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PersonChainComponent extends Component {
  @service store;
  //   @tracked peers;
  get peers() {
    return this.getForPerson('peers');
  }

  get reporters() {
    return this.getForPerson('reporters');
  }

  getForPerson(property) {
    const members = [];
    if (this.args.person.get(property)) {
      this.args.person.get(property).forEach((id) => {
        members.push(this.store.peekRecord('person', id));
      });
    }
    // console.log(this.args.person.peers);
    // console.log(this.store.findAll('person'));
    return members;
  }
}
