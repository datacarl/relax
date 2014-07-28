Router.map(function() {
  this.route('home', {
    path: '/',

    onRun: function() {
      if (!Session.get('sort'))
        Session.set('sort', {name : -1});
    }
  });

  this.route('item', {
    path: ':_id',

    yieldTemplates: {
      todos : {to: 'todo'}
    },

    data: function() {

      var item = Items.findOne(this.params._id);
      return {
        item: item,
        todos: item ? item.todos : [],
      }
    }
  });

  this.route('new', {
    path: 'new',

    template: 'item',
  });

  this.route('newTodo', {
    path: ':_id/new-todo',

    yieldTemplates: {
      newTodo : {to: 'todo'}
    },

    controller: ItemController
  });
});
