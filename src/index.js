$(document).ready(function(){
  // your code here!

  $('#submit').click(function(x) {
    x.preventDefault()

    const newCom = new Comment(text)

    $('#comment-list').append(newCom.render())

    })

})
