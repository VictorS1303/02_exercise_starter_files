



/*
   Setting up a variable to hold the current hour time
   By only setting it to new Date(), we get the entire date with year and time (with hour, minutes, and seconds) and our time zone
   To get the current time in hours only, we simply append the getHours() method(/function) onto the new Date()
*/
const currentClockHour = new Date().getHours()


// FUNCTIONS //

// Check Current Time
function checkCurrentTime()
{
    // Checking to see if the current hour is between 5 and 10
    if (currentClockHour > 5 && currentClockHour < 10)
    {
        console.log('Godmorgen!')
    }
    // Checking to see if the current hour is 10 or above 10 but less than 18
    else if (currentClockHour >= 10 && currentClockHour < 18)
    {
        console.log('Goddag!')
    }
    // Checking to see if the current hour is 18 or above 18 but less than 24
    else if (currentClockHour >= 18 && currentClockHour < 24)
    {
        console.log('God aften!')
    }
    /*
       Only to be run if none of the statements above are true (this else can actually be removed,
       so that the console.log() inside of it just ends up at the bottom
       of this checkCurrentTime function)
    */
    else
    {
        console.log('Godnat')
    }
}

checkCurrentTime()
