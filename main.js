

$(document).ready(() => {
    $("#headers1").on('click', e => {
    $("#description1").addClass("show")
    $("#description2").removeClass("show")
    $("#description3").removeClass("show")
})
    $("#headers2").on('click', e => {
    $("#description2").addClass("show")
    $("#description1").addClass("hide")
    $("#description1").removeClass("show")
    $("#description3").removeClass("show")
})
    $("#headers3").on('click', e => {
    $("#description3").addClass("show")
    $("#description1").addClass("show")
    $("#description2").removeClass("show")
    $("#description1").removeClass("show")
    $("#description1").addClass("hide")

})
})