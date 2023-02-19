function prev() {
  window.history.back();
}
const js_aload_description = sessionStorage.getItem("load_description");
const p_aload_description = JSON.parse(js_aload_description);
const js_atype_load_receptacle = sessionStorage.getItem("receptacle_load");
const p_atype_load_receptacle = JSON.parse(js_atype_load_receptacle);
const js_atype_load_convenience = sessionStorage.getItem("convenience_load");
const p_atype_load_convenience = JSON.parse(js_atype_load_convenience);
const js_atype_load_others = sessionStorage.getItem("others_load");
const p_atype_load_others = JSON.parse(js_atype_load_others);
const js_anumber_of_loads = sessionStorage.getItem("number_of_loads");
const p_anumber_of_loads = JSON.parse(js_anumber_of_loads);
const js_apower_rating = sessionStorage.getItem("power_rating");
const p_apower_rating = JSON.parse(js_apower_rating);
const js_avoltage_rating = sessionStorage.getItem("voltage_rating");
const p_avoltage_rating = JSON.parse(js_avoltage_rating);
const js_apower_factor = sessionStorage.getItem("power_factor");
const p_apower_factor = JSON.parse(js_apower_factor);
const js_asafety_factor = sessionStorage.getItem("safety_factor");
const p_asafety_factor = JSON.parse(js_asafety_factor);
const circuit_breaker_rating = [
  15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 110, 125, 150, 175, 200,
  225, 250, 300, 350, 400, 450, 500, 600, 700, 800, 1000, 1200, 1600, 2000,
  2500, 3000, 4000, 5000, 6000,
];
const wire_size = [
  "2.0",
  "3.5",
  "5.5",
  "8.0",
  "14",
  "22",
  "30",
  "38",
  "50",
  "60",
  "80",
  "100",
  "125",
  "150",
  "175",
  "200",
  "250",
  "325",
  "400",
  "500",
];
const allowed_ampacity = [
  21, 27, 36, 48, 65, 89, 119, 137, 163, 186, 214, 253, 276, 317, 340, 371, 427,
  468, 529, 617,
];
var x = 0;
var z = 0;
$(document).ready(function () {
  for (let i = 0; i < p_aload_description.length; i++) {
    let n =
      Number(p_anumber_of_loads[i]) *
      Number(p_apower_rating[i]) *
      (1 + Number(p_asafety_factor[i]));
    let d = Number(p_avoltage_rating[i]) * Number(p_apower_factor[i]);
    var ampere = n / d;
    // creates the table
    for (let j = 0; j < circuit_breaker_rating.length; j++) {
      //check if the ampere fits the breaker
      if (ampere < Number(circuit_breaker_rating[j])) {
        var cb_rating = Number(circuit_breaker_rating[j]);

        console.log(z);
        console.log(cb_rating);
        for (let k = 0; k < allowed_ampacity.length; k++) {
          if (cb_rating < allowed_ampacity[k]) {
            var f_wire = wire_size[k];
            break;
          }
        }
        break;
      }
    }

    if (
      p_atype_load_receptacle[i] == true &&
      ampere < Number(circuit_breaker_rating[z])
    ) {
      var cb_rating = 15;
      var f_wire = "2.0";
    }

    if (
      p_atype_load_convenience[i] == true &&
      ampere < Number(circuit_breaker_rating[z])
    ) {
      var cb_rating = 20;
      var f_wire = "3.5";
    }
    if (
      p_atype_load_others[i] == true &&
      ampere < Number(circuit_breaker_rating[z])
    ) {
      console.log(z);
      var cb_rating = 20;
      var f_wire = "3.5";
    }
    x++;
    $("#load_schedule").html(
      $("#load_schedule").html() +
        "<tr><td>" +
        x +
        "</td><td>" +
        p_aload_description[i] +
        "</td><td>" +
        p_anumber_of_loads[i] +
        "</td><td>" +
        p_apower_rating[i] +
        "</td><td>" +
        p_avoltage_rating[i] +
        "</td><td>" +
        ampere.toFixed(2) +
        "</td><td>" +
        cb_rating +
        "</td><td>" +
        f_wire +
        "mm²</td></tr>"
    );
  }
});
