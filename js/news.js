function chat_order() {

    var ddlsorting = $('#ddlsorting option:selected').val();
    if (ddlsorting == "New Lists") {

        var container = $(".sort-list");
        var items = $(".sort-item");

        items.each(function () {
            // Convert the string in 'data-event-date' attribute to a more
            // standardized date format
            var BCDate = $(this).attr("data-event-date");
            /*console.log(BCDate);*/
            var standartDate = BCDate[1] + " " + BCDate[0] + " " + BCDate[2];
           // var standartDate = new Date(BCDate).getTime();
            $(this).attr("data-event-date", standartDate);
            console.log(standartDate);
        });


        items.sort(function (a, b) {
            a = parseFloat($(a).attr("data-event-date"));
            b = parseFloat($(b).attr("data-event-date"));
            return a < b ? -1 : a < b ? 1 : 0;
        }).each(function () {
            container.prepend(this);
        });

    }
    else if (ddlsorting == "Old Lists") {

        var container = $(".sort-list");
        var items = $(".sort-item");

        items.each(function () {
            // Convert the string in 'data-event-date' attribute to a more
            // standardized date format
            var BCDate = $(this).attr("data-event-date");
            /*console.log(BCDate);
            var standardDate = BCDate[1]+" "+BCDate[0]+" "+BCDate[2];*/
            var standartDate = new Date(BCDate).getTime();
            $(this).attr("data-event-date", standartDate);
            console.log(standartDate);
        });


        items.sort(function (a, b) {
            a = parseFloat($(a).attr("data-event-date"));
            b = parseFloat($(b).attr("data-event-date"));
            return a > b ? -1 : a > b ? 1 : 0;
        }).each(function () {
            container.prepend(this);
        });

    }
    else {
        var container = $(".sort-list");
        var items = $(".sort-item");

        items.each(function () {
            // Convert the string in 'data-event-date' attribute to a more
            // standardized date format
            var BCDate = $(this).attr("data-event-date");
            /*console.log(BCDate);
            var standardDate = BCDate[1]+" "+BCDate[0]+" "+BCDate[2];*/
            var standartDate = new Date(BCDate).getTime();
            $(this).attr("data-event-date", standartDate);
            console.log(standartDate);
        });


        items.sort(function (a, b) {
            a = parseFloat($(a).attr("data-event-date"));
            b = parseFloat($(b).attr("data-event-date"));
            return a > b ? -1 : a > b ? 1 : 0;
        }).each(function () {
            container.prepend(this);
        });
    }

}

$(document).ready( function () {
 $('#ddlsorting option[value="New Lists"]').prop('selected', true);
 chat_order();
});


/* This script sorts your list in descending order... to change it to ascending order change the "less than" operator (<) to "greater than" (>) */