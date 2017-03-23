
console.log("header partial is connected")



$(document).ready(function() {
  $yaybutton = $('#yay')
  $naybutton = $('#nay')
  $yayCounter = $('#yayCounter')
  $nayCounter = $('#nayCounter')

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
        $yayCounter.html(data.yayVotes)

      }
    )
  })

  $naybutton.on('click', function() {
    var unchompedProposal = $(this).attr('class')
    var proposal = unchompedProposal.slice(0, -1)
    $.ajax({
      type: "PATCH",
      url: "/proposals/bad",
      data:{proposalId: proposal}
    }).then(
      function(data) {
        console.log(data)
        console.log(data.nayVotes)

        $nayCounter.html(data.nayVotes)
        console.log($nayCounter.html)
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
