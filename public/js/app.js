//HOW TO REQUIRE MODELS ???? WTF???? XD
// var mongoose = require('mongoose'),
//     User = require('../../models/user'),
//     Proposal = require('../../models/proposal')
//
// function getStuff(req, res) {
//
// }


console.log("header partial is connected")

$(document).ready(function() {
  $yaybutton = $('#yay')
  $naybutton = $('#nay')

  $yaybutton.on('click', function() {
    // var proposal = $(this)
    // var proposalId= proposal.data('target')
    // var user = $(this)
    // var userId = user.attr('id')
    $.ajax({
      type: "PATCH",
      url: "/proposals",
      data: {userId: '58d374a99eba99646b67afd0',
              proposalId: '58d365caf3b6815209d8606f'
            }
    }).then(
      function(data){
        console.log(data)
      }
    )
  })

  // $naybutton.on('click', function() {
  //   $.ajax({
  //     type: "POST",
  //     url: "./proposals/bad"
  //     data:{}
  //   })
  // })



  })




//
// ("#yay").click(function() {
//   var yaycounter = 0;
//     $('#counter').html(function(i, val) {
//         $.ajax({
//             url: '/proposals',
//             type: 'POST',
//             data: {increment: true},
//             success: function() { alert('Request has returned') }
//         });
//         return +val+1;
//         console.log(+val+1)
//     });
// })
