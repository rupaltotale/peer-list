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
      // this.store.findRecord('person', 1, { include: 'peers,reporters' })

      all: this.store.findAll('person'),
      root: this.store.findRecord('person', 8, {
        include: 'manager,reporters,peers',
      }),
    });
    // return this.store.findAll('person');
  }
}
