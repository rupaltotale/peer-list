import Model, { attr, hasMany, belongsTo } from '@ember-data/model';
export default class PersonModel extends Model {
  @attr name;
  @hasMany('person', { inverse: 'manager' }) reporters;
  @belongsTo('person', { inverse: 'reporters' }) manager;
}
