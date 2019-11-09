
function add(ths, sno) {
    for (var i = 1; i <= 5; i++) {
        var cur = document.getElementById("star" + i)
        cur.className = "fa fa-star"
    }

    for (var i = 1; i <= sno; i++) {
        var cur = document.getElementById("star" + i)
        if (cur.className == "fa fa-star") {
            cur.className = "fa fa-star checked"
        }
    }
    if (sno === 3) {
        $('#feedbackCard').removeClass('bg-danger')
        $('#feedbackCard').removeClass('bg-sucess')
        $('#feedbackCard').addClass('bg-dark')
    }

    if (sno <= 2) {
        $('#feedbackCard').removeClass('bg-dark')
        $('#feedbackCard').removeClass('bg-success')
        $('#feedbackCard').addClass('bg-danger')
    }

    if (sno >= 4) {
        $('#feedbackCard').removeClass('bg-dark')
        $('#feedbackCard').removeClass('bg-danger')
        $('#feedbackCard').addClass('bg-success')
    }
}

// $(document).ready(function() {$('#datetimepicker1').datetimepicker({
//     viewMode: 'hours',
//     inline: true,
// });
// })
