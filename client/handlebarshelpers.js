Handlebars.registerHelper('session', function(key) {
  return Session.get(key);
});

Handlebars.registerHelper('getDate', function(date) {
  if (date) {
    return "" + date.getUTCFullYear() + "-" +
          ("0" + (date.getMonth() + 1)).slice(-2) + "-" +
          ("0" + date.getDate()).slice(-2);
  }
});
