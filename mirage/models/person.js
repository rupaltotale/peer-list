import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  reporters: hasMany('person', { inverse: 'manager' }),
  peers: hasMany('person', { inverse: `peers` }),
  manager: belongsTo('person', { inverse: 'reporters' }),
});
