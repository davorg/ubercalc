var rates = {
  X: {
    Base: 2.50,
    Mile: 1.25,
    Min:  0.15,
    MinFare: 5
  },
  XL: {
    Base: 3.50,
    Mile: 2.00,
    Min:  0.15,
    MinFare: 7
  },
  Ex: {
    Base: 4.00,
    Mile: 2.40,
    Min:  0.30,
    MinFare: 10
  },
  Lx: {
    Base: 5.00,
    Mile: 3.55,
    Min:  0.55,
    MinFare: 14
  }
};

$( document ).ready(function() {
  $( ".input" ).change(function() {
    var miles = $("#miles").val();
    var minutes = $("#minutes").val();
    var total = {};
    if ($.isNumeric(miles) && $.isNumeric(minutes)) {
      $.each(rates, function( type, vals ) {
        $("#" + type + "-Base").text(vals["Base"].toFixed(2));
        total[type] = vals["Base"];

        calc_miles = vals["Mile"] * miles;
        $("#" + type + "-Mile").text(calc_miles.toFixed(2));
        total[type] += calc_miles;

        calc_mins = vals["Min"] * minutes;
        $("#" + type + "-Time").text(calc_mins.toFixed(2));
        total[type] += calc_mins;

        total_cost = Math.max(total[type], vals["MinFare"]);
        $("#" + type + "-Tot").text(total_cost.toFixed(2));

      });
    }
  });
});
