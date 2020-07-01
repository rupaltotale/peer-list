import { Factory } from 'ember-cli-mirage';

const names = [
  ['Prashant S', [2, 3, 4], [5]], //1
  ['Tin Hon Ng', [], [3, 4]], //2
  ['Steven Pham', [], [2, 4]], //3
  ['Dylan Harris', [], [2, 3]], //4
  ['Dan Zitter', [], [1]], //5
];
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
