import { Factory } from 'ember-cli-mirage';

const names = [
  ['Tin Hon Ng', 'dp'],
  ['Steven Pham', 'dp'],
  ['Dylan Harris', 'dp'],
  ['Dan Zitter', 'peer'],
];
export default Factory.extend({
  name(i) {
    return `${names[i][0]}`; // Movie 1, Movie 2, etc.
  },

  relationship(i) {
    return `${names[i][1]}`;
  },
});
