var mongoose = require('mongoose');
var Event = require('./models/event');
var Comment = require('./models/comment');

function seedDB(){
  //Remove all events
  Event.remove({}, function(err){
    if(err){
      console.log(err);
    }
    // //Add events
    // data.forEach(function(seed){
    //   Event.create(seed, function(err, event){
    //     if(err){
    //       console.log(err);
    //     }
    //     else{
    //       console.log('Added an event!');
    //     }
    //     Comment.create(
    //       {
    //         text: 'Hi!',
    //         author: 'User1'
    //       },
    //       function(err, comment){
    //       if(err){
    //         console.log(err);
    //       }
    //       else{
    //         event.comments.push(comment);
    //         event.save();
    //         console.log('Added comments!');
    //       }
    //     });
    //   });
    // });
  });
}

module.exports = seedDB;
