input.onButtonPressed(Button.A, function () {
    timeanddate.advanceBy(1, timeanddate.TimeUnit.Hours)
})
input.onButtonPressed(Button.AB, function () {
    timeanddate.advanceBy(10, timeanddate.TimeUnit.Minutes)
})
input.onButtonPressed(Button.B, function () {
    timeanddate.advanceBy(1, timeanddate.TimeUnit.Minutes)
})
timeanddate.setTime(0, 0, 0, timeanddate.MornNight.PM)
basic.forever(function () {
    timeanddate.advanceBy(1330, timeanddate.TimeUnit.Milliseconds)
    basic.showString(timeanddate.time(timeanddate.TimeFormat.HMMAMPM),80)
})
