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
    return this.args.person[property];
  }
}
