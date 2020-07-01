import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return `Name ${i}`; // Movie 1, Movie 2, etc.
  },

  // reporters(i) {
  //   return names[i][1];
  // },

  // peers(i) {
  //   return names[i][2];
  // },
});
