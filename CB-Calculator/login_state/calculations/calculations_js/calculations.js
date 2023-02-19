//remove remember me
function logout() {
  localStorage.removeItem("remember");
  window.location.href = "../../../logout_state/calculations/calculations.html";
}
// clear session storage
function clearStorage() {
  sessionStorage.clear();
  document.getElementById("ckt_count").innerHTML = "0";
}
// session storage
const aload_description = [];
const atype_load_receptacle = [];
const atype_load_convenience = [];
const atype_load_others = [];
const anumber_of_loads = [];
const apower_rating = [];
const avoltage_rating = [];
const apower_factor = [];
const asafety_factor = [];
var ckt_count = 0;
$(document).ready(function () {
  sessionStorage.clear();
  // Data functions
  // Type of loads
  $("#resistive_load").prop("checked", true);
  if ($("#resistive_load").prop("checked") == true) {
    $("#receptacle").prop("checked", true);
  }
  $("#resistive_load").click(function () {
    $("#receptacle").prop("checked", true);
  });
  $("#receptacle").click(function () {
    if ($("#resistive_load").prop("checked") == false) {
      $("#receptacle").prop("checked", false);
    }
  });
  $("#co").click(function () {
    if ($("#resistive_load").prop("checked") == false) {
      $("#co").prop("checked", false);
    }
  });
  $("#acwp").click(function () {
    $("#receptacle").prop("checked", false);
    $("#co").prop("checked", false);
  });
  $("#welder").click(function () {
    $("#receptacle").prop("checked", false);
    $("#co").prop("checked", false);
  });
  $("#motor").click(function () {
    $("#receptacle").prop("checked", false);
    $("#co").prop("checked", false);
  });
  $("#power_rating").change(function (x) {
    if ($("#hp").prop("checked") == true) {
      if (Number($("#power_rating").val()) > 4000) {
        $("#power_rating").val(4000);
        $(".alert2").addClass("show");
        $(".alert2").removeClass("hide");
        $(".alert2").addClass("showAlert");
        setTimeout(function () {
          $(".alert2").removeClass("show");
          $(".alert2").addClass("hide");
        }, 5000);
        console.log("Input data in all entries!");
        x.preventDefault();
      }
    }
  });
  $(".close-btn2").click(function () {
    $(".alert2").removeClass("show");
    $(".alert2").addClass("hide");
  });
  $("#power_factor").change(function (x) {
    if (Number($("#power_factor").val()) > 1) {
      $("#power_factor").val(1);
      $(".alert3").addClass("show");
      $(".alert3").removeClass("hide");
      $(".alert3").addClass("showAlert");
      setTimeout(function () {
        $(".alert3").removeClass("show");
        $(".alert3").addClass("hide");
      }, 5000);
      x.preventDefault();
    }
  });
  $(".close-btn3").click(function () {
    $(".alert3").removeClass("show");
    $(".alert3").addClass("hide");
  });
  // end of Data functions
  // Adding branch circuit
  $("#add_branch_ckt").click(function (x) {
    var load_description = $("#load_description").val();
    if ($("#receptacle").prop("checked") == true) {
      var type_load_receptacle = $("#receptacle").prop("checked");
    } else {
      var type_load_receptacle = false;
    }
    if ($("#co").prop("checked") == true) {
      var type_load_convenience = $("#co").prop("checked");
    } else {
      var type_load_convenience = false;
    }
    if (
      $("#receptacle").prop("checked") == false &&
      $("#co").prop("checked") == false
    ) {
      var type_load_others = true;
    } else {
      var type_load_others = false;
    }
    var number_of_loads = $("#number_of_loads").val();
    var power_rating = $("#power_rating").val();
    var voltage_rating = $("#voltage_rating").val();
    var power_factor = $("#power_factor").val();
    var safety_factor = $("#safety_factor").val();
    if (
      !load_description ||
      !number_of_loads ||
      !power_rating ||
      !voltage_rating ||
      !power_factor ||
      !safety_factor
    ) {
      $(".alert").addClass("show");
      $(".alert").removeClass("hide");
      $(".alert").addClass("showAlert");
      setTimeout(function () {
        $(".alert").removeClass("show");
        $(".alert").addClass("hide");
      }, 5000);
      x.preventDefault();
    } else {
      var ckt_count = Number($("#ckt_count").text());
      ckt_count++;
      $("#ckt_count").text(ckt_count);
      if ($("#hp").prop("checked") == true) {
        var power_rating2 = Number(power_rating) * 746;
        console.log(power_rating);
        aload_description.push(load_description);
        atype_load_receptacle.push(type_load_receptacle);
        atype_load_convenience.push(type_load_convenience);
        atype_load_others.push(type_load_others);
        anumber_of_loads.push(number_of_loads);
        apower_rating.push(power_rating2);
        avoltage_rating.push(voltage_rating);
        apower_factor.push(power_factor);
        asafety_factor.push(safety_factor);
        console.log("receptacle:" + atype_load_receptacle);
        console.log("conve:" + atype_load_convenience);
        console.log("other:" + atype_load_others);
      } else if ($("#watts").prop("checked") == true) {
        aload_description.push(load_description);
        atype_load_receptacle.push(type_load_receptacle);
        atype_load_convenience.push(type_load_convenience);
        atype_load_others.push(type_load_others);
        anumber_of_loads.push(number_of_loads);
        apower_rating.push(power_rating);
        avoltage_rating.push(voltage_rating);
        apower_factor.push(power_factor);
        asafety_factor.push(safety_factor);
        console.log("receptacle:[" + atype_load_receptacle + "]");
        console.log("conve:[" + atype_load_convenience + "]");
        console.log("other:[" + atype_load_others + "]");
      }
    }
  });
  $(".close-btn").click(function () {
    $(".alert").removeClass("show");
    $(".alert").addClass("hide");
  });
  // end of Adding branch circuit
  // creating schedule of loads
  $("#create_schedule").click(function (x) {
    var checker = Number($("#ckt_count").text());
    if (checker == 0) {
      $(".alert4").addClass("show");
      $(".alert4").removeClass("hide");
      $(".alert4").addClass("showAlert");
      setTimeout(function () {
        $(".alert4").removeClass("show");
        $(".alert4").addClass("hide");
      }, 5000);
    } else {
      const js_str_aload_description = JSON.stringify(aload_description);
      sessionStorage.setItem("load_description", js_str_aload_description);
      const js_str_atype_load_receptacle = JSON.stringify(
        atype_load_receptacle
      );
      sessionStorage.setItem("receptacle_load", js_str_atype_load_receptacle);
      const js_str_atype_load_convenience = JSON.stringify(
        atype_load_convenience
      );
      sessionStorage.setItem("convenience_load", js_str_atype_load_convenience);
      const js_str_atype_load_others = JSON.stringify(atype_load_others);
      sessionStorage.setItem("others_load", js_str_atype_load_others);
      const js_str_anumber_of_loads = JSON.stringify(anumber_of_loads);
      sessionStorage.setItem("number_of_loads", js_str_anumber_of_loads);
      const js_str_apower_rating = JSON.stringify(apower_rating);
      sessionStorage.setItem("power_rating", js_str_apower_rating);
      const js_str_avoltage_rating = JSON.stringify(avoltage_rating);
      sessionStorage.setItem("voltage_rating", js_str_avoltage_rating);
      const js_str_apower_factor = JSON.stringify(apower_factor);
      sessionStorage.setItem("power_factor", js_str_apower_factor);
      const js_str_asafety_factor = JSON.stringify(asafety_factor);
      sessionStorage.setItem("safety_factor", js_str_asafety_factor);
      window.location.href = "schedule_of_loads/schedule_of_loads.html";
    }
    x.preventDefault();
  });
  $(".close-btn").click(function () {
    $(".alert").removeClass("show");
    $(".alert").addClass("hide");
  });
  // end of creating schedule of loads
});
