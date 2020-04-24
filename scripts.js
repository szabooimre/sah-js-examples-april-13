let firstname = "Imre"
console.log(firstname + "'s apples")
console.log("Hello World!")
/* general selector
$('selector').action()
*/
$('h1').text('We are having a 10 minute break until 17:05')
$('p').html('StayAtHome Coding Camp Likes:<span>13!</span>')
$('span').css('padding','10px')
$('span').css('background','lime')
$('h2').toggleClass('blue')

$('#add-button').click(()=>{
    $('ul').append('<li>My name is ' + firstname + '</li>')
})

$('#remove-button').click(()=>{
    $('li:last-child').remove()
})
