import { Factory } from "ember-cli-mirage";

export default Factory.extend({
  name(i) {
    const names = ["Tin Hon Ng", "Steven Pham", "Dylan Harris"];
    return `${names[i]}`; // Movie 1, Movie 2, etc.
  },

  //   year() {
  //     let min = 1950;
  //     let max = 2019;

  //     return Math.floor(Math.random() * (max - min + 1)) + min;
  //   },

  //   rating: "PG-13",
});
