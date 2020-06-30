import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class IndexRoute extends Route {
  @service store;
  async model() {
    return RSVP.hash({
      directReport: this.store.query('person', { relationship: 'dp' }),
      peer: this.store.query('person', { relationship: 'peer' }),
    });
    // return this.store.findAll('person');
  }
}
