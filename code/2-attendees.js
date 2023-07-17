// ####################################
// ####### ----- Attendees ----- ######
// ####################################

function attendees() {
  let count = 0
  let numOfAttendees = 5
  let attendeeList = ''

  while (count < numOfAttendees) {
    let attendee = prompt()
    attendeeList = attendeeList + attendee
    attendeeList = attendeeList + ', '
    count = count + 1
  }

  alert(attendeeList)
}

function make2() {
  // copy and paste your code here when you get to the Make step
  let numberAmount = prompt('How many numbers would you like to add?')

  let count = 0
  let total = 0
  while (count < numberAmount) {
    let number = prompt('Enter one number')
    number = Number(number)
    total = total + number
    count = count + 1
  }

  alert(' total sum is ' + total)
}