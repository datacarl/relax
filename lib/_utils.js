Utils = {
  requireLoggedIn: function(cb) {
    return function() {
      if (!this.userId) {
        if (this.stop)
          this.stop();
        else
          throw new Meteor.Error('403');
      } else {
        return cb.apply(this, arguments)
      }
    }
  }
}
