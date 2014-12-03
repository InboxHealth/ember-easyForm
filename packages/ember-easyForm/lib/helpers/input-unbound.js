Ember.Handlebars.registerHelper('input-unbound', function(options) {
  //options = Ember.EasyForm.processOptions(property, options);
  options.hash.isBlock = !!(options.fn);
  return Ember.Handlebars.helpers.view.call(this, Ember.EasyForm.Input, options);
});
