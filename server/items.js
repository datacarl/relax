Meteor.publish('items', Utils.requireLoggedIn(function() {
  return Items.find();
}))

var allow = function(userId) {
  if (userId) return true;
}

Items.allow({
  insert: allow,
  update: allow,
  remove: allow,
});
