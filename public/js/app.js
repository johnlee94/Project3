console.log("header partial is connected")


$(document).ready(function() {
  $yaybutton = $('#yay')
  $naybutton = $('#nay')


  // $yaybutton.click(function() {
  //   $.post('/proposals')
  // })

$('#yaycounter').data('count', 0);
("#yay").click(function() {
    $('#yaycounter').html(function() {
      var $this = $(this),
        count = $this.data('count') + 1;

        $this.data('count', count);
        console.log(count);
    });
});
});

        // $.ajax({
        //     url: '/proposals',
        //     type: 'POST',
        //     data: {increment: true},
        //     success: function() { alert('Request has returned') }
// <div id="counter"></div>
