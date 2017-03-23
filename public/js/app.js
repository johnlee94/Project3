
console.log("header partial is connected")



$(document).ready(function() {
  $yaybutton = $('#yay')
  $naybutton = $('#nay')

  $yaybutton.one('click', function() {
    var proposal = $(this).attr('class')
    // var proposalId= proposal.data('target')
    // var user = $(this)
    // var userId = user.attr('id')
    $.ajax({
      type: "PATCH",
      url: "/proposals",
      data: {proposalId: proposal}
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
