// TODO: Remove peers attribute
import Model, { attr, hasMany, belongsTo } from '@ember-data/model';
export default class PersonModel extends Model {
  @attr name;
  @hasMany('person', { inverse: 'manager' }) reporters;
  @hasMany('person', { inverse: 'peers' }) peers;
  @belongsTo('person', { inverse: 'reporters' }) manager;
}
