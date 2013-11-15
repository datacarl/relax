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

    console.log(item);

    if (data.item) {
      Items.update(data.item._id, {$set : item});
    } else {
      var id = Items.insert(item);
      Router.go(Router.path('item', {_id: id}));
    }
  }
});
