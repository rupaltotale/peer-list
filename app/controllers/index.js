import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createPerson() {
      const newPeer = this.newPeer;
      this.set('newPeer', '');
      const newRecord = this.store.createRecord('person', {
        name: newPeer,
        relationship: 'dp',
      });
      newRecord.save().then(() => {
        this.model.directReport.content.addObject(newRecord._internalModel);
      });
    },
  },
});
