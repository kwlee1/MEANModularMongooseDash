const mongoose = require('mongoose');
const Dog = mongoose.model('Dog');

module.exports = {
  index: (request, response) => {
    Dog.find({})
      .then(dogs => {
        response.render('index', { dogs });
      })
      .catch(console.log);
  },

  show: (request, response) => {
    Dog.findById(request.params.id)
      .then(dog => {
        response.render('show', { dog });
      })
      .catch(console.log);
  },

  edit: (request, response) => {
    Dog.findById(request.params.id)
    .then(dog => {
      response.render('edit', { dog });
    })
    .catch(console.log);
  },

  create: (request, response) => {
    Dog.create(request.body)
      .then(dog => {
        response.redirect('/');
      })
      .catch(console.log);
  },

  new: (request, response) => {
    response.render('new');
  },

  update: (request, response) => {
    Dog.findByIdAndUpdate(request.params.id, request.body)
      .then(dog => {
        response.redirect('/');
      })
      .catch(console.log);
  },

  destroy: (request, response) => {
    Dog.findByIdAndRemove(request.params.id)
      .then(dog => {
        response.redirect('/');
      })
      .catch(console.log);
  },
};