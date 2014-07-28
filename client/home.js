Template.home.helpers({
  items: function() {
    var where = {},
        attrs = [
          'name',
          'category',
          'notes',
          'nextService',
          'location',
          'count',
        ],
        options = {
          sort: Session.get('sort'),
        }
    _.each(attrs, function(attr) {
      if (Session.get(attr))
        where[attr] = {$regex : Session.get(attr), $options : 'i'};
    });

    return Items.find(where, options);
  },
});

/** Search when typing in the input fields */
Template.search.events({
  'keyup input': function(e, tmpl) {
    var search = tmpl.find('#' + e.target.id).value;
    Session.set(e.target.id, search);
  }
});

/** Sort when clicking th */
Template.home.events({
  'click th': function(e, tmpl) {
    var sort = {},
        field = e.target.id;

    // If the current sort field is the one clicked, reverse sort order.
    sort[field] = Session.get('sort')[field] == -1 ? 1 : -1;

    Session.set('sort', sort);
  }
});

/** Go to item when clicking it in the list */
Template.itemListItem.events({
  'click tr': function() {
    Router.go(Router.path('item', this));
  }
});

Template.itemListItem.helpers({
  unfinishedTodosCount: function() {
    return _.filter(this.todos, function(todo) {
      return !todo.completedAt;
    }).length;
  }
});

Template.consumables.helpers({
  consumables: function() {
    return Consumables.find({}, {sort: {createdAt: -1}});
  }
});

Template.consumable.events({
  'click #archive': function() {
    if (this.archivedAt)
      Consumables.update(this._id, {$unset : {archivedAt: 1}});
    else
      Consumables.update(this._id, {$set : {archivedAt: new Date}});
  }
});

Template.newConsumable.events({
  'submit #new-consumable': function(e, tmpl) {
    e.preventDefault();
    Consumables.insert({
      name: tmpl.find('#name').value,
      currentCount: tmpl.find('#current-count').value,
      createdAt: new Date,
    })

    tmpl.find('#name').value = '';
    tmpl.find('#current-count').value = '';
  },
});
