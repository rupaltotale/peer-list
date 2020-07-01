import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class IndexRoute extends Route {
  @service store;
  async model() {
    // console.log(
    //   this.store.findAll('person').then((results) =>
    //     results.filter((site) => {
    //       return site.get('relationship') === 'tx';
    //     })
    //   )
    // );
    // return RSVP.hash({
    //   root: this.store.query('person', { relationship: 'dp' }),
    //   peer: this.store.query('person', { relationship: 'peer' }),
    // });
    return RSVP.hash({
      root: this.store.find('person', 1),
      all: this.store.findAll('person'),
    });
    // return this.store.findAll('person');
  }
}
