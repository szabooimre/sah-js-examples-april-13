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

let printNumbersTill = (number) => {
    for(i=1;i<=number;i++) {
        $('ul').append('<li>' + i + '</li>')
    }
}

printNumbersTill(20)
printNumbersTill(15)

let getGreetingTo = (name) => {
    return 'Greeting to ' + name + "!"
}

console.log(getGreetingTo('Mark'))
$('ul').append('<li>' + getGreetingTo('Mark') + '</li>')

let printValues = (array) => {
    for(i=0;i<array.length;i++) {
        console.log(array[i])
    }
}

printValues([6, 3, 1, 4, 0, 67])

let myNumbers = [6, 3, 1, 4, 0, 67]
myNumbers.forEach(
    (number) => {
        console.log(number)
    }
)

let printValuesReloaded = (array) => {
    array.forEach((item) => {
        console.log(item)
    })
}

printValuesReloaded([67,0,4,1,3,6])