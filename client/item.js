Template.item.events({
  'submit form': function(e, tmpl) {
    e.preventDefault();

    var data = Router.getData(),
        item = {},
        attrs = [
          'name',
          'category',
          'notes',
          'location',
          'count',
          'nextService',
        ];

    _.each(attrs, function(attr) {
      item[attr] = tmpl.find('#' + attr).value;
    });

    if (data.item) {
      Items.update(data.item._id, {$set : item});
    } else {
      var id = Items.insert(item);
      Router.go(Router.path('item', {_id: id}));
    }
  }
});

Template.todo.events({
  'click .done': function(e, tmpl) {
    // https://github.com/meteor/meteor/issues/153
    e.preventDefault();
    var item = Router.getData().item,
        index = _.indexOf(item.todos, this),
        modifier = {$set: {}};
        modifier.$set["todos." + index + ".completedAt"] = new Date();
        Items.update(item._id, modifier);
  },
  'submit form': function(e, tmpl) {
    e.preventDefault();
    var item = Router.getData().item;
        index = _.indexOf(item.todos, this),
        modifier = {$set: {}};
        modifier.$set["todos." + index + ".task"] = tmpl.find('.task').value;
        modifier.$set["todos." + index + ".due"] = tmpl.find('.due').value;
        Items.update(item._id, modifier);
    Items.update(item._id, modifier);
  },
});

Template.newTodo.events({
  'submit form': function(e, tmpl) {
    e.preventDefault();
    Items.update(Router.getData().item._id, {
      $push : {
        todos : {
          task: tmpl.find('.task').value,
          due: tmpl.find('.due').value,
        }
      }
    });
    Router.go(Router.path('item', Router.current().params));
  },
});
