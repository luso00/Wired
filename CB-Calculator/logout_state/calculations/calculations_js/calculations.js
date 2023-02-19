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
  let remember = localStorage.getItem("remember");
  if (remember) {
    window.location.href =
      "../../../login_state/calculations/calculations.html";
  }

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
        $(".alert6").addClass("show");
        $(".alert6").removeClass("hide");
        $(".alert6").addClass("showAlert");
        setTimeout(function () {
          $(".alert6").removeClass("show");
          $(".alert6").addClass("hide");
        }, 5000);
        console.log("Input data in all entries!");
        x.preventDefault();
      }
    }
  });
  $(".close-btn6").click(function () {
    $(".alert6").removeClass("show");
    $(".alert6").addClass("hide");
  });
  $("#power_factor").change(function (x) {
    if (Number($("#power_factor").val()) > 1) {
      $("#power_factor").val(1);
      $(".alert7").addClass("show");
      $(".alert7").removeClass("hide");
      $(".alert7").addClass("showAlert");
      setTimeout(function () {
        $(".alert7").removeClass("show");
        $(".alert7").addClass("hide");
      }, 5000);
      x.preventDefault();
    }
  });
  $(".close-btn7").click(function () {
    $(".alert7").removeClass("show");
    $(".alert7").addClass("hide");
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
      console.log(load_description);
      $(".alert5").addClass("show");
      $(".alert5").removeClass("hide");
      $(".alert5").addClass("showAlert");
      setTimeout(function () {
        $(".alert5").removeClass("show");
        $(".alert5").addClass("hide");
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
  $(".close-btn5").click(function () {
    $(".alert5").removeClass("show");
    $(".alert5").addClass("hide");
  });
  // end of Adding branch circuit
  // creating schedule of loads
  $("#create_schedule").click(function (x) {
    var checker = Number($("#ckt_count").text());
    if (checker == 0) {
      $(".alert8").addClass("show");
      $(".alert8").removeClass("hide");
      $(".alert8").addClass("showAlert");
      setTimeout(function () {
        $(".alert8").removeClass("show");
        $(".alert8").addClass("hide");
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
  $(".close-btn8").click(function () {
    $(".alert8").removeClass("show");
    $(".alert8").addClass("hide");
  });
  // end of creating schedule of loads

  // signup page for calculations
  $("#signup-entry").submit(function (x) {
    let signup_email = $("#signup_email").val();
    let signup_password = $("#signup_password").val();
    let signup_password_confirm = $("#signup_password_confirm").val();
    if (signup_password != signup_password_confirm) {
      alert("Password didn't match!");
    } else if (!signup_email || !signup_password || !signup_password_confirm) {
      alert("Please fill out all the entries.");
    } else {
      localStorage.setItem("email", signup_email);
      localStorage.setItem("password", signup_password);
      window.location.href = "../login_calculations/login.html";
    }
    x.preventDefault();
  });
  //end of signup page for calculations
  // login page for calculations
  $("#login-entry").submit(function (x) {
    let login_email = $("#login_email").val();
    let login_password = $("#login_password").val();
    let signup_email = localStorage.getItem("email");
    let signup_password = localStorage.getItem("password");
    let remember_me = $("#rememberme").prop("checked");
    if (remember_me) {
      localStorage.setItem("remember", remember_me);
    }
    if (login_email != signup_email || login_password != signup_password) {
      alert("Invalid e-mail or password!");
    } else {
      window.location.href =
        "../../../login_state/calculations/calculations.html";
    }

    x.preventDefault();
  });
  // end of login page for calculations
});
