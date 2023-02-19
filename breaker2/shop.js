$(document).ready(function() {
    let itemsToShow = 10; // number of items to show initially
    let itemsIncrement = 5; // number of items to add when "View More" is clicked
    let $productItems = $(".product-item"); // get all product items
    let itemCount = $productItems.length; // get total number of product items
    let hiddenItemCount = itemCount - itemsToShow; // calculate number of items hidden initially
    
    $productItems.slice(itemsToShow).hide(); // hide all items beyond the initial number to show
    
    $("#view-more").on("click", function() {
      // show next set of items and update number of hidden items
      $productItems.slice(itemsToShow, itemsToShow + itemsIncrement).fadeIn();
      itemsToShow += itemsIncrement;
      hiddenItemCount = itemCount - itemsToShow;

      // hide "View More" button if all items are shown
      if (hiddenItemCount <= 0) {
        $("#view-more").hide(); 
      }
    });
});

      // For Arc Fault Circuit Interrupter (AFCI) Breaker Page
$(document).ready(function(){

    $("#2").click(function(){
      $("#view-more").hide();
      $("#view-more2").hide();

      // Changing Heading;
      $(".categories").text("Arc Fault Circuit Interrupter (AFCI) Breaker");

      // product1
      $("#product1").attr("src", "/Arc Fault Circuit Interrupter (AFCI) Breaker/1.jpg");
      $("#para1").text("Eaton 50-Amp Type GFI Circuit Breaker Arc Fault Circuit Interrupter");
      $("#price1").html("$84.95");
      // product2
      $("#product2").attr("src", "/Arc Fault Circuit Interrupter (AFCI) Breaker/2.jpg");
      $("#para2").text("Eaton 20-Amp Type BR Quadplex Circuit Breaker Arc Fault Circuit Interrupter");
      $("#price2").text("$54.45");
      
      // product3
      $("#product3").attr("src", "/Arc Fault Circuit Interrupter (AFCI) Breaker/3.jpg");
      $("#para3").text("Molded Case Circuit Breaker EZC250N Industrial type Arc Fault Circuit Interrupter");
      $("#price3").text("$144.45");
      $('#rate3 span:last-child').removeClass('material-symbols-sharp').text('star_rate').addClass('material-symbols-sharp');

      // product4
      $("#product4").attr("src", "/Arc Fault Circuit Interrupter (AFCI) Breaker/4.jpg");
      $("#para4").text("50-Amp Homeline Plug-On Circuit Breaker Arc Fault Circuit Interrupter");
      $("#price4").text("$114.45");

      // product5
      $("#product5").attr("src", "/Arc Fault Circuit Interrupter (AFCI) Breaker/5.png");
      $("#para5").text("40-Amp Type QO Standard Circuit Breaker Arc Fault Circuit Interrupter");
      $("#price5").text("$92.32");
      $('#rate5 span:last-child').addClass('material-symbols-sharp').text('star_rate_half').addClass('material-symbols-sharp')

      // product6
      $("#product6").attr("src", "/Arc Fault Circuit Interrupter (AFCI) Breaker/6.jpg");
      $("#para6").text("Type HFDE LSI Electronic Tandem Twin Breaker Arc Fault Circuit Interrupter");
      $("#price6").text("$88.28");
      $('#rate6 span:last-child').addClass('material-symbols-sharp').text('star_rate_half').addClass('material-symbols-sharp');

      // product7
      $("#product7").attr("src", "/Arc Fault Circuit Interrupter (AFCI) Breaker/7.jpg");
      $("#para7").text("Homeline™ Plug-On Neutral Combination Arc Fault Circuit Breaker");
      $("#price7").text("$77.05");
      
      // product8
      $("#product8").attr("src", "/Arc Fault Circuit Interrupter (AFCI) Breaker/8.jpg");
      $("#para8").text("T15-Amp Type LSI Electronic Afci Fire Guard Arc Fault Circuit Breaker");
      $("#price8").text("$134.45");

      // product9
      $("#product9").attr("src", "/Arc Fault Circuit Interrupter (AFCI) Breaker/9.jpg");
      $("#para9").text("120/240 V, Plug-On Mounting  Neutral Combination Arc Fault Circuit Breaker,");
      $("#price9").text("$88.35");

      // product10
      $("#product10").attr("src", "/Arc Fault Circuit Interrupter (AFCI) Breaker/10.jpg");
      $("#para10").text("30-Amp Type CH Standard Electronic Afci Fire Guard Circuit Breaker Arc Fault ");
      $("#price10").text("$94.99");
      $('#rate10 span:last-child').addClass('material-symbols-sharp').text('star_rate_half').addClass('material-symbols-sharp')

      // product11
      $("#product11").attr("src", "/Arc Fault Circuit Interrupter (AFCI) Breaker/11.jpg");
      $("#para11").text("20-Amp Type UBIP Standard  Industrial type Arc Fault Circuit Interrupter");
      $("#price11").text("$82.12");

      // product12
      $("#product12").attr("src", "/Arc Fault Circuit Interrupter (AFCI) Breaker/12.jpg");
      $("#para12").text("50-Amp Type UBIP Standard  Industrial type Arc Fault Circuit Interrupter");
      $("#price12").text("$124.88");

      // product13
      $("#product13").attr("src", "/Arc Fault Circuit Interrupter (AFCI) Breaker/13.jpg");
      $("#para13").text("50-Amp Type UBIP Standard  Industrial type Arc Fault Circuit Interrupter");
      $("#price13").text("$112.12");

      // product14
      $("#product14").attr("src", "/Arc Fault Circuit Interrupter (AFCI) Breaker/14.jpg");
      $("#para14").text("Homeline™ Double-Pole Plug-On Neutral Combination Arc Fault Circuit Breaker");
      $("#price14").text("$74.82");
      $('#rate14 span:last-child').addClass('material-symbols-sharp').text('star_rate_half').addClass('material-symbols-sharp')

      // product15
      $("#product15").attr("src", "/Arc Fault Circuit Interrupter (AFCI) Breaker/15.jpg");
      $("#para15").text("30-Amp Type UBIP Standard  Industrial type Arc Fault Circuit Interrupter");
      $("#price15").text("$77.72");

      // product16
      $("#product16").attr("src", "/Arc Fault Circuit Interrupter (AFCI) Breaker/16.jpg");
      $("#para16").text("20-Amp Type UBIP Standard  Industrial type Arc Fault Circuit Interrupter");
      $("#price16").text("$68.60");

      // product17
      $("#product17").attr("src", "/Arc Fault Circuit Interrupter (AFCI) Breaker/17.jpg");
      $("#para17").text("20-Amp Type Double-Pole Plug-On Cl Replacement  Arc Fault Circuit Interrupter");
      $("#price17").text("$145.22");

      // product18
      $("#product18").attr("src", "/Arc Fault Circuit Interrupter (AFCI) Breaker/18.jpg");
      $("#para18").text("SIEMENS 15-Amp Type UBIP Standard  Industrial type Arc Fault Circuit Interrupter");
      $("#price18").text("$62.77");

      // product19
      $("#product19").attr("src", "/Arc Fault Circuit Interrupter (AFCI) Breaker/19.jpg");
      $("#para19").text("SIEMENS 120/240 V, Plug-In Mounting Arc Fault Circuit Interrupter");
      $("#price19").text("$111.52");

      // product20
      $("#product20").attr("src", "/Arc Fault Circuit Interrupter (AFCI) Breaker/20.jpg");
      $("#para20").text("SIEMENS 120/240 V, Plug-In Electronic Afci Fire Guard Circuit Interrupter");
      $("#price20").text("$152.22");
      $('#rate20 span:last-child').addClass('material-symbols-sharp').text('star_rate').addClass('material-symbols-sharp')

      // product21
      $("#product21").attr("src", "/Arc Fault Circuit Interrupter (AFCI) Breaker/21.jpg");
      $("#para21").text("15-Amp Combination Standard Industrial Arc Fault Circuit Breaker");
      $("#price21").text("$49.82");

      // product22
      $("#product22").attr("src", "/Arc Fault Circuit Interrupter (AFCI) Breaker/22.jpg");
      $("#para22").text("3/4-Inch Type-Qo 15/15-Amp Miniature Tandem Circuit Breaker");
      $("#price22").text("$91.82");

      // product23
      $("#product23").attr("src", "/Arc Fault Circuit Interrupter (AFCI) Breaker/23.jpg");
      $("#para23").text("20-Amp QO™ Miniature Circuit Breaker  Industrial type Arc Fault Circuit Interrupter");
      $("#price23").text("$77.82");
      $('#rate23 span:last-child').addClass('material-symbols-sharp').text('star_rate_half').addClass('material-symbols-sharp')

      // product24
      $("#product24").attr("src", "/Arc Fault Circuit Interrupter (AFCI) Breaker/24.jpg");
      $("#para24").text("Homeline 120/240V Industrial type Arc Fault Circuit Interrupter Circuit Breaker");
      $("#price24").text("$111.82");

      // product25
      $("#product25").attr("src", "/Arc Fault Circuit Interrupter (AFCI) Breaker/25.jpg");
      $("#para25").text("Homeline HOM3060M150PRB Load Center, 150 A, 30 -Space, 60 -Circuit, Interrupter");
      $("#price25").text("$151.82");

      // product26
      $("#product26").attr("src", "/Arc Fault Circuit Interrupter (AFCI) Breaker/26.jpg");
      $("#para26").text("20-Amp Type BR  Industrial Arc Fault Circuit Interrupter Circuit Breaker");
      $("#price26").text("$89.12");

      // product27
      $("#product27").attr("src", "/Arc Fault Circuit Interrupter (AFCI) Breaker/27.jpg");
      $("#para27").text("30-Amp Type BR  Industrial Arc Fault Circuit Interrupter Circuit Breaker");
      $("#price27").text("$98.82");

      // product28
      $("#product28").attr("src", "/Arc Fault Circuit Interrupter (AFCI) Breaker/28.jpg");
      $("#para28").text(" 20-Amp Type Cl Replacement Arc Fault Circuit Interrupter Circuit Breaker");
      $("#price28").text("$70.82");

      // product29
      $("#product29").attr("src", "/Arc Fault Circuit Interrupter (AFCI) Breaker/29.jpg");
      $("#para29").text("30-Amp Type CH Standard Arc Fault Circuit Interrupter Circuit Breaker");
      $("#price29").text("$91.99");

      // product30
      $("#product30").attr("src", "/Arc Fault Circuit Interrupter (AFCI) Breaker/30.jpg");
      $("#para30").text("Type Cl Circuit Breaker, 120/240 V, Plug-In Mounting Interrupter");
      $("#price30").text("$124.82");
      $('#contBtn').append('<button id="view-more2" class="btn btn-primary mt-3" class="justify-content-center">View More</button>');

      let itemsToShow = 10; // number of items to show initially
      let itemsIncrement = 5; // number of items to add when "View More" is clicked
      let $productItems = $(".product-item"); // get all product items
      let itemCount = $productItems.length; // get total number of product items
      let hiddenItemCount = itemCount - itemsToShow; // calculate number of items hidden initially
      
      $productItems.slice(itemsToShow).hide(); // hide all items beyond the initial number to show
      
      $("#view-more2").on("click", function() {
        // show next set of items and update number of hidden items
        $productItems.slice(itemsToShow, itemsToShow + itemsIncrement).fadeIn();
        itemsToShow += itemsIncrement;
        hiddenItemCount = itemCount - itemsToShow;
        
        // hide "View More" button if all items are shown
        if (hiddenItemCount <= 0) {
          $("#view-more2").hide(); 
          $('#view-more2').remove();    
        }
      });
    });


    $("#3").click(function(){
        $("#view-more").hide();
        $("#view-more2").hide();
        // Changing Heading
        $(".categories").text("Ground Fault Circuit Interrupter (GFCI) Breaker");

        // product1
        $("#product1").attr("src", "/Ground Fault Circuit Interrupter (GFCI) Breaker/1.jpg");
        $("#para1").text("Siemens QF250A Breaker Ground Fault Circuit Interrupter, 50 Amp, 2 Pole, 240 Volt, 10,000 AIC");
        $("#price1").html("$89.89");
        // product2
        $("#product2").attr("src", "/Ground Fault Circuit Interrupter (GFCI) Breaker/2.jpg");
        $("#para2").text("Siemens QF260A 60 Amp, 2 Pole, 120/240V Ground Fault Circuit Interrupter with Self Test feature");
        $("#price2").text("$129.00");
        
        // product3
        $("#product3").attr("src", "/Ground Fault Circuit Interrupter (GFCI) Breaker/3.jpg");
        $("#para3").text("Siemens QF230A 30 Amp, 2 Pole, 120/240V Ground Fault Circuit Interrupter with Self Test and Lockout Feature");
        $("#price3").text("$91.00");
        $('#rate3 span:last-child').removeClass('material-symbols-sharp').text('star_rate').addClass('material-symbols-sharp');

        // product4
        $("#product4").attr("src", "/Ground Fault Circuit Interrupter (GFCI) Breaker/4.jpg");
        $("#para4").text("Siemens QF220A QF220 Ground Fault Circuit Interrupter, 20 Amp, 2 Pole, 120 Volt, 10,000 AIC,");
        $("#price4").text("$87.48");

        // product5
        $("#product5").attr("src", "/Ground Fault Circuit Interrupter (GFCI) Breaker/5.png");
        $("#para5").text("THQL2120GFT Plug-in Mount Type THQL Feeder Self-Test Ground Fault Circuit Interrupter 2-Pole 20 Amp");
        $("#price5").text("$113.98");
        $('#rate5 span:last-child').addClass('material-symbols-sharp').text('star_rate_half').addClass('material-symbols-sharp')

        // product6
        $("#product6").attr("src", "/Ground Fault Circuit Interrupter (GFCI) Breaker/6.jpg");
        $("#para6").text("Siemens QF240A Ground Fault Circuit Interrupter, 40 Amp, 2 Pole, 120/240 Volt, 10,000 AIC");
        $("#price6").text("$100.27");
        $('#rate6 span:last-child').addClass('material-symbols-sharp').text('star_rate').addClass('material-symbols-sharp');

        // product7
        $("#product7").attr("src", "/Ground Fault Circuit Interrupter (GFCI) Breaker/7.jpg");
        $("#para7").text("Circuit Breaker & Ground Fault Interrupter, Plug In, HOM250GFI,");
        $("#price7").text("$109.98");
        
        // product8
        $("#product8").attr("src", "/Ground Fault Circuit Interrupter (GFCI) Breaker/8.jpg");
        $("#para8").text("Siemens QF120A Ground Fault Circuit Interrupter, 20 Amp, 1 Pole, 120 Volt");
        $("#price8").text("$69.66");

        // product9
        $("#product9").attr("src", "/Ground Fault Circuit Interrupter (GFCI) Breaker/9.png");
        $("#para9").text("HQL2130GFT Plug-In Mount Type Self-Test Ground Fault Circuit Interrupter");
        $("#price9").text("$149.81");

        // product10
        $("#product10").attr("src", "/Ground Fault Circuit Interrupter (GFCI) Breaker/10.jpg");
        $("#para10").text("Siemens QF215A Ground Fault Circuit Interrupter, 15 Amp, 2 Pole, 120V ");
        $("#price10").text("$96.97");
        $('#rate10 span:last-child').addClass('material-symbols-sharp').text('star_rate_half').addClass('material-symbols-sharp')

        // product11
        $("#product11").attr("src", "/Ground Fault Circuit Interrupter (GFCI) Breaker/11.jpg");
        $("#para11").text("Automation Systems Interconnect 32C-16-120V DIN Rail Mount Ground Fault Circuit Breaker");
        $("#price11").text("$82.12");

        // product12
        $("#product12").attr("src", "/Ground Fault Circuit Interrupter (GFCI) Breaker/12.png");
        $("#para12").text("GE Industrial THQL2140GFT THQL Feeder Self-Test Ground Fault Circuit Interrupter");
        $("#price12").text("$349.99");

        // product13
        $("#product13").attr("src", "/Ground Fault Circuit Interrupter (GFCI) Breaker/13.jpg");
        $("#para13").text("Siemens QF220 20-Amp 2 Pole 240-Volt Ground Fault Circuit Interrupter");
        $("#price13").text("$87.48");
        $('#rate10 span:last-child').addClass('material-symbols-sharp').text('star_rate_half').addClass('material-symbols-sharp')

        // product14
        $("#product14").attr("src", "/Ground Fault Circuit Interrupter (GFCI) Breaker/14.jpg");
        $("#para14").text("EATON CORPORATION GFTCB230 Cutler Hammer Ground Fault Circuit Breaker ");
        $("#price14").text("$113.99");
        $('#rate14 span:last-child').addClass('material-symbols-sharp').text('star_rate_half').addClass('material-symbols-sharp')

        // product15
        $("#product15").attr("src", "/Ground Fault Circuit Interrupter (GFCI) Breaker/15.jpg");
        $("#para15").text("Eaton GFTCB260 Breaker, 60A, 2P, 120/240V, Type BR Ground Fault Breaker");
        $("#price15").text("$176.99");

        // product16
        $("#product16").attr("src", "/Ground Fault Circuit Interrupter (GFCI) Breaker/16.jpg");
        $("#para16").text("NDB1L-32C-20-120V DIN Rail Mount Ground Fault Circuit Breaker, Ground Fault Sensing");
        $("#price16").text("$24.97");

        // product17
        $("#product17").attr("src", "/Ground Fault Circuit Interrupter (GFCI) Breaker/17.png");
        $("#para17").text("GE THQL2150GFT Mount Type THQL Feeder Self-Test Ground Fault Circuit Interrupter");
        $("#price17").text("$474.99");

        // product18
        $("#product18").attr("src", "/Ground Fault Circuit Interrupter (GFCI) Breaker/18.jpg");
        $("#para18").text("60-Amp Double Pole 240-Volt Ground Fault Equipment Protection Circuit Breaker");
        $("#price18").text("$229.87");

        // product19
        $("#product19").attr("src", "/Ground Fault Circuit Interrupter (GFCI) Breaker/19.jpg");
        $("#para19").text("NDB1L-32C-25-120V Ground Fault Circuit Breaker, UL 1053 Ground Fault Sensing");
        $("#price19").text("$28.94");
        $('#rate14 span:last-child').addClass('material-symbols-sharp').text('star_rate_half').addClass('material-symbols-sharp')

        // product20
        $("#product20").attr("src", "/Ground Fault Circuit Interrupter (GFCI) Breaker/20.jpg");
        $("#para20").text("NDB1L-32C-32-24V Ground Fault Circuit Breaker, UL 1053 Ground Fault Sensing");
        $("#price20").text("$26.91");
        $('#rate20 span:last-child').addClass('material-symbols-sharp').text('star_rate').addClass('material-symbols-sharp')

        // product21
        $("#product21").attr("src", "/Ground Fault Circuit Interrupter (GFCI) Breaker/21.png");
        $("#para21").text("GE THQL2120GFT Plug-in Mount Type THQL Feeder Self-Test Ground Fault Circuit Interrupter");
        $("#price21").text("$113.98");

        // product22
        $("#product22").attr("src", "/Ground Fault Circuit Interrupter (GFCI) Breaker/22.jpg");
        $("#para22").text("QF17A60 Ground Fault Circuit Breaker, Series Trip with Neutral Switch (1P + N), 60 amp");
        $("#price22").text("$70.34");

        // product23
        $("#product23").attr("src", "/Ground Fault Circuit Interrupter (GFCI) Breaker/23.jpg");
        $("#para23").text("Siemens QE220H 20-Amp Double Pole 120/240-Volt Group Fault Equipment Protection Circuit Breaker");
        $("#price23").text("$730.33");
        $('#rate23 span:last-child').addClass('material-symbols-sharp').text('star_rate_half').addClass('material-symbols-sharp')

        // product24
        $("#product24").attr("src", "/Ground Fault Circuit Interrupter (GFCI) Breaker/24.jpg");
        $("#para24").text("Siemens BE115H 15-Amp Single Pole 120-Volt22KAIC Ground Fault Circuit interrupter");
        $("#price24").text("$434.67");

        // product25
        $("#product25").attr("src", "/Ground Fault Circuit Interrupter (GFCI) Breaker/25.jpg");
        $("#para25").text("Siemens BE215H 15-Amp Double Pole 120/240-Volt 22KAIC Ground Fault Circuit interrupter");
        $("#price25").text("$895.49");

        // product26
        $("#product26").attr("src", "/Ground Fault Circuit Interrupter (GFCI) Breaker/26.jpg");
        $("#para26").text("Siemens BE230H 30-Amp Double Pole 120/240-Volt 22KAIC Ground Fault Circuit interrupter");
        $("#price26").text("$1,353.36	");

        // product27
        $("#product27").attr("src", "/Ground Fault Circuit Interrupter (GFCI) Breaker/27.jpg");
        $("#para27").text("Murray 30-Amp Double Pole 120/240-Volt Group Fault Equipment Protection Circuit Breaker");
        $("#price27").text("$210.08");

        // product28
        $("#product28").attr("src", "/Ground Fault Circuit Interrupter (GFCI) Breaker/28.jpg");
        $("#para28").text(" Murray MP120EG 20-Amp Single Pole 120-Volt Group Fault Equipment Protection Circuit Breaker");
        $("#price28").text("$125.70");

        // product29
        $("#product29").attr("src", "/Ground Fault Circuit Interrupter (GFCI) Breaker/29.jpg");
        $("#para29").text("Siemens B220R 20-Amp Double Pole  Ground Fault Circuit Breaker, 240-Volt 10KAIC Bolt in Breaker");
        $("#price29").text("$130.62");

        // product30
        $("#product30").attr("src", "/Ground Fault Circuit Interrupter (GFCI) Breaker/30.jpg");
        $("#para30").text(" Siemens B215R 15-Amp Double Pole Ground Fault Circuit Breaker, 240-Volt 10KAIC Bolt in Breaker");
        $("#price30").text("$107.15");

      $('#contBtn').append('<button id="view-more3" class="btn btn-primary mt-3" class="justify-content-center">View More</button>');

      let itemsToShow = 10; // number of items to show initially
      let itemsIncrement = 5; // number of items to add when "View More" is clicked
      let $productItems = $(".product-item"); // get all product items
      let itemCount = $productItems.length; // get total number of product items
      let hiddenItemCount = itemCount - itemsToShow; // calculate number of items hidden initially
        
      $productItems.slice(itemsToShow).hide(); // hide all items beyond the initial number to show
        
      $("#view-more3").on("click", function() {
        // show next set of items and update number of hidden items
        $productItems.slice(itemsToShow, itemsToShow + itemsIncrement).fadeIn();
        itemsToShow += itemsIncrement;
        hiddenItemCount = itemCount - itemsToShow;
        
        // hide "View More" button if all items are shown
        if (hiddenItemCount <= 0) {
          $("#view-more3").hide(); 
          $('#view-more3').remove(); 
        }  
        });
    });

    $("#4").click(function(){
      $("#view-more").hide();
      $("#view-more2").hide();
      $("#view-more3").hide();
      
      // Changing Heading
      $(".categories").text("Standard, Double-Pole Breaker");

      // product1
      $("#product1").attr("src", "/Standard, Double-Pole Breaker/1.jpg");
      $("#para1").text("HOMT2020230CP Homeline, Double Pole Combination Tandem Circuit Breaker");
      $("#price1").html("$37.95");
      $('#rate1 span:last-child').addClass('material-symbols-sharp').text('star_rate_half').addClass('material-symbols-sharp');

      // product2
      $("#product2").attr("src", "/Standard, Double-Pole Breaker/2.jpg");
      $("#para2").text(" GE Plug in Circuit Breaker, THQL, Number of Poles 2, 20 Amps, 120/240VAC, Standard");
      $("#price2").text("$23.64");
      
      // product3
      $("#product3").attr("src", "/Standard, Double-Pole Breaker/3.jpg");
      $("#para3").text("MEATON BR240 Type BR Circuit Breaker, 120/240 VAC, 40 A, 10 kA, 2Poles Breaker");
      $("#price3").text("$18.68");
      $('#rate3 span:last-child').removeClass('material-symbols-sharp').text('star_rate').addClass('material-symbols-sharp');

      // product4
      $("#product4").attr("src", "/Standard, Double-Pole Breaker/4.jpg");
      $("#para4").text("Common/Thermal Magnetic Trip HomeLine 30 amps Surge 2-Pole Circuit Breaker");
      $("#price4").text("$21.99");

      // product5
      $("#product5").attr("src", "/Standard, Double-Pole Breaker/5.jpg");
      $("#para5").text("Q250 50-Amp Double Pole Type QP Circuit Breaker Surge 2-Pole Circuit Breaker");
      $("#price5").text("$16.96");
      $('#rate5 span:last-child').addClass('material-symbols-sharp').text('star_rate_half').addClass('material-symbols-sharp')

      // product6
      $("#product6").attr("src", "/Standard, Double-Pole Breaker/6.jpg");
      $("#para6").text("UBIP230-New Pushmatic P230 Replacement. Two Pole 30 Amp Circuit Breaker");
      $("#price6").text("$50.31");
      $('#rate6 span:last-child').addClass('material-symbols-sharp').text('star_rate').addClass('material-symbols-sharp');

      // product7
      $("#product7").attr("src", "/Standard, Double-Pole Breaker/7.jpg");
      $("#para7").text("UBIZ240 Zinsco QC40 Replacement Circuit Breaker, Two Pole 40 Amp Thick Series");
      $("#price7").text("$66.45");
      
      // product8
      $("#product8").attr("src", "/Standard, Double-Pole Breaker/8.jpg");
      $("#para8").text("UBIF0250N Electric Stab-Lok Two Pole 50 Amp Thin Series Circuit Breaker");
      $("#price8").text("$50.01");

      // product9
      $("#product9").attr("src", "/Standard, Double-Pole Breaker/9.jpg");
      $("#para9").text("Leviton LB230-T 30A 2-Pole Plug-On Standard Branch Circuit Breaker, 120/240 VAC");
      $("#price9").text("$19.08");
      $('#rate9 span:last-child').addClass('material-symbols-sharp').text('star_rate_half').addClass('material-symbols-sharp')

      // product10
      $("#product10").attr("src", "/Standard, Double-Pole Breaker/10.jpg");
      $("#para10").text("Q230 30-Amp Double Pole Type 2-Pole Plug-On Standard QP Circuit Breaker ");
      $("#price10").text("$16.05");
      $('#rate10 span:last-child').addClass('material-symbols-sharp').text('star_rate_half').addClass('material-symbols-sharp')

      // product11
      $("#product11").attr("src", "/Standard, Double-Pole Breaker/11.jpg");
      $("#para11").text("Siemens HI Q225 25-Amp Double Pole Type QP Circuit Breaker black");
      $("#price11").text("$82.12");
      $('#rate11 span:last-child').addClass('material-symbols-sharp').text('star_rate').addClass('material-symbols-sharp')

      // product12
      $("#product12").attr("src", "/Standard, Double-Pole Breaker/12.jpg");
      $("#para12").text("Siemens LOW Q225 25-Amp Double Pole Type QP Circuit Breaker");
      $("#price12").text("$16.81");
      $('#rate12 span:last-child').addClass('material-symbols-sharp').text('star_rate').addClass('material-symbols-sharp')

      // product13
      $("#product13").attr("src", "/Standard, Double-Pole Breaker/13.jpg");
      $("#para13").text("SIEMENS Q240 40-Amp Double Pole Type QP Circuit Breaker black");
      $("#price13").text("$16.11");

      // product14
      $("#product14").attr("src", "/Standard, Double-Pole Breaker/14.jpg");
      $("#para14").text("Homeline™ Q245 45-Amp Double Pole Type QP Circuit Breaker");
      $("#price14").text("$14.67");
      $('#rate14 span:last-child').addClass('material-symbols-sharp').text('star_rate_half').addClass('material-symbols-sharp')

      // product15
      $("#product15").attr("src", "/Standard, Double-Pole Breaker/15.jpg");
      $("#para15").text("Homeline™ Q245 70-Amp Double Pole Type QP Circuit Breaker");
      $("#price15").text("$32.00");

      // product16
      $("#product16").attr("src", "/Standard, Double-Pole Breaker/16.jpg");
      $("#para16").text("Homeline™ Q245 80-Amp Double Pole Type QP Circuit Breaker");
      $("#price16").text("$46.33");

      // product17
      $("#product17").attr("src", "/Standard, Double-Pole Breaker/17.jpg");
      $("#para17").text("Homeline™ Q245 90-Amp Double Pole Type QP Circuit Breaker");
      $("#price17").text("$38.00");

      // product18
      $("#product18").attr("src", "/Standard, Double-Pole Breaker/18.jpg");
      $("#para18").text("Homeline™ Q245 100-Amp Double Pole Type QP Circuit Breaker");
      $("#price18").text("$39.50");

      // product19
      $("#product19").attr("src", "/Standard, Double-Pole Breaker/19.jpg");
      $("#para19").text("GE Plug in Circuit Breaker, THQL, Number of Poles 2, 30 Amps, 120/240VAC, Standard");
      $("#price19").text("$22.41");

      // product20
      $("#product20").attr("src", "/Standard, Double-Pole Breaker/20.jpg");
      $("#para20").text("Square D HOM260 Plug-In Circuit Breaker, 60 Amp, 2-Pole");
      $("#price20").text("$27.00");
      $('#rate20 span:last-child').addClass('material-symbols-sharp').text('star_rate').addClass('material-symbols-sharp')

      // product21
      $("#product21").attr("src", "/Standard, Double-Pole Breaker/21.jpg");
      $("#para21").text("CH225 2-Pole 25-Amp Circuit Breaker, Type CH 3/4-Inch Plug-On Molded Case Circuit Breaker");
      $("#price21").text("$29.99");

      // product22
      $("#product22").attr("src", "/Standard, Double-Pole Breaker/22.jpg");
      $("#para22").text("CH250 2-Pole 50-Amp Circuit Breaker, Type CH 3/4-Inch Plug-On Molded Case Circuit Breaker");
      $("#price22").text("$34.99");

      // product23
      $("#product23").attr("src", "/Standard, Double-Pole Breaker/23.jpg");
      $("#para23").text("Square D HOM230 Circuit Breaker 1/pkg 30A 120/240V 2P 10kAIC");
      $("#price23").text("$16.32");
      $('#rate23 span:last-child').addClass('material-symbols-sharp').text('star_rate_half').addClass('material-symbols-sharp')

      // product24
      $("#product24").attr("src", "/Standard, Double-Pole Breaker/24.jpg");
      $("#para24").text("QO250 50 Amp 2-Pole Circuit Breaker for Square D, QO250CP Miniature Circuit Breaker");
      $("#price24").text("$24.99");

      // product25
      $("#product25").attr("src", "/Standard, Double-Pole Breaker/25.jpg");
      $("#para25").text("Square D - HOM2100CP Homeline 100-Amp  with Visi-Trip Indicator Two-Pole Circuit Breaker");
      $("#price25").text("$47.24");

      // product26
      $("#product26").attr("src", "/Standard, Double-Pole Breaker/26.jpg");
      $("#para26").text("QO260 60 Amp 2-Pole Circuit Breaker for Square D, QO260CP Miniature Circuit Breaker");
      $("#price26").text("$28.99");

      // product27
      $("#product27").attr("src", "/Standard, Double-Pole Breaker/27.jpg");
      $("#para27").text("Eaton CH260 Plug-On Mount Type CH Circuit Breaker 2-Pole 60 Amp 120/240 Volt AC");
      $("#price27").text("$77.03");

      // product28
      $("#product28").attr("src", "/Standard, Double-Pole Breaker/28.jpg");
      $("#para28").text("DC Miniature Circuit Breaker, 2 Pole 1000V 63 Amp Isolator, Thermal Magnetic Trip");
      $("#price28").text("$15.98");

      // product29
      $("#product29").attr("src", "/Standard, Double-Pole Breaker/29.jpg");
      $("#para29").text("Square D - HOM2100CP Homeline 100-Amp Two-Pole Circuit Breaker");
      $("#price29").text("$47.24");

      // product30
      $("#product30").attr("src", "/Standard, Double-Pole Breaker/30.jpg");
      $("#para30").text("Type Cl Circuit 120/240V, Cutler Hammer CH230 2-Pole 30-Amp Circuit ");
      $("#price30").text("$44.82");
      $('#rate30 span:last-child').addClass('material-symbols-sharp').text('star_rate_half').addClass('material-symbols-sharp');
 
      $('#contBtn').append('<button id="view-more4" class="btn btn-primary mt-3" class="justify-content-center">View More</button>');

      let itemsToShow = 10; // number of items to show initially
      let itemsIncrement = 5; // number of items to add when "View More" is clicked
      let $productItems = $(".product-item"); // get all product items
      let itemCount = $productItems.length; // get total number of product items
      let hiddenItemCount = itemCount - itemsToShow; // calculate number of items hidden initially
        
      $productItems.slice(itemsToShow).hide(); // hide all items beyond the initial number to show
        
      $("#view-more4").on("click", function() {
        // show next set of items and update number of hidden items
        $productItems.slice(itemsToShow, itemsToShow + itemsIncrement).fadeIn();
        itemsToShow += itemsIncrement;
        hiddenItemCount = itemCount - itemsToShow;
        
        // hide "View More" button if all items are shown
        if (hiddenItemCount <= 0) {
          $("#view-more4").hide(); 
          $('#view-more4').remove(); 
        }  
      });
    });


    // for Standard Single-Pole Breaker
    $("#5").click(function(){
      $("#view-more").hide();
      $("#view-more2").hide();
      $("#view-more3").hide();
      $("#view-more4").hide();
      
      // Changing Heading
      $(".categories").text("Standard Single-Pole Breaker");

      // product1
      $("#product1").attr("src", "/Standard, Single-Pole Breaker/1.jpg");
      $("#para1").text("LENKRAD A-Series Red Toggle Circuit Breaker - Single Pole 50A");
      $("#price1").html("$19.99");
      $('#rate1 span:last-child').addClass('material-symbols-sharp').text('star_rate_half').addClass('material-symbols-sharp');

      // product2
      $("#product2").attr("src", "/Standard, Single-Pole Breaker/2.jpg");
      $("#para2").text("GE Plug in Circuit Breaker, THQL, Number of Poles 1, 30 Amps, 120/240VAC,");
      $("#price2").text("$16.30");
      
      // product3
      $("#product3").attr("src", "/Standard, Single-Pole Breaker/3.jpg");
      $("#para3").text("Square D by Schneider Electric HOM120CP Homeline 20 Amp Single-Pole Circuit Breaker");
      $("#price3").text("$26.45");
      $('#rate3 span:last-child').removeClass('material-symbols-sharp').text('star_rate').addClass('material-symbols-sharp');

      // product4
      $("#product4").attr("src", "/Standard, Single-Pole Breaker/4.jpg");
      $("#para4").text(" 30 Amps, 120/240VAC, Q120 20-Amp Single Pole Type QP Circuit Breaker");
      $("#price4").text("$23.54");

      // product5
      $("#product5").attr("src", "/Standard, Single-Pole Breaker/5.jpg");
      $("#para5").text("SIEMENS SIEQ125 SIE Q125 SP 25A 120/240V CB, 25 Amp, Black");
      $("#price5").text("$12.05");
      $('#rate5 span:last-child').addClass('material-symbols-sharp').text('star_rate_half').addClass('material-symbols-sharp')

      // product6
      $("#product6").attr("src", "/Standard, Single-Pole Breaker/6.jpg");
      $("#para6").text("SIEMENS SIEQ125 SIE Q125 SP 25A 120/240V CB, 25 Amp, Black");
      $("#price6").text("$15.14");
      $('#rate6 span:last-child').addClass('material-symbols-sharp').text('star_rate').addClass('material-symbols-sharp');

      // product7
      $("#product7").attr("src", "/Standard, Single-Pole Breaker/7.jpg");
      $("#para7").text("SIEMENS SIEQ160 SIE Q160 SP 60A 120/240V CB, 60 Amp, Black");
      $("#price7").text("$17.31");
      
      // product8
      $("#product8").attr("src", "/Standard, Single-Pole Breaker/8.jpg");
      $("#para8").text("UBIF0250N Connecticut Electric UBIP-115, One Pole 15 Amp");
      $("#price8").text("$29.65");

      // product9
      $("#product9").attr("src", "/Standard, Single-Pole Breaker/9.jpg");
      $("#para9").text("Connecticut Electric UBIP120-New Pushmatic One Pole 20 Amp Circuit Breaker");
      $("#price9").text("$29.57");
      $('#rate9 span:last-child').addClass('material-symbols-sharp').text('star_rate_half').addClass('material-symbols-sharp')

      // product10
      $("#product10").attr("src", "/Standard, Single-Pole Breaker/10.jpg");
      $("#para10").text("UBIP230-New Pushmatic P230 Replacement. One Pole 30 Amp Circuit Breaker");
      $("#price10").text("$50.31");
      $('#rate10 span:last-child').addClass('material-symbols-sharp').text('star_rate_half').addClass('material-symbols-sharp')

      // product11
      $("#product11").attr("src", "/Standard, Single-Pole Breaker/11.jpg");
      $("#para11").text("UBIA20NI-New Wadsworth Type A Replacement.1 Pole 20 Amp Circuit Breaker");
      $("#price11").text("$56.61");
      $('#rate11 span:last-child').addClass('material-symbols-sharp').text('star_rate').addClass('material-symbols-sharp')

      // product12
      $("#product12").attr("src", "/Standard, Single-Pole Breaker/12.jpg");
      $("#para12").text("20A 1-Pole Plug-On Standard Branch Circuit Breaker, Thermal Magnetic");
      $("#price12").text("$9.78");
      $('#rate12 span:last-child').addClass('material-symbols-sharp').text('star_rate').addClass('material-symbols-sharp')

      // product13
      $("#product13").attr("src", "/Standard, Single-Pole Breaker/13.jpg");
      $("#para13").text("Square D Schneider Electric, QO120, Circuit Breaker 1P 20A, Black");
      $("#price13").text("$13.99");
      $('#rate13 span:last-child').addClass('material-symbols-sharp').text('star_rate_half').addClass('material-symbols-sharp')

      // product14
      $("#product14").attr("src", "/Standard, Single-Pole Breaker/14.jpg");
      $("#para14").text("Schneider Electric One Source QO120CP 20-Amp 1-Pole Plug Circuit Breaker");
      $("#price14").text("$13.97");
      $('#rate14 span:last-child').addClass('material-symbols-sharp').text('star_rate_half').addClass('material-symbols-sharp')

      // product15
      $("#product15").attr("src", "/Standard, Single-Pole Breaker/15.png");
      $("#para15").text("Cutler Hammer CHF120  Electric One Source Circuit Breaker, 1-Pole 20-Amp");
      $("#price15").text("$13.45");

      // product16
      $("#product16").attr("src", "/Standard, Single-Pole Breaker/16.jpg");
      $("#para16").text("Eaton Cutler-Hammer Single-Pole BR Type Circuit Breaker, 20-Amp, 120/240-Volt");
      $("#price16").text("$9.99");

      // product17
      $("#product17").attr("src", "/Standard, Single-Pole Breaker/17.jpg");
      $("#para17").text("UBITBA115L-New Challenger One Pole 15 Amp Left Clip Circuit Breaker");
      $("#price17").text("$18.70");

      // product18
      $("#product18").attr("src", "/Standard, Single-Pole Breaker/18.jpg");
      $("#para18").text("quare D QO130 Plug-In Mount Standard Miniature Circuit Breaker 1-Pole 30 Amp");
      $("#price18").text("$13.95");

      // product19
      $("#product19").attr("src", "/Standard, Single-Pole Breaker/19.jpg");
      $("#para19").text("omeline Single Pole Miniature Standard Miniature Circuit Breaker (120V, 50A)");
      $("#price19").text("$18.45");
      $('#rate20 span:last-child').addClass('material-symbols-sharp').text('star_rate_half').addClass('material-symbols-sharp')

      // product20
      $("#product20").attr("src", "/Standard, Single-Pole Breaker/20.jpg");
      $("#para20").text("Cutler Hammer 30 Amp Single Standard Miniature Pole Circuit Breaker CHF130");
      $("#price20").text("$23.00");
      $('#rate20 span:last-child').addClass('material-symbols-sharp').text('star_rate').addClass('material-symbols-sharp')

      // product21
      $("#product21").attr("src", "/Standard, Single-Pole Breaker/21.jpg");
      $("#para21").text("UBITBA120R-New Challenger MH120R Type A Replacement. One Pole 20 Amp Right Clip Circuit Breaker");
      $("#price21").text("$23.74");

      // product22
      $("#product22").attr("src", "/Standard, Single-Pole Breaker/22.jpg");
      $("#para22").text("UBIA20NI-New Wadsworth Type A Replacement.1 Pole 20 Amp Circuit Breaker, Gray");
      $("#price22").text("$56.61");

      // product23
      $("#product23").attr("src", "/Standard, Single-Pole Breaker/23.jpg");
      $("#para23").text("Square D by Schneider Electric QO115CP Circuit Breaker, Black");
      $("#price23").text("$13.85");
      $('#rate23 span:last-child').addClass('material-symbols-sharp').text('star_rate_half').addClass('material-symbols-sharp')

      // product24
      $("#product24").attr("src", "/Standard, Single-Pole Breaker/24.jpg");
      $("#para24").text("GE Plug in Circuit Breaker, THQL, Number of Poles 1, 15 Amps, 120/240VAC, Standard");
      $("#price24").text("$16.25");

      // product25
      $("#product25").attr("src", "/Standard, Single-Pole Breaker/25.jpg");
      $("#para25").text("GE GIDDS-608007 608007 Single Pole 1/2 Thqp Breaker 20A");
      $("#price25").text("$12.24");

      // product26
      $("#product26").attr("src", "/Standard, Single-Pole Breaker/26.jpg");
      $("#para26").text("GE Plug in Circuit Breaker, THQL, Number of Poles 1, 20 Amps, 120/240VAC, Standard");
      $("#price26").text("$15.45");

      // product27
      $("#product27").attr("src", "/Standard, Single-Pole Breaker/27.jpg");
      $("#para27").text("Eaton CH260 Plug-On Mount Circuit Breaker, 30A, 1P, 10Ka, 120Vac");
      $("#price27").text("$13.50");

      // product28
      $("#product28").attr("src", "/Standard, Single-Pole Breaker/28.jpg");
      $("#para28").text("UBIZ20-New Zinsco One Pole 20 Amp Thick Series, Thermal Magnetic Trip");
      $("#price28").text("$38.86");

      // product29
      $("#product29").attr("src", "/Standard, Single-Pole Breaker/29.jpg");
      $("#para29").text("HOM2100CP Q130H 30-Amp Single Pole 22kA Type QPH Circuit Breaker");
      $("#price29").text("$27.62");

      // product30
      $("#product30").attr("src", "/Standard, Single-Pole Breaker/30.jpg");
      $("#para30").text("Connecticut Electric UBIZ15 One Pole 15 Amp Thick Series Circuit Breaker");
      $("#price30").text("$23.75");
      $('#rate30 span:last-child').addClass('material-symbols-sharp').text('star_rate_half').addClass('material-symbols-sharp');
 
      $('#contBtn').append('<button id="view-more4" class="btn btn-primary mt-3" class="justify-content-center">View More</button>');

      let itemsToShow = 10; // number of items to show initially
      let itemsIncrement = 5; // number of items to add when "View More" is clicked
      let $productItems = $(".product-item"); // get all product items
      let itemCount = $productItems.length; // get total number of product items
      let hiddenItemCount = itemCount - itemsToShow; // calculate number of items hidden initially
        
      $productItems.slice(itemsToShow).hide(); // hide all items beyond the initial number to show
        
      $("#view-more4").on("click", function() {
        // show next set of items and update number of hidden items
        $productItems.slice(itemsToShow, itemsToShow + itemsIncrement).fadeIn();
        itemsToShow += itemsIncrement;
        hiddenItemCount = itemCount - itemsToShow;
        
        // hide "View More" button if all items are shown
        if (hiddenItemCount <= 0) {
          $("#view-more4").hide(); 
          $('#view-more4').remove(); 
        }  
      });
    });
});

