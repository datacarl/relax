Items = new Meteor.Collection('items');

Consumables = new Meteor.Collection('consumables');

if (Meteor.isServer) {
  Meteor.startup(function() {
    // Items.remove({});
    if (!Items.find().count()) {
      Items.insert({
        name: 'Lampa',
        category: 'El',
        count: 4,
        notes: 'En är bäng',
        nextService: new Date(),
        location: 'Relax',
        todos: [
          {
            createdAt: new Date(),
            task: 'Köp fem st 20w',
            due: new Date(),
            completedAt: null,
          },
        ],
      });

      Items.insert({
        name: 'Kastrull',
        category: 'Kök',
        count: 2,
        notes: 'Bränd',
        nextService: new Date(),
        location: 'Årsta',
        todos: [
          {
            createdAt: new Date(),
            task: 'Skrubba med svinto',
            due: null,
            completedAt: null,
          },
        ],
      });
    }
  });
}
