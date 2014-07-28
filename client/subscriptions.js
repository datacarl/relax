Deps.autorun(function() {
  if (Meteor.userId()) {
    Meteor.subscribe('items');
  }
})
