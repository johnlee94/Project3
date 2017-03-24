
console.log("header partial is connected")



$(document).ready(function() {
  $yaybutton = $('.yay')
  $naybutton = $('.nay')
  $yayCounter = $('#yayCounter')
  $nayCounter = $('#nayCounter')

  $yaybutton.one('click', function() {
    var proposal = $(this).attr('class').slice(0, -4)
    console.log(proposal)
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
        $(`#yayCounter${data._id}`).html(data.yayVotes)
        console.log($(`#yayCounter${data._id}`))

      }
    )
  })

  $naybutton.on('click', function() {
    var unchompedProposal = $(this).attr('class')
    var proposal = unchompedProposal.slice(0, -5)
    console.log(proposal)
    $.ajax({
      type: "PATCH",
      url: "/proposals/bad",
      data:{proposalId: proposal}
    }).then(
      function(data) {
        console.log(data)
        console.log(data.nayVotes)

        $(`#nayCounter${data._id}`).html(data.nayVotes)
        console.log($(`#nayCounter${data._id}`))
      }
    )
  })



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
