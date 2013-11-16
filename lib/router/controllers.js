ItemController = RouteController.extend({
  template: 'item',

  data: function() {
    var item = Items.findOne(this.params._id);
    return {
      item: item,
      todos: item ? item.todos : [],
    }
  },
});
