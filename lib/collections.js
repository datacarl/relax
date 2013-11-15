Items = new Meteor.Collection('items');

if (Meteor.isServer) {
  Meteor.startup(function() {
    if (!Items.find().count()) {
      Items.insert({
        name: 'Lampa',
        category: 'El',
        count: 4,
        notes: 'En är bäng',
        nextService: new Date(),
        location: 'Relax',
      });

      Items.insert({
        name: 'Kastrull',
        category: 'Kök',
        count: 2,
        notes: 'Bränd',
        nextService: new Date(),
        location: 'Årsta',
      });
    }
  });
}
