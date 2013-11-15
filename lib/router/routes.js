Router.map(function() {
  this.route('home', {
    path: '/',

    load: function() {
      if (!Session.get('sort'))
        Session.set('sort', {name : -1});
    }
  });

  this.route('item', {
    path: ':_id',

    template: 'item',

    data: function() {
      return {
        item: Items.findOne(this.params._id),
      }
    }
  });

  this.route('new', {
    path: 'new',

    template: 'item',
  });
});
