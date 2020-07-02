import { Factory } from 'ember-cli-mirage';
const names = [
  'Tianyu Wang',
  'Zhiyuan Yang',
  'Wenhan Shi',
  'John C Moon',
  'Tin Hon Ng',
  'Yumo Liu',
  'Dylan Harris',
  'Steven Pham',
  'Darren Sawyer',
  'Prashant Savanagouder',
];
export default Factory.extend({
  name(i) {
    return names[i];
  },
});
