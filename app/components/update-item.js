import Component from '@ember/component'

export default Component.extend({
  // model (params) {
    // return this.get('store').findRecord('items', params.this.item)
  // },
  actions: {
    updateItem () {
      this.sendAction('updateItem', this.get('item'))
    }
  }
})
