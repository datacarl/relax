Accounts.config({
  forbidClientAccountCreation: true,
});

if (!Meteor.users.find().count()) {
  Accounts.createUser({
    username: 'carl',
    password: 'default',
  });
}

Meteor.methods({
  '/users/new': Utils.requireLoggedIn(function(username, password) {
    check(username, String);
    check(password, String);

    return Accounts.createUser({
      username: username,
      password: password,
    })
  })
})
