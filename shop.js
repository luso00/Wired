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

    var menu_btn = document.querySelector("#menu-btn");
    var sidebar = document.querySelector("#sidebar");
    var container = document.querySelector(".my-container");
    menu_btn.addEventListener("click", () => {
      sidebar.classList.toggle("active-nav");
      container.classList.toggle("active-cont");
    });
    var backToTopBtn = document.getElementById("back-to-top-btn");
  window.onscroll = function() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  backToTopBtn.style.display = "block";
} else {
  backToTopBtn.style.display = "none";
}
};
});





$(document).ready(function(){
   

       //for product1
       $('#product1').click(function() {
        var imageSrc = $("#product1").attr("src");
        var name = $(this).data('name');
        var price = parseFloat($(this).data('price'));
        var sku = parseFloat($(this).data('sku'));
      
        var cartItem = {
          name: name,
          price: price,
          src: imageSrc,
          sku: sku
        };
        // Set cartItem in local storage
        localStorage.setItem('cartItem', JSON.stringify
        (cartItem));
        window.location.href = "Purchase.html";
      });

        //for product2
      $('#product2').click(function() {
        var imageSrc = $("#product2").attr("src");
        var name = $(this).data('name');
        var price = parseFloat($(this).data('price'));
        var sku = parseFloat($(this).data('sku'));
      
        var cartItem = {
          name: name,
          price: price,
          src: imageSrc,
          sku: sku
        };
        // Set cartItem in local storage
        localStorage.setItem('cartItem', JSON.stringify
        (cartItem));
        window.location.href = "Purchase.html";
      });

      //for product3
      $('#product3').click(function() {
        var imageSrc = $("#product3").attr("src");
        var name = $(this).data('name');
        var price = parseFloat($(this).data('price'));
        var sku = parseFloat($(this).data('sku'));
      
        var cartItem = {
          name: name,
          price: price,
          src: imageSrc,
          sku: sku
        };
        // Set cartItem in local storage
        localStorage.setItem('cartItem', JSON.stringify
        (cartItem));
        window.location.href = "Purchase.html";
      });

      //for product4
      $('#product4').click(function() {
        var imageSrc = $("#product4").attr("src");
        var name = $(this).data('name');
        var price = parseFloat($(this).data('price'));
        var sku = parseFloat($(this).data('sku'));
      
        var cartItem = {
          name: name,
          price: price,
          src: imageSrc,
          sku: sku
        };
        // Set cartItem in local storage
        localStorage.setItem('cartItem', JSON.stringify
        (cartItem));
        window.location.href = "Purchase.html";
      });


      //for product5
      $('#product5').click(function() {
        var imageSrc = $("#product5").attr("src");
        var name = $(this).data('name');
        var price = parseFloat($(this).data('price'));
        var sku = parseFloat($(this).data('sku'));
      
        var cartItem = {
          name: name,
          price: price,
          src: imageSrc,
          sku: sku
        };
        // Set cartItem in local storage
        localStorage.setItem('cartItem', JSON.stringify
        (cartItem));
        window.location.href = "Purchase.html";
      });


      //for product6
      $('#product6').click(function() {
        var imageSrc = $("#product6").attr("src");
        var name = $(this).data('name');
        var price = parseFloat($(this).data('price'));
        var sku = parseFloat($(this).data('sku'));
      
        var cartItem = {
          name: name,
          price: price,
          src: imageSrc,
          sku: sku
        };
        // Set cartItem in local storage
        localStorage.setItem('cartItem', JSON.stringify
        (cartItem));
        window.location.href = "Purchase.html";
      });


      //for product7
      $('#product7').click(function() {
        var imageSrc = $("#product7").attr("src");
        var name = $(this).data('name');
        var price = parseFloat($(this).data('price'));
        var sku = parseFloat($(this).data('sku'));
      
        var cartItem = {
          name: name,
          price: price,
          src: imageSrc,
          sku: sku
        };
        // Set cartItem in local storage
        localStorage.setItem('cartItem', JSON.stringify
        (cartItem));
        window.location.href = "Purchase.html";
      });


      //for product8
      $('#product8').click(function() {
        var imageSrc = $("#product8").attr("src");
        var name = $(this).data('name');
        var price = parseFloat($(this).data('price'));
        var sku = parseFloat($(this).data('sku'));
      
        var cartItem = {
          name: name,
          price: price,
          src: imageSrc,
          sku: sku
        };
        // Set cartItem in local storage
        localStorage.setItem('cartItem', JSON.stringify
        (cartItem));
        window.location.href = "Purchase.html";
      });


      //for product9
      $('#product9').click(function() {
        var imageSrc = $("#product9").attr("src");
        var name = $(this).data('name');
        var price = parseFloat($(this).data('price'));
        var sku = parseFloat($(this).data('sku'));
      
        var cartItem = {
          name: name,
          price: price,
          src: imageSrc,
          sku: sku
        };
        // Set cartItem in local storage
        localStorage.setItem('cartItem', JSON.stringify
        (cartItem));
        window.location.href = "Purchase.html";
      });


      //for product10
      $('#product10').click(function() {
        var imageSrc = $("#product10").attr("src");
        var name = $(this).data('name');
        var price = parseFloat($(this).data('price'));
        var sku = parseFloat($(this).data('sku'));
      
        var cartItem = {
          name: name,
          price: price,
          src: imageSrc,
          sku: sku
        };
        // Set cartItem in local storage
        localStorage.setItem('cartItem', JSON.stringify
        (cartItem));
        window.location.href = "Purchase.html";
      });


      //for product11
      $('#product11').click(function() {
        var imageSrc = $("#product11").attr("src");
        var name = $(this).data('name');
        var price = parseFloat($(this).data('price'));
        var sku = parseFloat($(this).data('sku'));
      
        var cartItem = {
          name: name,
          price: price,
          src: imageSrc,
          sku: sku
        };
        // Set cartItem in local storage
        localStorage.setItem('cartItem', JSON.stringify
        (cartItem));
        window.location.href = "Purchase.html";
      });


      //for product12
      $('#product12').click(function() {
        var imageSrc = $("#product12").attr("src");
        var name = $(this).data('name');
        var price = parseFloat($(this).data('price'));
        var sku = parseFloat($(this).data('sku'));
      
        var cartItem = {
          name: name,
          price: price,
          src: imageSrc,
          sku: sku
        };
        // Set cartItem in local storage
        localStorage.setItem('cartItem', JSON.stringify
        (cartItem));
        window.location.href = "Purchase.html";
      });


      //for product13
      $('#product13').click(function() {
        var imageSrc = $("#product13").attr("src");
        var name = $(this).data('name');
        var price = parseFloat($(this).data('price'));
        var sku = parseFloat($(this).data('sku'));
      
        var cartItem = {
          name: name,
          price: price,
          src: imageSrc,
          sku: sku
        };
        // Set cartItem in local storage
        localStorage.setItem('cartItem', JSON.stringify
        (cartItem));
        window.location.href = "Purchase.html";
      });


      //for product14
      $('#product14').click(function() {
        var imageSrc = $("#product14").attr("src");
        var name = $(this).data('name');
        var price = parseFloat($(this).data('price'));
        var sku = parseFloat($(this).data('sku'));
      
        var cartItem = {
          name: name,
          price: price,
          src: imageSrc,
          sku: sku
        };
        // Set cartItem in local storage
        localStorage.setItem('cartItem', JSON.stringify
        (cartItem));
        window.location.href = "Purchase.html";
      });


      //for product15
      $('#product15').click(function() {
        var imageSrc = $("#product15").attr("src");
        var name = $(this).data('name');
        var price = parseFloat($(this).data('price'));
        var sku = parseFloat($(this).data('sku'));
      
        var cartItem = {
          name: name,
          price: price,
          src: imageSrc,
          sku: sku
        };
        // Set cartItem in local storage
        localStorage.setItem('cartItem', JSON.stringify
        (cartItem));
        window.location.href = "Purchase.html";
      });


      //for product16
      $('#product16').click(function() {
        var imageSrc = $("#product16").attr("src");
        var name = $(this).data('name');
        var price = parseFloat($(this).data('price'));
        var sku = parseFloat($(this).data('sku'));
      
        var cartItem = {
          name: name,
          price: price,
          src: imageSrc,
          sku: sku
        };
        // Set cartItem in local storage
        localStorage.setItem('cartItem', JSON.stringify
        (cartItem));
        window.location.href = "Purchase.html";
      });


      //for product17
      $('#product17').click(function() {
        var imageSrc = $("#product17").attr("src");
        var name = $(this).data('name');
        var price = parseFloat($(this).data('price'));
        var sku = parseFloat($(this).data('sku'));
      
        var cartItem = {
          name: name,
          price: price,
          src: imageSrc,
          sku: sku
        };
        // Set cartItem in local storage
        localStorage.setItem('cartItem', JSON.stringify
        (cartItem));
        window.location.href = "Purchase.html";
      });


      //for product18
      $('#product18').click(function() {
        var imageSrc = $("#product18").attr("src");
        var name = $(this).data('name');
        var price = parseFloat($(this).data('price'));
        var sku = parseFloat($(this).data('sku'));
      
        var cartItem = {
          name: name,
          price: price,
          src: imageSrc,
          sku: sku
        };
        // Set cartItem in local storage
        localStorage.setItem('cartItem', JSON.stringify
        (cartItem));
        window.location.href = "Purchase.html";
      });


      //for product19
      $('#product19').click(function() {
        var imageSrc = $("#product19").attr("src");
        var name = $(this).data('name');
        var price = parseFloat($(this).data('price'));
        var sku = parseFloat($(this).data('sku'));
      
        var cartItem = {
          name: name,
          price: price,
          src: imageSrc,
          sku: sku
        };
        // Set cartItem in local storage
        localStorage.setItem('cartItem', JSON.stringify
        (cartItem));
        window.location.href = "Purchase.html";
      });


      //for product20
      $('#product20').click(function() {
        var imageSrc = $("#product20").attr("src");
        var name = $(this).data('name');
        var price = parseFloat($(this).data('price'));
        var sku = parseFloat($(this).data('sku'));
      
        var cartItem = {
          name: name,
          price: price,
          src: imageSrc,
          sku: sku
        };
        // Set cartItem in local storage
        localStorage.setItem('cartItem', JSON.stringify
        (cartItem));
        window.location.href = "Purchase.html";
      });


      //for product21
      $('#product21').click(function() {
        var imageSrc = $("#product21").attr("src");
        var name = $(this).data('name');
        var price = parseFloat($(this).data('price'));
        var sku = parseFloat($(this).data('sku'));
      
        var cartItem = {
          name: name,
          price: price,
          src: imageSrc,
          sku: sku
        };
        // Set cartItem in local storage
        localStorage.setItem('cartItem', JSON.stringify
        (cartItem));
        window.location.href = "Purchase.html";
      });


      //for product22
      $('#product22').click(function() {
        var imageSrc = $("#product22").attr("src");
        var name = $(this).data('name');
        var price = parseFloat($(this).data('price'));
        var sku = parseFloat($(this).data('sku'));
      
        var cartItem = {
          name: name,
          price: price,
          src: imageSrc,
          sku: sku
        };
        // Set cartItem in local storage
        localStorage.setItem('cartItem', JSON.stringify
        (cartItem));
        window.location.href = "Purchase.html";
      });


      //for product23
      $('#product23').click(function() {
        var imageSrc = $("#product23").attr("src");
        var name = $(this).data('name');
        var price = parseFloat($(this).data('price'));
        var sku = parseFloat($(this).data('sku'));
      
        var cartItem = {
          name: name,
          price: price,
          src: imageSrc,
          sku: sku
        };
        // Set cartItem in local storage
        localStorage.setItem('cartItem', JSON.stringify
        (cartItem));
        window.location.href = "Purchase.html";
      });


      //for product24
      $('#product24').click(function() {
        var imageSrc = $("#product24").attr("src");
        var name = $(this).data('name');
        var price = parseFloat($(this).data('price'));
        var sku = parseFloat($(this).data('sku'));
      
        var cartItem = {
          name: name,
          price: price,
          src: imageSrc,
          sku: sku
        };
        // Set cartItem in local storage
        localStorage.setItem('cartItem', JSON.stringify
        (cartItem));
        window.location.href = "Purchase.html";
      });


      //for product25
      $('#product25').click(function() {
        var imageSrc = $("#product25").attr("src");
        var name = $(this).data('name');
        var price = parseFloat($(this).data('price'));
        var sku = parseFloat($(this).data('sku'));
      
        var cartItem = {
          name: name,
          price: price,
          src: imageSrc,
          sku: sku
        };
        // Set cartItem in local storage
        localStorage.setItem('cartItem', JSON.stringify
        (cartItem));
        window.location.href = "Purchase.html";
      });


      //for product26
      $('#product26').click(function() {
        var imageSrc = $("#product26").attr("src");
        var name = $(this).data('name');
        var price = parseFloat($(this).data('price'));
        var sku = parseFloat($(this).data('sku'));
      
        var cartItem = {
          name: name,
          price: price,
          src: imageSrc,
          sku: sku
        };
        // Set cartItem in local storage
        localStorage.setItem('cartItem', JSON.stringify
        (cartItem));
        window.location.href = "Purchase.html";
      });


      //for product27
      $('#product27').click(function() {
        var imageSrc = $("#product27").attr("src");
        var name = $(this).data('name');
        var price = parseFloat($(this).data('price'));
        var sku = parseFloat($(this).data('sku'));
      
        var cartItem = {
          name: name,
          price: price,
          src: imageSrc,
          sku: sku
        };
        // Set cartItem in local storage
        localStorage.setItem('cartItem', JSON.stringify
        (cartItem));
        window.location.href = "Purchase.html";
      });


      //for product28
      $('#product28').click(function() {
        var imageSrc = $("#product28").attr("src");
        var name = $(this).data('name');
        var price = parseFloat($(this).data('price'));
        var sku = parseFloat($(this).data('sku'));
      
        var cartItem = {
          name: name,
          price: price,
          src: imageSrc,
          sku: sku
        };
        // Set cartItem in local storage
        localStorage.setItem('cartItem', JSON.stringify
        (cartItem));
        window.location.href = "Purchase.html";
      });


      //for product29
      $('#product29').click(function() {
        var imageSrc = $("#product29").attr("src");
        var name = $(this).data('name');
        var price = parseFloat($(this).data('price'));
        var sku = parseFloat($(this).data('sku'));
      
        var cartItem = {
          name: name,
          price: price,
          src: imageSrc,
          sku: sku
        };
        // Set cartItem in local storage
        localStorage.setItem('cartItem', JSON.stringify
        (cartItem));
        window.location.href = "Purchase.html";
      });

      //for product30
      $('#product30').click(function() {
        var imageSrc = $("#product30").attr("src");
        var name = $(this).data('name');
        var price = parseFloat($(this).data('price'));
        var sku = parseFloat($(this).data('sku'));
      
        var cartItem = {
          name: name,
          price: price,
          src: imageSrc,
          sku: sku
        };
        // Set cartItem in local storage
        localStorage.setItem('cartItem', JSON.stringify
        (cartItem));
        window.location.href = "Purchase.html";
    });
  
  
  // For Arc Fault Circuit Interrupter (AFCI) Breaker Page
    $("#2").click(function(){
      // Changing Heading;
      $(".categories").text("Arc Fault Circuit Interrupter (AFCI) Breaker");

        //product1
        $('#product1')
        .attr('src', 'Arc Fault Circuit Interrupter (AFCI) Breaker/1.jpg')
        .attr('data-name', 'Eaton 50-Amp Type GFI Circuit Breaker Arc Fault Circuit Interrupter')
        .attr('data-price', '84.95')
        .attr('data-sku', '234234326')
        .removeAttr('data-src');
        // Update the text content of the <p> element
        $('#para1').text('Eaton 50-Amp Type GFI Circuit Breaker Arc Fault Circuit Interrupter');
        // Update the text content of the <h3> element that displays the price
        $('#price1').text('$84.95');
        // Update the number of stars in the <h3> element that displays the rating
        $('#rate1').html(`
        <span class="material-symbols-sharp">
        star_rate
        </span>
        <span class="material-symbols-sharp">
            star_rate
        </span>
        <span class="material-symbols-sharp">
            star_rate
        </span>
        <span class="material-symbols-sharp">
            star_rate_half
        </span>
        `);
        $('#rate1, #rate1 span').css('width', '15px');
        

        // product2
        $('#product2')
        .attr('src', 'Arc Fault Circuit Interrupter (AFCI) Breaker/2.jpg')
        .attr('data-name', 'Eaton 20-Amp Type BR Quadplex Circuit Breaker Arc Fault Circuit Interrupter')
        .attr('data-price', '54.45')
        .attr('data-sku', '366753535')
        .removeAttr('data-src');
        // Update the text content of the <p> element
        $('#para2').text('Eaton 20-Amp Type BR Quadplex Circuit Breaker Arc Fault Circuit Interrupter');
        // Update the text content of the <h3> element that displays the price
        $('#price2').text('$54.45');
        // Update the number of stars in the <h3> element that displays the rating
        $('#rate2').html(`
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
        `);
        $('#rate2, #rate2 span').css('width', '15px');
        
        // product3
        $('#product3')
        .attr('src', 'Arc Fault Circuit Interrupter (AFCI) Breaker/3.jpg')
        .attr('data-name', 'Molded Case Circuit Breaker EZC250N Industrial type Arc Fault Circuit Interrupter')
        .attr('data-price', '144.45')
        .attr('data-sku', '273834743')
        .removeAttr('data-src');
        // Update the text content of the <p> element
        $('#para3').text('Molded Case Circuit Breaker EZC250N Industrial type Arc Fault Circuit Interrupter');
        // Update the text content of the <h3> element that displays the price
        $('#price3').text('$144.45');
        // Update the number of stars in the <h3> element that displays the rating
        $('#rate3').html(`
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate_half</span>
        `);
        $('#rate3, #rate3 span').css('width', '15px');

        // product4
        $('#product4')
        .attr('src', 'Arc Fault Circuit Interrupter (AFCI) Breaker/4.jpg')
        .attr('data-name', '50-Amp Homeline Plug-On Circuit Breaker Arc Fault Circuit Interrupter')
        .attr('data-price', '124.45')
        .attr('data-sku', '324782450')
        .removeAttr('data-src');
        // Update the text content of the <p> element
        $('#para4').text('50-Amp Homeline Plug-On Circuit Breaker Arc Fault Circuit Interrupter');
        // Update the text content of the <h3> element that displays the price
        $('#price4').text('$124.45');
        // Update the number of stars in the <h3> element that displays the rating
        $('#rate4').html(`
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
        `);
        $('#rate4, #rate4 span').css('width', '15px');

      // product5
      $('#product5')
        .attr('src', 'Arc Fault Circuit Interrupter (AFCI) Breaker/5.png')
        .attr('data-name', '40-Amp Type QO Standard Circuit Breaker Arc Fault Circuit Interrupter')
        .attr('data-price', '192.32')
        .attr('data-sku', '284628421')
        .removeAttr('data-src');
        // Update the text content of the <p> element
        $('#para5').text('40-Amp Type QO Standard Circuit Breaker Arc Fault Circuit Interrupter');
        // Update the text content of the <h3> element that displays the price
        $('#price5').text('$192.32');
        // Update the number of stars in the <h3> element that displays the rating
        $('#rate5').html(`
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate_half</span>
        `);
        $('#rate5, #rate5 span').css('width', '15px');

      // product6
      $('#product6')
      .attr('src', 'Arc Fault Circuit Interrupter (AFCI) Breaker/6.jpg')
      .attr('data-name', 'Type HFDE LSI Electronic Tandem Twin Breaker Arc Fault Circuit Interrupter')
      .attr('data-price', '88.28')
      .attr('data-sku', '385352178')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para6').text('Type HFDE LSI Electronic Tandem Twin Breaker Arc Fault Circuit Interrupter');
      // Update the text content of the <h3> element that displays the price
      $('#price6').text('$88.28');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate6').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate6, #rate6 span').css('width', '15px');

      // product7
      $('#product7')
      .attr('src', 'Arc Fault Circuit Interrupter (AFCI) Breaker/7.jpg')
      .attr('data-name', 'Homeline™ Plug-On Neutral Combination Arc Fault Circuit Breaker')
      .attr('data-price', '77.05')
      .attr('data-sku', '962534245')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para7').text('Homeline™ Plug-On Neutral Combination Arc Fault Circuit Breaker');
      // Update the text content of the <h3> element that displays the price
      $('#price7').text('$77.05');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate7').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate_half</span>
      `);
      $('#rate7, #rate7 span').css('width', '15px');
      
      // product8
      $('#product8')
      .attr('src', 'Arc Fault Circuit Interrupter (AFCI) Breaker/8.jpg')
      .attr('data-name', 'T15-Amp Type LSI Electronic Afci Fire Guard Arc Fault Circuit Breaker')
      .attr('data-price', '134.45')
      .attr('data-sku', '828394623')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para8').text('T15-Amp Type LSI Electronic Afci Fire Guard Arc Fault Circuit Breaker');
      // Update the text content of the <h3> element that displays the price
      $('#price8').text('$134.45');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate8').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate8, #rate8 span').css('width', '15px');
      

      // product9
      $('#product9')
      .attr('src', 'Arc Fault Circuit Interrupter (AFCI) Breaker/9.jpg')
      .attr('data-name', '120/240 V, Plug-On Mounting  Neutral Combination Arc Fault Circuit Breaker')
      .attr('data-price', '88.35')
      .attr('data-sku', '495726475')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para9').text('120/240 V, Plug-On Mounting  Neutral Combination Arc Fault Circuit Breaker');
      // Update the text content of the <h3> element that displays the price
      $('#price9').text('$88.35');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate9').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate9, #rate9 span').css('width', '15px');

      // product10
      $('#product10')
      .attr('src', 'Arc Fault Circuit Interrupter (AFCI) Breaker/10.jpg')
      .attr('data-name', '30-Amp Type CH Standard Electronic Afci Fire Guard Circuit Breaker Arc Fault')
      .attr('data-price', '82.12')
      .attr('data-sku', '245410573')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para10').text('30-Amp Type CH Standard Electronic Afci Fire Guard Circuit Breaker Arc Fault');
      // Update the text content of the <h3> element that displays the price
      $('#price10').text('$94.99');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate10').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate10, #rate10 span').css('width', '15px');

      // product11
      $('#product11')
      .attr('src', 'Arc Fault Circuit Interrupter (AFCI) Breaker/11.jpg')
      .attr('data-name', '20-Amp Type UBIP Standard  Industrial type Arc Fault Circuit Interrupter')
      .attr('data-price', '82.12')
      .attr('data-sku', '735204561')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para11').text('20-Amp Type UBIP Standard  Industrial type Arc Fault Circuit Interrupter');
      // Update the text content of the <h3> element that displays the price
      $('#price11').text('$82.12');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate11').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate11, #rate11 span').css('width', '15px');

      // product12
      $('#product12')
      .attr('src', 'Arc Fault Circuit Interrupter (AFCI) Breaker/12.jpg')
      .attr('data-name', '50-Amp Type UBIP Standard  Industrial type Arc Fault Circuit Interrupter')
      .attr('data-price', '124.88')
      .attr('data-sku', '184345678')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para12').text('50-Amp Type UBIP Standard  Industrial type Arc Fault Circuit Interrupter');
      // Update the text content of the <h3> element that displays the price
      $('#price12').text('$124.88');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate12').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate12, #rate12 span').css('width', '15px');

      // product13
      $('#product13')
      .attr('src', 'Arc Fault Circuit Interrupter (AFCI) Breaker/13.jpg')
      .attr('data-name', '40-Amp Type UBIP Standard  Industrial type Arc Fault Circuit Interrupter')
      .attr('data-price', '112.12')
      .attr('data-sku', '945472789')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para13').text('40-Amp Type UBIP Standard  Industrial type Arc Fault Circuit Interrupter');
      // Update the text content of the <h3> element that displays the price
      $('#price13').text('$112.12');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate13').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate_half</span>
      `);
      $('#rate13, #rate13 span').css('width', '15px');

      // product14
      $('#product14')
      .attr('src', 'Arc Fault Circuit Interrupter (AFCI) Breaker/14.jpg')
      .attr('data-name', 'Homeline™ Double-Pole Plug-On Neutral Combination Arc Fault Circuit Breaker')
      .attr('data-price', '74.82')
      .attr('data-sku', '474925723')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para14').text('Homeline™ Double-Pole Plug-On Neutral Combination Arc Fault Circuit Breaker');
      // Update the text content of the <h3> element that displays the price
      $('#price14').text('$74.82');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate14').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate_half</span>
      `);
      $('#rate14, #rate14 span').css('width', '15px');

      // product15
      $('#product15')
      .attr('src', 'Arc Fault Circuit Interrupter (AFCI) Breaker/15.jpg')
      .attr('data-name', '30-Amp Type UBIP Standard  Industrial type Arc Fault Circuit Interrupter')
      .attr('data-price', '77.72')
      .attr('data-sku', '528394024')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para15').text('30-Amp Type UBIP Standard  Industrial type Arc Fault Circuit Interrupter');
      // Update the text content of the <h3> element that displays the price
      $('#price15').text('$77.72');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate15').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate15, #rate15 span').css('width', '15px');

      // product16
      $('#product16')
      .attr('src', 'Arc Fault Circuit Interrupter (AFCI) Breaker/16.jpg')
      .attr('data-name', '20-Amp Type UBIP Standard  Industrial type Arc Fault Circuit Interrupter')
      .attr('data-price', '68.60')
      .attr('data-sku', '594524567')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para16').text('20-Amp Type UBIP Standard  Industrial type Arc Fault Circuit Interrupter');
      // Update the text content of the <h3> element that displays the price
      $('#price16').text('$68.60');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate16').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate16, #rate16 span').css('width', '15px');

      // product17
      $('#product17')
      .attr('src', 'Arc Fault Circuit Interrupter (AFCI) Breaker/17.jpg')
      .attr('data-name', '20-Amp Type Double-Pole Plug-On Cl Replacement  Arc Fault Circuit Interrupter')
      .attr('data-price', '$145.22')
      .attr('data-sku', '628394561')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para17').text('20-Amp Type Double-Pole Plug-On Cl Replacement  Arc Fault Circuit Interrupter');
      // Update the text content of the <h3> element that displays the price
      $('#price17').text('$145.22');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate17').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate17, #rate17 span').css('width', '15px');

      // product18
      $('#product18')
      .attr('src', 'Arc Fault Circuit Interrupter (AFCI) Breaker/18.jpg')
      .attr('data-name', 'SIEMENS 15-Amp Type UBIP Standard  Industrial type Arc Fault Circuit Interrupter')
      .attr('data-price', '62.77')
      .attr('data-sku', '213268985')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para18').text('SIEMENS 15-Amp Type UBIP Standard  Industrial type Arc Fault Circuit Interrupter');
      // Update the text content of the <h3> element that displays the price
      $('#price18').text('$62.77');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate18').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate_half</span>
      `);
      $('#rate18, #rate18 span').css('width', '15px');

      // product19
      $('#product19')
      .attr('src', 'Arc Fault Circuit Interrupter (AFCI) Breaker/19.jpg')
      .attr('data-name', 'SIEMENS 120/240 V, Plug-In Mounting Arc Fault Circuit Interrupter')
      .attr('data-price', '111.52')
      .attr('data-sku', '498374856')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para19').text('SIEMENS 120/240 V, Plug-In Mounting Arc Fault Circuit Interrupter');
      // Update the text content of the <h3> element that displays the price
      $('#price19').text('$111.52');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate19').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate_half</span>
      `);
      $('#rate19, #rate19 span').css('width', '15px');

      // product20
      $('#product20')
      .attr('src', 'Arc Fault Circuit Interrupter (AFCI) Breaker/20.jpg')
      .attr('data-name', 'SIEMENS 120/240 V, Plug-In Electronic Afci Fire Guard Circuit Interrupter')
      .attr('data-price', '152.22')
      .attr('data-sku', '202387563')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para20').text('SIEMENS 120/240 V, Plug-In Electronic Afci Fire Guard Circuit Interrupter');
      // Update the text content of the <h3> element that displays the price
      $('#price20').text('$152.22');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate20').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate20, #rate20 span').css('width', '15px');

      // product21
      $('#product21')
      .attr('src', 'Arc Fault Circuit Interrupter (AFCI) Breaker/21.jpg')
      .attr('data-name', '5-Amp Combination Standard Industrial Arc Fault Circuit Breaker')
      .attr('data-price', '49.82')
      .attr('data-sku', '203846253')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para21').text('5-Amp Combination Standard Industrial Arc Fault Circuit Breaker');
      // Update the text content of the <h3> element that displays the price
      $('#price21').text('$49.82');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate21').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate21, #rate21 span').css('width', '15px');

      // product22
      $('#product22')
      .attr('src', 'Arc Fault Circuit Interrupter (AFCI) Breaker/22.jpg')
      .attr('data-name', '3/4-Inch Type-Qo 15/15-Amp Miniature Tandem Circuit Breaker')
      .attr('data-price', '91.82')
      .attr('data-sku', '30575934')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para22').text('3/4-Inch Type-Qo 15/15-Amp Miniature Tandem Circuit Breaker');
      // Update the text content of the <h3> element that displays the price
      $('#price22').text('$91.82');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate22').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate22, #rate22 span').css('width', '15px');

      // product23
      $('#product23')
      .attr('src', 'Arc Fault Circuit Interrupter (AFCI) Breaker/23.jpg')
      .attr('data-name', '20-Amp QO™ Miniature Circuit Breaker  Industrial type Arc Fault Circuit Interrupter')
      .attr('data-price', '77.82')
      .attr('data-sku', '729345135')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para23').text('20-Amp QO™ Miniature Circuit Breaker  Industrial type Arc Fault Circuit Interrupter');
      // Update the text content of the <h3> element that displays the price
      $('#price23').text('$77.82');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate23').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate_half</span>
      `);
      $('#rate23, #rate23 span').css('width', '15px');

      // product24
      $('#product24')
      .attr('src', 'Arc Fault Circuit Interrupter (AFCI) Breaker/24.jpg')
      .attr('data-name', 'Homeline 120/240V Industrial type Arc Fault Circuit Interrupter Circuit Breaker')
      .attr('data-price', '111.82')
      .attr('data-sku', '9472057345')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para24').text('Homeline 120/240V Industrial type Arc Fault Circuit Interrupter Circuit Breaker');
      // Update the text content of the <h3> element that displays the price
      $('#price24').text('$111.82');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate24').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate_half</span>
      `);
      $('#rate24, #rate24 span').css('width', '15px');

      // product25
      $('#product25')
      .attr('src', 'Arc Fault Circuit Interrupter (AFCI) Breaker/25.jpg')
      .attr('data-name', 'Homeline HOM3060M150PRB Load Center, 150 A, 30 -Space, 60 -Circuit, Interrupter')
      .attr('data-price', '151.82')
      .attr('data-sku', '408923410')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para25').text('Homeline HOM3060M150PRB Load Center, 150 A, 30 -Space, 60 -Circuit, Interrupter');
      // Update the text content of the <h3> element that displays the price
      $('#price25').text('$151.82');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate25').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate25, #rate25 span').css('width', '15px');

      // product26
      $('#product26')
      .attr('src', 'Arc Fault Circuit Interrupter (AFCI) Breaker/26.jpg')
      .attr('data-name', '20-Amp Type BR  Industrial Arc Fault Circuit Interrupter Circuit Breaker')
      .attr('data-price', '89.12')
      .attr('data-sku', '826394751')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para26').text('20-Amp Type BR  Industrial Arc Fault Circuit Interrupter Circuit Breaker');
      // Update the text content of the <h3> element that displays the price
      $('#price26').text('$89.12');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate26').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate_half</span>
      `);
      $('#rate26, #rate26 span').css('width', '15px');

      // product27
      $('#product27')
      .attr('src', 'Arc Fault Circuit Interrupter (AFCI) Breaker/27.jpg')
      .attr('data-name', '30-Amp Type BR  Industrial Arc Fault Circuit Interrupter Circuit Breaker')
      .attr('data-price', '98.82')
      .attr('data-sku', '495835613')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para27').text('30-Amp Type BR  Industrial Arc Fault Circuit Interrupter Circuit Breaker');
      // Update the text content of the <h3> element that displays the price
      $('#price27').text('$98.82');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate27').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate_half</span>
      `);
      $('#rate27, #rate27 span').css('width', '15px');

      // product28
      $('#product28')
      .attr('src', 'Arc Fault Circuit Interrupter (AFCI) Breaker/28.jpg')
      .attr('data-name', '20-Amp Type Cl Replacement Arc Fault Circuit Interrupter Circuit Breaker')
      .attr('data-price', '70.82')
      .attr('data-sku', '240938451')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para28').text('20-Amp Type Cl Replacement Arc Fault Circuit Interrupter Circuit Breaker');
      // Update the text content of the <h3> element that displays the price
      $('#price28').text('$70.82');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate28').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate28, #rate28 span').css('width', '15px');

      // product29
      $('#product29')
      .attr('src', 'Arc Fault Circuit Interrupter (AFCI) Breaker/29.jpg')
      .attr('data-name', '30-Amp Type CH Standard Arc Fault Circuit Interrupter Circuit Breaker')
      .attr('data-price', '91.99')
      .attr('data-sku', '303841024')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para29').text('30-Amp Type CH Standard Arc Fault Circuit Interrupter Circuit Breaker');
      // Update the text content of the <h3> element that displays the price
      $('#price29').text('$91.99');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate29').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate29, #rate29 span').css('width', '15px');

      // product30
      $('#product30')
      .attr('src', 'Arc Fault Circuit Interrupter (AFCI) Breaker/30.jpg')
      .attr('data-name', 'Type Cl Circuit Breaker, 120/240 V, Plug-In Mounting Interrupter')
      .attr('data-price', '124.82')
      .attr('data-sku', '693495123')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para30').text('Type Cl Circuit Breaker, 120/240 V, Plug-In Mounting Interrupter');
      // Update the text content of the <h3> element that displays the price
      $('#price30').text('$124.82');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate30').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate_half</span>
      `);
      $('#rate30, #rate30 span').css('width', '15px');
      
      // User Deciding which product and save to local storage
          //for product1
        $('#product1').click(function() {
          var imageSrc = $("#product1").attr("src");
          var name = $(this).data('name');
          var price = parseFloat($(this).data('price'));
          var sku = parseFloat($(this).data('sku'));
        
          var cartItem = {
            name: name,
            price: price,
            src: imageSrc,
            sku: sku
          };
          // Set cartItem in local storage
          localStorage.setItem('cartItem', JSON.stringify
          (cartItem));
          window.location.href = "Purchase.html";
        });

          //for product2
        $('#product2').click(function() {
          var imageSrc = $("#product2").attr("src");
          var name = $(this).data('name');
          var price = parseFloat($(this).data('price'));
          var sku = parseFloat($(this).data('sku'));
        
          var cartItem = {
            name: name,
            price: price,
            src: imageSrc,
            sku: sku
          };
          // Set cartItem in local storage
          localStorage.setItem('cartItem', JSON.stringify
          (cartItem));
          window.location.href = "Purchase.html";
        });

        //for product3
        $('#product3').click(function() {
          var imageSrc = $("#product3").attr("src");
          var name = $(this).data('name');
          var price = parseFloat($(this).data('price'));
          var sku = parseFloat($(this).data('sku'));
        
          var cartItem = {
            name: name,
            price: price,
            src: imageSrc,
            sku: sku
          };
          // Set cartItem in local storage
          localStorage.setItem('cartItem', JSON.stringify
          (cartItem));
          window.location.href = "Purchase.html";
        });

        //for product4
        $('#product4').click(function() {
          var imageSrc = $("#product4").attr("src");
          var name = $(this).data('name');
          var price = parseFloat($(this).data('price'));
          var sku = parseFloat($(this).data('sku'));
        
          var cartItem = {
            name: name,
            price: price,
            src: imageSrc,
            sku: sku
          };
          // Set cartItem in local storage
          localStorage.setItem('cartItem', JSON.stringify
          (cartItem));
          window.location.href = "Purchase.html";
        });


        //for product5
        $('#product5').click(function() {
          var imageSrc = $("#product5").attr("src");
          var name = $(this).data('name');
          var price = parseFloat($(this).data('price'));
          var sku = parseFloat($(this).data('sku'));
        
          var cartItem = {
            name: name,
            price: price,
            src: imageSrc,
            sku: sku
          };
          // Set cartItem in local storage
          localStorage.setItem('cartItem', JSON.stringify
          (cartItem));
          window.location.href = "Purchase.html";
        });


        //for product6
        $('#product6').click(function() {
          var imageSrc = $("#product6").attr("src");
          var name = $(this).data('name');
          var price = parseFloat($(this).data('price'));
          var sku = parseFloat($(this).data('sku'));
        
          var cartItem = {
            name: name,
            price: price,
            src: imageSrc,
            sku: sku
          };
          // Set cartItem in local storage
          localStorage.setItem('cartItem', JSON.stringify
          (cartItem));
          window.location.href = "Purchase.html";
        });


        //for product7
        $('#product7').click(function() {
          var imageSrc = $("#product7").attr("src");
          var name = $(this).data('name');
          var price = parseFloat($(this).data('price'));
          var sku = parseFloat($(this).data('sku'));
        
          var cartItem = {
            name: name,
            price: price,
            src: imageSrc,
            sku: sku
          };
          // Set cartItem in local storage
          localStorage.setItem('cartItem', JSON.stringify
          (cartItem));
          window.location.href = "Purchase.html";
        });


        //for product8
        $('#product8').click(function() {
          var imageSrc = $("#product8").attr("src");
          var name = $(this).data('name');
          var price = parseFloat($(this).data('price'));
          var sku = parseFloat($(this).data('sku'));
        
          var cartItem = {
            name: name,
            price: price,
            src: imageSrc,
            sku: sku
          };
          // Set cartItem in local storage
          localStorage.setItem('cartItem', JSON.stringify
          (cartItem));
          window.location.href = "Purchase.html";
        });


        //for product9
        $('#product9').click(function() {
          var imageSrc = $("#product9").attr("src");
          var name = $(this).data('name');
          var price = parseFloat($(this).data('price'));
          var sku = parseFloat($(this).data('sku'));
        
          var cartItem = {
            name: name,
            price: price,
            src: imageSrc,
            sku: sku
          };
          // Set cartItem in local storage
          localStorage.setItem('cartItem', JSON.stringify
          (cartItem));
          window.location.href = "Purchase.html";
        });


        //for product10
        $('#product10').click(function() {
          var imageSrc = $("#product10").attr("src");
          var name = $(this).data('name');
          var price = parseFloat($(this).data('price'));
          var sku = parseFloat($(this).data('sku'));
        
          var cartItem = {
            name: name,
            price: price,
            src: imageSrc,
            sku: sku
          };
          // Set cartItem in local storage
          localStorage.setItem('cartItem', JSON.stringify
          (cartItem));
          window.location.href = "Purchase.html";
        });


        //for product11
        $('#product11').click(function() {
          var imageSrc = $("#product11").attr("src");
          var name = $(this).data('name');
          var price = parseFloat($(this).data('price'));
          var sku = parseFloat($(this).data('sku'));
        
          var cartItem = {
            name: name,
            price: price,
            src: imageSrc,
            sku: sku
          };
          // Set cartItem in local storage
          localStorage.setItem('cartItem', JSON.stringify
          (cartItem));
          window.location.href = "Purchase.html";
        });


        //for product12
        $('#product12').click(function() {
          var imageSrc = $("#product12").attr("src");
          var name = $(this).data('name');
          var price = parseFloat($(this).data('price'));
          var sku = parseFloat($(this).data('sku'));
        
          var cartItem = {
            name: name,
            price: price,
            src: imageSrc,
            sku: sku
          };
          // Set cartItem in local storage
          localStorage.setItem('cartItem', JSON.stringify
          (cartItem));
          window.location.href = "Purchase.html";
        });


        //for product13
        $('#product13').click(function() {
          var imageSrc = $("#product13").attr("src");
          var name = $(this).data('name');
          var price = parseFloat($(this).data('price'));
          var sku = parseFloat($(this).data('sku'));
        
          var cartItem = {
            name: name,
            price: price,
            src: imageSrc,
            sku: sku
          };
          // Set cartItem in local storage
          localStorage.setItem('cartItem', JSON.stringify
          (cartItem));
          window.location.href = "Purchase.html";
        });


        //for product14
        $('#product14').click(function() {
          var imageSrc = $("#product14").attr("src");
          var name = $(this).data('name');
          var price = parseFloat($(this).data('price'));
          var sku = parseFloat($(this).data('sku'));
        
          var cartItem = {
            name: name,
            price: price,
            src: imageSrc,
            sku: sku
          };
          // Set cartItem in local storage
          localStorage.setItem('cartItem', JSON.stringify
          (cartItem));
          window.location.href = "Purchase.html";
        });


        //for product15
        $('#product15').click(function() {
          var imageSrc = $("#product15").attr("src");
          var name = $(this).data('name');
          var price = parseFloat($(this).data('price'));
          var sku = parseFloat($(this).data('sku'));
        
          var cartItem = {
            name: name,
            price: price,
            src: imageSrc,
            sku: sku
          };
          // Set cartItem in local storage
          localStorage.setItem('cartItem', JSON.stringify
          (cartItem));
          window.location.href = "Purchase.html";
        });


        //for product16
        $('#product16').click(function() {
          var imageSrc = $("#product16").attr("src");
          var name = $(this).data('name');
          var price = parseFloat($(this).data('price'));
          var sku = parseFloat($(this).data('sku'));
        
          var cartItem = {
            name: name,
            price: price,
            src: imageSrc,
            sku: sku
          };
          // Set cartItem in local storage
          localStorage.setItem('cartItem', JSON.stringify
          (cartItem));
          window.location.href = "Purchase.html";
        });


        //for product17
        $('#product17').click(function() {
          var imageSrc = $("#product17").attr("src");
          var name = $(this).data('name');
          var price = parseFloat($(this).data('price'));
          var sku = parseFloat($(this).data('sku'));
        
          var cartItem = {
            name: name,
            price: price,
            src: imageSrc,
            sku: sku
          };
          // Set cartItem in local storage
          localStorage.setItem('cartItem', JSON.stringify
          (cartItem));
          window.location.href = "Purchase.html";
        });


        //for product18
        $('#product18').click(function() {
          var imageSrc = $("#product18").attr("src");
          var name = $(this).data('name');
          var price = parseFloat($(this).data('price'));
          var sku = parseFloat($(this).data('sku'));
        
          var cartItem = {
            name: name,
            price: price,
            src: imageSrc,
            sku: sku
          };
          // Set cartItem in local storage
          localStorage.setItem('cartItem', JSON.stringify
          (cartItem));
          window.location.href = "Purchase.html";
        });


        //for product19
        $('#product19').click(function() {
          var imageSrc = $("#product19").attr("src");
          var name = $(this).data('name');
          var price = parseFloat($(this).data('price'));
          var sku = parseFloat($(this).data('sku'));
        
          var cartItem = {
            name: name,
            price: price,
            src: imageSrc,
            sku: sku
          };
          // Set cartItem in local storage
          localStorage.setItem('cartItem', JSON.stringify
          (cartItem));
          window.location.href = "Purchase.html";
        });


        //for product20
        $('#product20').click(function() {
          var imageSrc = $("#product20").attr("src");
          var name = $(this).data('name');
          var price = parseFloat($(this).data('price'));
          var sku = parseFloat($(this).data('sku'));
        
          var cartItem = {
            name: name,
            price: price,
            src: imageSrc,
            sku: sku
          };
          // Set cartItem in local storage
          localStorage.setItem('cartItem', JSON.stringify
          (cartItem));
          window.location.href = "Purchase.html";
        });


        //for product21
        $('#product21').click(function() {
          var imageSrc = $("#product21").attr("src");
          var name = $(this).data('name');
          var price = parseFloat($(this).data('price'));
          var sku = parseFloat($(this).data('sku'));
        
          var cartItem = {
            name: name,
            price: price,
            src: imageSrc,
            sku: sku
          };
          // Set cartItem in local storage
          localStorage.setItem('cartItem', JSON.stringify
          (cartItem));
          window.location.href = "Purchase.html";
        });


        //for product22
        $('#product22').click(function() {
          var imageSrc = $("#product22").attr("src");
          var name = $(this).data('name');
          var price = parseFloat($(this).data('price'));
          var sku = parseFloat($(this).data('sku'));
        
          var cartItem = {
            name: name,
            price: price,
            src: imageSrc,
            sku: sku
          };
          // Set cartItem in local storage
          localStorage.setItem('cartItem', JSON.stringify
          (cartItem));
          window.location.href = "Purchase.html";
        });


        //for product23
        $('#product23').click(function() {
          var imageSrc = $("#product23").attr("src");
          var name = $(this).data('name');
          var price = parseFloat($(this).data('price'));
          var sku = parseFloat($(this).data('sku'));
        
          var cartItem = {
            name: name,
            price: price,
            src: imageSrc,
            sku: sku
          };
          // Set cartItem in local storage
          localStorage.setItem('cartItem', JSON.stringify
          (cartItem));
          window.location.href = "Purchase.html";
        });


        //for product24
        $('#product24').click(function() {
          var imageSrc = $("#product24").attr("src");
          var name = $(this).data('name');
          var price = parseFloat($(this).data('price'));
          var sku = parseFloat($(this).data('sku'));
        
          var cartItem = {
            name: name,
            price: price,
            src: imageSrc,
            sku: sku
          };
          // Set cartItem in local storage
          localStorage.setItem('cartItem', JSON.stringify
          (cartItem));
          window.location.href = "Purchase.html";
        });


        //for product25
        $('#product25').click(function() {
          var imageSrc = $("#product25").attr("src");
          var name = $(this).data('name');
          var price = parseFloat($(this).data('price'));
          var sku = parseFloat($(this).data('sku'));
        
          var cartItem = {
            name: name,
            price: price,
            src: imageSrc,
            sku: sku
          };
          // Set cartItem in local storage
          localStorage.setItem('cartItem', JSON.stringify
          (cartItem));
          window.location.href = "Purchase.html";
        });


        //for product26
        $('#product26').click(function() {
          var imageSrc = $("#product26").attr("src");
          var name = $(this).data('name');
          var price = parseFloat($(this).data('price'));
          var sku = parseFloat($(this).data('sku'));
        
          var cartItem = {
            name: name,
            price: price,
            src: imageSrc,
            sku: sku
          };
          // Set cartItem in local storage
          localStorage.setItem('cartItem', JSON.stringify
          (cartItem));
          window.location.href = "Purchase.html";
        });


        //for product27
        $('#product27').click(function() {
          var imageSrc = $("#product27").attr("src");
          var name = $(this).data('name');
          var price = parseFloat($(this).data('price'));
          var sku = parseFloat($(this).data('sku'));
        
          var cartItem = {
            name: name,
            price: price,
            src: imageSrc,
            sku: sku
          };
          // Set cartItem in local storage
          localStorage.setItem('cartItem', JSON.stringify
          (cartItem));
          window.location.href = "Purchase.html";
        });


        //for product28
        $('#product28').click(function() {
          var imageSrc = $("#product28").attr("src");
          var name = $(this).data('name');
          var price = parseFloat($(this).data('price'));
          var sku = parseFloat($(this).data('sku'));
        
          var cartItem = {
            name: name,
            price: price,
            src: imageSrc,
            sku: sku
          };
          // Set cartItem in local storage
          localStorage.setItem('cartItem', JSON.stringify
          (cartItem));
          window.location.href = "Purchase.html";
        });


        //for product29
        $('#product29').click(function() {
          var imageSrc = $("#product29").attr("src");
          var name = $(this).data('name');
          var price = parseFloat($(this).data('price'));
          var sku = parseFloat($(this).data('sku'));
        
          var cartItem = {
            name: name,
            price: price,
            src: imageSrc,
            sku: sku
          };
          // Set cartItem in local storage
          localStorage.setItem('cartItem', JSON.stringify
          (cartItem));
          window.location.href = "Purchase.html";
        });

        //for product30
        $('#product30').click(function() {
          var imageSrc = $("#product30").attr("src");
          var name = $(this).data('name');
          var price = parseFloat($(this).data('price'));
          var sku = parseFloat($(this).data('sku'));
        
          var cartItem = {
            name: name,
            price: price,
            src: imageSrc,
            sku: sku
          };
          // Set cartItem in local storage
          localStorage.setItem('cartItem', JSON.stringify
          (cartItem));
          window.location.href = "Purchase.html";
        });
    });
      
        
    $("#3").click(function(){
        // Changing Heading
        $(".categories").text("Ground Fault Circuit Interrupter (GFCI) Breaker");

        // product1
        $('#product1')
        .attr('src', 'Ground Fault Circuit Interrupter (GFCI) Breaker/1.jpg')
        .attr('data-name', 'Siemens QF250A Breaker Ground Fault Circuit Interrupter, 50 Amp, 2 Pole, 240 Volt, 10,000 AIC')
        .attr('data-price', '89.89')
        .attr('data-sku', '238450106')
        .removeAttr('data-src');
        // Update the text content of the <p> element
        $('#para1').text('Siemens QF250A Breaker Ground Fault Circuit Interrupter, 50 Amp, 2 Pole, 240 Volt, 10,000 AIC');
        // Update the text content of the <h3> element that displays the price
        $('#price1').text('$89.89');
        // Update the number of stars in the <h3> element that displays the rating
        $('#rate1').html(`
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
        `);
        $('#rate1, #rate1 span').css('width', '15px');

        // product2
        $('#product2')
        .attr('src', 'Ground Fault Circuit Interrupter (GFCI) Breaker/2.jpg')
        .attr('data-name', 'Siemens QF260A 60 Amp, 2 Pole, 120/240V Ground Fault Circuit Interrupter with Self Test feature')
        .attr('data-price', '129.00')
        .attr('data-sku', '212394103')
        .removeAttr('data-src');
        // Update the text content of the <p> element
        $('#para2').text('Siemens QF260A 60 Amp, 2 Pole, 120/240V Ground Fault Circuit Interrupter with Self Test feature');
        // Update the text content of the <h3> element that displays the price
        $('#price2').text('$129.00');
        // Update the number of stars in the <h3> element that displays the rating
        $('#rate2').html(`
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate_half</span>
        `);
        $('#rate2, #rate2 span').css('width', '15px');

        // product3
        $('#product3')
        .attr('src', 'Ground Fault Circuit Interrupter (GFCI) Breaker/3.jpg')
        .attr('data-name', 'Siemens QF230A 30 Amp, 2 Pole, 120/240V Ground Fault Circuit Interrupter with Self Test and Lockout Feature')
        .attr('data-price', '91.00')
        .attr('data-sku', '138490284')
        .removeAttr('data-src');
        // Update the text content of the <p> element
        $('#para3').text('Siemens QF230A 30 Amp, 2 Pole, 120/240V Ground Fault Circuit Interrupter with Self Test and Lockout Feature');
        // Update the text content of the <h3> element that displays the price
        $('#price3').text('$91.00');
        // Update the number of stars in the <h3> element that displays the rating
        $('#rate3').html(`
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
        `);
        $('#rate3, #rate3 span').css('width', '15px');

        // product4
        $('#product4')
        .attr('src', 'Ground Fault Circuit Interrupter (GFCI) Breaker/4.jpg')
        .attr('data-name', 'Siemens QF220A QF220 Ground Fault Circuit Interrupter, 20 Amp, 2 Pole, 120 Volt, 10,000 AIC')
        .attr('data-price', '87.48')
        .attr('data-sku', '8364038451')
        .removeAttr('data-src');
        // Update the text content of the <p> element
        $('#para4').text('Siemens QF220A QF220 Ground Fault Circuit Interrupter, 20 Amp, 2 Pole, 120 Volt, 10,000 AIC');
        // Update the text content of the <h3> element that displays the price
        $('#price4').text('$87.48');
        // Update the number of stars in the <h3> element that displays the rating
        $('#rate4').html(`
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
        `);
        $('#rate4, #rate4 span').css('width', '15px');

        // product5
        $('#product5')
        .attr('src', 'Ground Fault Circuit Interrupter (GFCI) Breaker/5.png')
        .attr('data-name', 'THQL2120GFT Plug-in Mount Type THQL Feeder Self-Test Ground Fault Circuit Interrupter 2-Pole 20 Amp')
        .attr('data-price', '113.98')
        .attr('data-sku', '734518345')
        .removeAttr('data-src');
        // Update the text content of the <p> element
        $('#para5').text('THQL2120GFT Plug-in Mount Type THQL Feeder Self-Test Ground Fault Circuit Interrupter 2-Pole 20 Amp');
        // Update the text content of the <h3> element that displays the price
        $('#price5').text('$113.98');
        // Update the number of stars in the <h3> element that displays the rating
        $('#rate5').html(`
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate_half</span>
        `);
        $('#rate5, #rate5 span').css('width', '15px');

        // product6
        $('#product6')
        .attr('src', 'Ground Fault Circuit Interrupter (GFCI) Breaker/6.jpg')
        .attr('data-name', 'Siemens QF240A Ground Fault Circuit Interrupter, 40 Amp, 2 Pole, 120/240 Volt, 10,000 AIC')
        .attr('data-price', '100.27')
        .attr('data-sku', '409583741')
        .removeAttr('data-src');
        // Update the text content of the <p> element
        $('#para6').text('Siemens QF240A Ground Fault Circuit Interrupter, 40 Amp, 2 Pole, 120/240 Volt, 10,000 AIC');
        // Update the text content of the <h3> element that displays the price
        $('#price6').text('$100.27');
        // Update the number of stars in the <h3> element that displays the rating
        $('#rate6').html(`
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
        `);
        $('#rate6, #rate6 span').css('width', '15px');

        // product7
        $('#product7')
        .attr('src', 'Ground Fault Circuit Interrupter (GFCI) Breaker/7.jpg')
        .attr('data-name', 'Circuit Breaker & Ground Fault Interrupter, Plug In, HOM250GFI')
        .attr('data-price', '109.98')
        .attr('data-sku', '2409472045')
        .removeAttr('data-src');
        // Update the text content of the <p> element
        $('#para7').text('Circuit Breaker & Ground Fault Interrupter, Plug In, HOM250GFI');
        // Update the text content of the <h3> element that displays the price
        $('#price7').text('$109.98');
        // Update the number of stars in the <h3> element that displays the rating
        $('#rate7').html(`
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
        `);
        $('#rate7, #rate7 span').css('width', '15px');
        
        // product8
        $('#product8')
        .attr('src', 'Ground Fault Circuit Interrupter (GFCI) Breaker/8.jpg')
        .attr('data-name', 'Siemens QF120A Ground Fault Circuit Interrupter, 20 Amp, 1 Pole, 120 Volt')
        .attr('data-price', '69.66')
        .attr('data-sku', '560350312')
        .removeAttr('data-src');
        // Update the text content of the <p> element
        $('#para8').text('Siemens QF120A Ground Fault Circuit Interrupter, 20 Amp, 1 Pole, 120 Volt');
        // Update the text content of the <h3> element that displays the price
        $('#price8').text('$69.66');
        // Update the number of stars in the <h3> element that displays the rating
        $('#rate8').html(`
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
        `);
        $('#rate8, #rate8 span').css('width', '15px');

        // product9
        $('#product9')
        .attr('src', 'Ground Fault Circuit Interrupter (GFCI) Breaker/9.png')
        .attr('data-name', 'HQL2130GFT Plug-In Mount Type Self-Test Ground Fault Circuit Interrupter')
        .attr('data-price', '149.81')
        .attr('data-sku', '496494023')
        .removeAttr('data-src');
        // Update the text content of the <p> element
        $('#para9').text('HQL2130GFT Plug-In Mount Type Self-Test Ground Fault Circuit Interrupter');
        // Update the text content of the <h3> element that displays the price
        $('#price9').text('$149.81');
        // Update the number of stars in the <h3> element that displays the rating
        $('#rate9').html(`
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
        `);
        $('#rate9, #rate9 span').css('width', '15px');

        // product10
        $('#product10')
        .attr('src', 'Ground Fault Circuit Interrupter (GFCI) Breaker/10.jpg')
        .attr('data-name', 'Siemens QF215A Ground Fault Circuit Interrupter, 15 Amp, 2 Pole, 120V')
        .attr('data-price', '96.97')
        .attr('data-sku', '496549345')
        .removeAttr('data-src');
        // Update the text content of the <p> element
        $('#para10').text('Siemens QF215A Ground Fault Circuit Interrupter, 15 Amp, 2 Pole, 120V');
        // Update the text content of the <h3> element that displays the price
        $('#price10').text('$96.97');
        // Update the number of stars in the <h3> element that displays the rating
        $('#rate10').html(`
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
        `);
        $('#rate10, #rate10 span').css('width', '15px');

        // product11
        $('#product11')
        .attr('src', 'Ground Fault Circuit Interrupter (GFCI) Breaker/11.jpg')
        .attr('data-name', 'Automation Systems Interconnect 32C-16-120V DIN Rail Mount Ground Fault Circuit Breaker')
        .attr('data-price', '82.12')
        .attr('data-sku', '389562394')
        .removeAttr('data-src');
        // Update the text content of the <p> element
        $('#para11').text('Automation Systems 32C-16-120V Ground Fault Circuit Breaker');
        // Update the text content of the <h3> element that displays the price
        $('#price11').text('$82.12');
        // Update the number of stars in the <h3> element that displays the rating
        $('#rate11').html(`
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
        `);
        $('#rate11, #rate11 span').css('width', '15px');

        // product12
        $('#product12')
        .attr('src', 'Ground Fault Circuit Interrupter (GFCI) Breaker/12.png')
        .attr('data-name', 'GE Industrial THQL2140GFT THQL Feeder Self-Test Ground Fault Circuit Interrupter')
        .attr('data-price', '349.99')
        .attr('data-sku', '456218957')
        .removeAttr('data-src');
        // Update the text content of the <p> element
        $('#para12').text('GE Industrial THQL2140GFT THQL Feeder Self-Test Ground Fault Circuit Interrupter');
        // Update the text content of the <h3> element that displays the price
        $('#price12').text('$349.99');
        // Update the number of stars in the <h3> element that displays the rating
        $('#rate12').html(`
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
        `);
        $('#rate12, #rate12 span').css('width', '15px');


        // product13
        $('#product13')
        .attr('src', 'Ground Fault Circuit Interrupter (GFCI) Breaker/13.jpg')
        .attr('data-name', 'Siemens QF220 20-Amp 2 Pole 240-Volt Ground Fault Circuit Interrupter')
        .attr('data-price', '87.48')
        .attr('data-sku', '154689025')
        .removeAttr('data-src');
        // Update the text content of the <p> element
        $('#para13').text('Siemens QF220 20-Amp 2 Pole 240-Volt Ground Fault Circuit Interrupter');
        // Update the text content of the <h3> element that displays the price
        $('#price13').text('$87.48');
        // Update the number of stars in the <h3> element that displays the rating
        $('#rate13').html(`
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate_half</span>
        `);
        $('#rate13, #rate13 span').css('width', '15px');


        // product14
        $('#product14')
        .attr('src', 'Ground Fault Circuit Interrupter (GFCI) Breaker/14.jpg')
        .attr('data-name', 'EATON CORPORATION GFTCB230 Cutler Hammer Ground Fault Circuit Breaker')
        .attr('data-price', '113.99')
        .attr('data-sku', '132458167')
        .removeAttr('data-src');
        // Update the text content of the <p> element
        $('#para14').text('EATON CORPORATION GFTCB230 Cutler Hammer Ground Fault Circuit Breaker');
        // Update the text content of the <h3> element that displays the price
        $('#price14').text('$113.99');
        // Update the number of stars in the <h3> element that displays the rating
        $('#rate14').html(`
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate_half</span>
        `);
        $('#rate14, #rate14 span').css('width', '15px');

        // product15
        $('#product15')
        .attr('src', 'Ground Fault Circuit Interrupter (GFCI) Breaker/15.jpg')
        .attr('data-name', 'Eaton GFTCB260 Breaker, 60A, 2P, 120/240V, Type BR Ground Fault Breaker')
        .attr('data-price', '176.99')
        .attr('data-sku', '157954235')
        .removeAttr('data-src');
        // Update the text content of the <p> element
        $('#para15').text('Eaton GFTCB260 Breaker, 60A, 2P, 120/240V, Type BR Ground Fault Breaker');
        // Update the text content of the <h3> element that displays the price
        $('#price15').text('$176.99');
        // Update the number of stars in the <h3> element that displays the rating
        $('#rate15').html(`
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
        `);
        $('#rate15, #rate15 span').css('width', '15px');

        // product16
        $('#product16')
        .attr('src', 'Ground Fault Circuit Interrupter (GFCI) Breaker/16.jpg')
        .attr('data-name', 'NDB1L-32C-20-120V DIN Rail Mount Ground Fault Circuit Breaker, Ground Fault Sensing')
        .attr('data-price', '24.97')
        .attr('data-sku', '136540583')
        .removeAttr('data-src');
        // Update the text content of the <p> element
        $('#para16').text('NDB1L-32C-20-120V DIN Rail Mount Ground Fault Circuit Breaker, Ground Fault Sensing');
        // Update the text content of the <h3> element that displays the price
        $('#price16').text('$24.97');
        // Update the number of stars in the <h3> element that displays the rating
        $('#rate16').html(`
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
        `);
        $('#rate16, #rate16 span').css('width', '15px');

        // product17
        $('#product17')
        .attr('src', 'Ground Fault Circuit Interrupter (GFCI) Breaker/17.png')
        .attr('data-name', 'GE THQL2150GFT Mount Type THQL Feeder Self-Test Ground Fault Circuit Interrupter')
        .attr('data-price', '474.99')
        .attr('data-sku', '215630485')
        .removeAttr('data-src');
        // Update the text content of the <p> element
        $('#para17').text('GE THQL2150GFT Mount Type THQL Feeder Self-Test Ground Fault Circuit Interrupter');
        // Update the text content of the <h3> element that displays the price
        $('#price17').text('$474.99');
        // Update the number of stars in the <h3> element that displays the rating
        $('#rate17').html(`
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
        `);
        $('#rate17, #rate17 span').css('width', '15px');

        // product18
        $('#product18')
        .attr('src', 'Ground Fault Circuit Interrupter (GFCI) Breaker/18.jpg')
        .attr('data-name', '60-Amp Double Pole 240-Volt Ground Fault Equipment Protection Circuit Breaker')
        .attr('data-price', '229.87')
        .attr('data-sku', '301524895')
        .removeAttr('data-src');
        // Update the text content of the <p> element
        $('#para18').text('60-Amp Double Pole 240-Volt Ground Fault Equipment Protection Circuit Breaker');
        // Update the text content of the <h3> element that displays the price
        $('#price18').text('$229.87');
        // Update the number of stars in the <h3> element that displays the rating
        $('#rate18').html(`
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
        `);
        $('#rate18, #rate18 span').css('width', '15px');


        // product19
        $('#product19')
        .attr('src', 'Ground Fault Circuit Interrupter (GFCI) Breaker/19.jpg')
        .attr('data-name', 'NDB1L-32C-25-120V Ground Fault Circuit Breaker, UL 1053 Ground Fault Sensing')
        .attr('data-price', '98.94')
        .attr('data-sku', '265489248')
        .removeAttr('data-src');
        // Update the text content of the <p> element
        $('#para19').text('NDB1L-32C-25-120V Ground Fault Circuit Breaker, UL 1053 Ground Fault Sensing');
        // Update the text content of the <h3> element that displays the price
        $('#price19').text('$98.94');
        // Update the number of stars in the <h3> element that displays the rating
        $('#rate19').html(`
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate_half</span>
        `);
        $('#rate19, #rate19 span').css('width', '15px');

        // product20
        $('#product20')
        .attr('src', 'Ground Fault Circuit Interrupter (GFCI) Breaker/20.jpg')
        .attr('data-name', 'NDB1L-32C-32-24V Ground Fault Circuit Breaker, UL 1053 Ground Fault Sensing')
        .attr('data-price', '49.91')
        .attr('data-sku', '125489562')
        .removeAttr('data-src');
        // Update the text content of the <p> element
        $('#para20').text('NDB1L-32C-32-24V Ground Fault Circuit Breaker, UL 1053 Ground Fault Sensing');
        // Update the text content of the <h3> element that displays the price
        $('#price20').text('$49.91');
        // Update the number of stars in the <h3> element that displays the rating
        $('#rate20').html(`
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
        `);
        $('#rate20, #rate20 span').css('width', '15px');

        // product21
        $('#product21')
        .attr('src', 'Ground Fault Circuit Interrupter (GFCI) Breaker/21.png')
        .attr('data-name', 'GE THQL2120GFT Plug-in Mount Type THQL Feeder Self-Test Ground Fault Circuit Interrupter')
        .attr('data-price', '113.98')
        .attr('data-sku', '213548624')
        .removeAttr('data-src');
        // Update the text content of the <p> element
        $('#para21').text('GE THQL2120GFT Plug-in Mount Type THQL Feeder Self-Test Ground Fault Circuit Interrupter');
        // Update the text content of the <h3> element that displays the price
        $('#price21').text('$113.98');
        // Update the number of stars in the <h3> element that displays the rating
        $('#rate21').html(`
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate_half</span>
        `);
        $('#rate21, #rate21 span').css('width', '15px');

        // product22
        $('#product22')
        .attr('src', 'Ground Fault Circuit Interrupter (GFCI) Breaker/22.jpg')
        .attr('data-name', 'QF17A60 Ground Fault Circuit Breaker, Series Trip with Neutral Switch (1P + N), 60 amp')
        .attr('data-price', '70.34')
        .attr('data-sku', '321864165')
        .removeAttr('data-src');
        // Update the text content of the <p> element
        $('#para22').text('QF17A60 Ground Fault Circuit Breaker, Series Trip with Neutral Switch (1P + N), 60 amp');
        // Update the text content of the <h3> element that displays the price
        $('#price22').text('$70.34');
        // Update the number of stars in the <h3> element that displays the rating
        $('#rate22').html(`
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
        `);
        $('#rate22, #rate22 span').css('width', '15px');

        // product23
        $('#product23')
        .attr('src', 'Ground Fault Circuit Interrupter (GFCI) Breaker/23.jpg')
        .attr('data-name', 'Siemens QE220H 20-Amp Double Pole 120/240-Volt Group Fault Equipment Protection Circuit Breaker')
        .attr('data-price', '730.33')
        .attr('data-sku', '256015249')
        .removeAttr('data-src');
        // Update the text content of the <p> element
        $('#para23').text('Siemens QE220H 20-Amp Double Pole 120/240-Volt Group Fault Equipment Protection Circuit Breaker');
        // Update the text content of the <h3> element that displays the price
        $('#price23').text('$730.33');
        // Update the number of stars in the <h3> element that displays the rating
        $('#rate23').html(`
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
        `);
        $('#rate23, #rate23 span').css('width', '15px');


        // product24
        $('#product24')
        .attr('src', 'Ground Fault Circuit Interrupter (GFCI) Breaker/24.jpg')
        .attr('data-name', 'Siemens BE115H 15-Amp Single Pole 120-Volt22KAIC Ground Fault Circuit interrupter')
        .attr('data-price', '434.67')
        .attr('data-sku', '490538513')
        .removeAttr('data-src');
        // Update the text content of the <p> element
        $('#para24').text('Siemens BE115H 15-Amp Single Pole 120-Volt22KAIC Ground Fault Circuit interrupter');
        // Update the text content of the <h3> element that displays the price
        $('#price24').text('$434.67');
        // Update the number of stars in the <h3> element that displays the rating
        $('#rate24').html(`
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
        `);
        $('#rate24, #rate24 span').css('width', '15px');

        // product25
        $('#product25')
        .attr('src', 'Ground Fault Circuit Interrupter (GFCI) Breaker/25.jpg')
        .attr('data-name', 'Siemens BE215H 15-Amp Double Pole 120/240-Volt 22KAIC Ground Fault Circuit interrupter')
        .attr('data-price', '895.49')
        .attr('data-sku', '475987395')
        .removeAttr('data-src');
        // Update the text content of the <p> element
        $('#para25').text('Siemens BE215H 15-Amp Double Pole 120/240-Volt 22KAIC Ground Fault Circuit interrupter');
        // Update the text content of the <h3> element that displays the price
        $('#price25').text('$895.49');
        // Update the number of stars in the <h3> element that displays the rating
        $('#rate25').html(`
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
        `);
        $('#rate25, #rate25 span').css('width', '15px');

        // product26
        $('#product26')
        .attr('src', 'Ground Fault Circuit Interrupter (GFCI) Breaker/26.jpg')
        .attr('data-name', 'Siemens BE230H 30-Amp Double Pole 120/240-Volt 22KAIC Ground Fault Circuit interrupter')
        .attr('data-price', '1,353.36')
        .attr('data-sku', '927364821')
        .removeAttr('data-src');
        // Update the text content of the <p> element
        $('#para26').text('Siemens BE230H 30-Amp Double Pole 120/240-Volt 22KAIC Ground Fault Circuit interrupter');
        // Update the text content of the <h3> element that displays the price
        $('#price26').text('$1,353.36');
        // Update the number of stars in the <h3> element that displays the rating
        $('#rate26').html(`
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
        `);
        $('#rate26, #rate26 span').css('width', '15px');

        // product27
        $('#product27')
        .attr('src', 'Ground Fault Circuit Interrupter (GFCI) Breaker/27.jpg')
        .attr('data-name', 'Murray 30-Amp Double Pole 120/240-Volt Group Fault Equipment Protection Circuit Breaker')
        .attr('data-price', '210.08')
        .attr('data-sku', '174394567')
        .removeAttr('data-src');
        // Update the text content of the <p> element
        $('#para27').text('Murray 30-Amp Double Pole 120/240-Volt Group Fault Equipment Protection Circuit Breaker');
        // Update the text content of the <h3> element that displays the price
        $('#price27').text('$210.08');
        // Update the number of stars in the <h3> element that displays the rating
        $('#rate27').html(`
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate_half</span>
        `);
        $('#rate27, #rate27 span').css('width', '15px');

        // product28
        $('#product28')
        .attr('src', 'Ground Fault Circuit Interrupter (GFCI) Breaker/28.jpg')
        .attr('data-name', 'Murray MP120EG 20-Amp Single Pole 120-Volt Group Fault Equipment Protection Circuit Breaker')
        .attr('data-price', '210.08')
        .attr('data-sku', '947384731')
        .removeAttr('data-src');
        // Update the text content of the <p> element
        $('#para28').text('Murray MP120EG 20-Amp Single Pole 120-Volt Group Fault Equipment Protection Circuit Breaker');
        // Update the text content of the <h3> element that displays the price
        $('#price28').text('$210.08');
        // Update the number of stars in the <h3> element that displays the rating
        $('#rate28').html(`
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
        `);
        $('#rate28, #rate28 span').css('width', '15px');

        // product29
        $('#product29')
        .attr('src', 'Ground Fault Circuit Interrupter (GFCI) Breaker/29.jpg')
        .attr('data-name', 'Siemens B220R 20-Amp Double Pole  Ground Fault Circuit Breaker, 240-Volt 10KAIC Bolt in Breaker')
        .attr('data-price', '130.62')
        .attr('data-sku', '384502485')
        .removeAttr('data-src');
        // Update the text content of the <p> element
        $('#para29').text('Siemens B220R 20-Amp Double Pole  Ground Fault Circuit Breaker, 240-Volt 10KAIC Bolt in Breaker');
        // Update the text content of the <h3> element that displays the price
        $('#price29').text('$130.62');
        // Update the number of stars in the <h3> element that displays the rating
        $('#rate29').html(`
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
        `);
        $('#rate29, #rate29 span').css('width', '15px');

        // product30
        $('#product30')
        .attr('src', 'Ground Fault Circuit Interrupter (GFCI) Breaker/30.jpg')
        .attr('data-name', 'Siemens B215R 15-Amp Double Pole Ground Fault Circuit Breaker, 240-Volt 10KAIC Bolt in Breaker')
        .attr('data-price', '107.15')
        .attr('data-sku', '7938475924')
        .removeAttr('data-src');
        // Update the text content of the <p> element
        $('#para30').text('Siemens B215R 15-Amp Double Pole Ground Fault Circuit Breaker, 240-Volt 10KAIC Bolt in Breaker');
        // Update the text content of the <h3> element that displays the price
        $('#price30').text('$107.15');
        // Update the number of stars in the <h3> element that displays the rating
        $('#rate30').html(`
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate_half</span>
        `);
        $('#rate30, #rate30 span').css('width', '15px');

        // User Deciding which product and save to local storage
          //for product1
          $('#product1').click(function() {
            var imageSrc = $("#product1").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
            //for product2
          $('#product2').click(function() {
            var imageSrc = $("#product2").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
          //for product3
          $('#product3').click(function() {
            var imageSrc = $("#product3").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
          //for product4
          $('#product4').click(function() {
            var imageSrc = $("#product4").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product5
          $('#product5').click(function() {
            var imageSrc = $("#product5").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product6
          $('#product6').click(function() {
            var imageSrc = $("#product6").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product7
          $('#product7').click(function() {
            var imageSrc = $("#product7").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product8
          $('#product8').click(function() {
            var imageSrc = $("#product8").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product9
          $('#product9').click(function() {
            var imageSrc = $("#product9").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product10
          $('#product10').click(function() {
            var imageSrc = $("#product10").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product11
          $('#product11').click(function() {
            var imageSrc = $("#product11").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product12
          $('#product12').click(function() {
            var imageSrc = $("#product12").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product13
          $('#product13').click(function() {
            var imageSrc = $("#product13").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product14
          $('#product14').click(function() {
            var imageSrc = $("#product14").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product15
          $('#product15').click(function() {
            var imageSrc = $("#product15").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product16
          $('#product16').click(function() {
            var imageSrc = $("#product16").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product17
          $('#product17').click(function() {
            var imageSrc = $("#product17").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product18
          $('#product18').click(function() {
            var imageSrc = $("#product18").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product19
          $('#product19').click(function() {
            var imageSrc = $("#product19").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product20
          $('#product20').click(function() {
            var imageSrc = $("#product20").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product21
          $('#product21').click(function() {
            var imageSrc = $("#product21").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product22
          $('#product22').click(function() {
            var imageSrc = $("#product22").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product23
          $('#product23').click(function() {
            var imageSrc = $("#product23").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product24
          $('#product24').click(function() {
            var imageSrc = $("#product24").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product25
          $('#product25').click(function() {
            var imageSrc = $("#product25").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product26
          $('#product26').click(function() {
            var imageSrc = $("#product26").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product27
          $('#product27').click(function() {
            var imageSrc = $("#product27").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product28
          $('#product28').click(function() {
            var imageSrc = $("#product28").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product29
          $('#product29').click(function() {
            var imageSrc = $("#product29").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
          //for product30
          $('#product30').click(function() {
            var imageSrc = $("#product30").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
        });

  
 

 $("#4").click(function(){
      $("#view-more").hide();
      $("#view-more2").hide();
      $("#view-more3").hide();
      
      // Changing Heading
      $(".categories").text("Standard, Double-Pole Breaker");

      // product1
      $('#product1')
        .attr('src', 'Standard, Double-Pole Breaker/1.jpg')
        .attr('data-name', 'HOMT2020230CP Homeline, Double Pole Combination Tandem Circuit Breaker')
        .attr('data-price', '37.95')
        .attr('data-sku', '829348247')
        .removeAttr('data-src');
        // Update the text content of the <p> element
        $('#para1').text('HOMT2020230CP Homeline, Double Pole Combination Tandem Circuit Breaker');
        // Update the text content of the <h3> element that displays the price
        $('#price1').text('$37.95');
        // Update the number of stars in the <h3> element that displays the rating
        $('#rate1').html(`
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate_half</span>
        `);
        $('#rate1, #rate1 span').css('width', '15px');

      // product2
      $('#product2')
        .attr('src', 'Standard, Double-Pole Breaker/2.jpg')
        .attr('data-name', 'GE Plug in Circuit Breaker, THQL, Number of Poles 2, 20 Amps, 120/240VAC, Standard')
        .attr('data-price', '23.64')
        .attr('data-sku', '320347037')
        .removeAttr('data-src');
        // Update the text content of the <p> element
        $('#para2').text('GE Plug in Circuit Breaker, THQL, Number of Poles 2, 20 Amps, 120/240VAC, Standard');
        // Update the text content of the <h3> element that displays the price
        $('#price2').text('$23.64');
        // Update the number of stars in the <h3> element that displays the rating
        $('#rate2').html(`
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
            <span class="material-symbols-sharp">star_rate</span>
        `);
        $('#rate2, #rate2 span').css('width', '15px');

      // product3
      $('#product3')
      .attr('src', 'Standard, Double-Pole Breaker/3.jpg')
      .attr('data-name', 'MEATON BR240 Type BR Circuit Breaker, 120/240 VAC, 40 A, 10 kA, 2Poles Breaker')
      .attr('data-price', '18.68')
      .attr('data-sku', '215638046')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para3').text('MEATON BR240 Type BR Circuit Breaker, 120/240 VAC, 40 A, 10 kA, 2Poles Breaker');
      // Update the text content of the <h3> element that displays the price
      $('#price3').text('$18.68');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate3').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate3, #rate3 span').css('width', '15px');

      // product4
      $('#product4')
      .attr('src', 'Standard, Double-Pole Breaker/4.jpg')
      .attr('data-name', 'Common/Thermal Magnetic Trip HomeLine 30 amps Surge 2-Pole Circuit Breaker')
      .attr('data-price', '21.99')
      .attr('data-sku', '983649583')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para4').text('Common/Thermal Magnetic Trip HomeLine 30 amps Surge 2-Pole Circuit Breaker');
      // Update the text content of the <h3> element that displays the price
      $('#price4').text('$21.99');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate4').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate4, #rate4 span').css('width', '15px');

      // product5
      $('#product5')
      .attr('src', 'Standard, Double-Pole Breaker/5.jpg')
      .attr('data-name', 'Q250 50-Amp Double Pole Type QP Circuit Breaker Surge 2-Pole Circuit Breaker')
      .attr('data-price', '16.91')
      .attr('data-sku', '927492745')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para5').text('Q250 50-Amp Double Pole Type QP Circuit Breaker Surge 2-Pole Circuit Breaker');
      // Update the text content of the <h3> element that displays the price
      $('#price5').text('$16.91');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate5').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate_half</span>
      `);
      $('#rate5, #rate5 span').css('width', '15px');

      // product6
      $('#product6')
      .attr('src', 'Standard, Double-Pole Breaker/6.jpg')
      .attr('data-name', 'UBIP230-New Pushmatic P230 Replacement. Two Pole 30 Amp Circuit Breaker')
      .attr('data-price', '60.31')
      .attr('data-sku', '103847535')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para6').text('UBIP230-New Pushmatic P230 Replacement. Two Pole 30 Amp Circuit Breaker');
      // Update the text content of the <h3> element that displays the price
      $('#price6').text('$60.31');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate6').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate_half</span>
      `);
      $('#rate6, #rate6 span').css('width', '15px');

      // product7
      $('#product7')
      .attr('src', 'Standard, Double-Pole Breaker/7.jpg')
      .attr('data-name', 'UBIZ240 Zinsco QC40 Replacement Circuit Breaker, Two Pole 40 Amp Thick Series')
      .attr('data-price', '66.45')
      .attr('data-sku', '947293748')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para7').text('UBIZ240 Zinsco QC40 Replacement Circuit Breaker, Two Pole 40 Amp Thick Series');
      // Update the text content of the <h3> element that displays the price
      $('#price7').text('$66.45');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate7').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate7, #rate7 span').css('width', '15px');

      // product8
      $('#product8')
      .attr('src', 'Standard, Double-Pole Breaker/8.jpg')
      .attr('data-name', 'UBIF0250N Electric Stab-Lok Two Pole 50 Amp Thin Series Circuit Breaker')
      .attr('data-price', '50.01')
      .attr('data-sku', '5394038456')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para8').text('UBIF0250N Electric Stab-Lok Two Pole 50 Amp Thin Series Circuit Breaker');
      // Update the text content of the <h3> element that displays the price
      $('#price8').text('$50.01');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate8').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate8, #rate8 span').css('width', '15px');

      // product9
      $('#product9')
      .attr('src', 'Standard, Double-Pole Breaker/9.jpg')
      .attr('data-name', 'Leviton LB230-T 30A 2-Pole Plug-On Standard Branch Circuit Breaker, 120/240 VAC')
      .attr('data-price', '19.08')
      .attr('data-sku', '385739673')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para9').text('Leviton LB230-T 30A 2-Pole Plug-On Standard Branch Circuit Breaker, 120/240 VAC');
      // Update the text content of the <h3> element that displays the price
      $('#price9').text('$19.08');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate9').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate9, #rate9 span').css('width', '15px');

      // product10
      $('#product10')
      .attr('src', 'Standard, Double-Pole Breaker/10.jpg')
      .attr('data-name', 'Q230 30-Amp Double Pole Type 2-Pole Plug-On Standard QP Circuit Breaker')
      .attr('data-price', '16.05')
      .attr('data-sku', '284750634')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para10').text('Q230 30-Amp Double Pole Type 2-Pole Plug-On Standard QP Circuit Breaker');
      // Update the text content of the <h3> element that displays the price
      $('#price10').text('$16.05');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate10').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate10, #rate10 span').css('width', '15px');

      // product11
      $('#product11')
      .attr('src', 'Standard, Double-Pole Breaker/11.jpg')
      .attr('data-name', 'Siemens HI Q225 25-Amp Double Pole Type QP Circuit Breaker black')
      .attr('data-price', '82.12')
      .attr('data-sku', '942845234')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para11').text('Siemens HI Q225 25-Amp Double Pole Type QP Circuit Breaker black');
      // Update the text content of the <h3> element that displays the price
      $('#price11').text('$82.12');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate11').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate11, #rate11 span').css('width', '15px');

      // product12
      $('#product12')
      .attr('src', 'Standard, Double-Pole Breaker/12.jpg')
      .attr('data-name', 'Siemens LOW Q225 25-Amp Double Pole Type QP Circuit Breaker')
      .attr('data-price', '16.83')
      .attr('data-sku', '127459634')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para12').text('Siemens LOW Q225 25-Amp Double Pole Type QP Circuit Breaker');
      // Update the text content of the <h3> element that displays the price
      $('#price12').text('$16.83');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate12').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate_half</span>
      `);
      $('#rate12, #rate12 span').css('width', '15px');

      // product13
      $('#product13')
      .attr('src', 'Standard, Double-Pole Breaker/13.jpg')
      .attr('data-name', 'SIEMENS Q240 40-Amp Double Pole Type QP Circuit Breaker black')
      .attr('data-price', '16.11')
      .attr('data-sku', '274957693')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para13').text('SIEMENS Q240 40-Amp Double Pole Type QP Circuit Breaker black');
      // Update the text content of the <h3> element that displays the price
      $('#price13').text('$16.11');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate13').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate_half</span>
      `);
      $('#rate13, #rate13 span').css('width', '15px');

      // product14
      $('#product14')
      .attr('src', 'Standard, Double-Pole Breaker/14.jpg')
      .attr('data-name', 'Homeline™ Q245 45-Amp Double Pole Type QP Circuit Breaker')
      .attr('data-price', '44.42')
      .attr('data-sku', '520456834')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para14').text('Homeline™ Q245 45-Amp Double Pole Type QP Circuit Breaker');
      // Update the text content of the <h3> element that displays the price
      $('#price14').text('$44.42');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate14').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate14, #rate14 span').css('width', '15px');
      
      // product15
      $('#product15')
      .attr('src', 'Standard, Double-Pole Breaker/15.jpg')
      .attr('data-name', 'Homeline™ Q245 45-Amp Double Pole Type QP Circuit Breaker')
      .attr('data-price', '57.20')
      .attr('data-sku', '287405374')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para15').text('Homeline™ Q245 45-Amp Double Pole Type QP Circuit Breaker');
      // Update the text content of the <h3> element that displays the price
      $('#price15').text('$57.20');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate15').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate15, #rate15 span').css('width', '15px');

      // product16`
      $('#product16')
      .attr('src', 'Standard, Double-Pole Breaker/16.jpg')
      .attr('data-name', 'Homeline™ Q245 80-Amp Double Pole Type QP Circuit Breaker')
      .attr('data-price', '46.33')
      .attr('data-sku', '753305609')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para16').text('Homeline™ Q245 80-Amp Double Pole Type QP Circuit Breaker');
      // Update the text content of the <h3> element that displays the price
      $('#price16').text('$46.33');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate16').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate_half</span>
      `);
      $('#rate16, #rate16 span').css('width', '15px');
      

      // product17
      $('#product17')
      .attr('src', 'Standard, Double-Pole Breaker/17.jpg')
      .attr('data-name', 'Homeline™ Q245 90-Amp Double Pole Type QP Circuit Breaker')
      .attr('data-price', '38.00')
      .attr('data-sku', '638304506')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para17').text('Homeline™ Q245 90-Amp Double Pole Type QP Circuit Breaker');
      // Update the text content of the <h3> element that displays the price
      $('#price17').text('$38.00');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate17').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate_half</span>
      `);
      $('#rate17, #rate17 span').css('width', '15px');

      // product18
      $('#product18')
      .attr('src', 'Standard, Double-Pole Breaker/18.jpg')
      .attr('data-name', 'Homeline™ Q245 100-Amp Double Pole Type QP Circuit Breaker')
      .attr('data-price', '39.50')
      .attr('data-sku', '783095034')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para18').text('Homeline™ Q245 100-Amp Double Pole Type QP Circuit Breaker');
      // Update the text content of the <h3> element that displays the price
      $('#price18').text('$39.50');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate18').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate_half</span>
      `);
      $('#rate18, #rate18 span').css('width', '15px');

      // product19
      $('#product19')
      .attr('src', 'Standard, Double-Pole Breaker/19.jpg')
      .attr('data-name', 'GE Plug in Circuit Breaker, THQL, Number of Poles 2, 30 Amps, 120/240VAC, Standard')
      .attr('data-price', '33.33')
      .attr('data-sku', '734924578')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para19').text('GE Plug in Circuit Breaker, THQL, Number of Poles 2, 30 Amps, 120/240VAC, Standard');
      // Update the text content of the <h3> element that displays the price
      $('#price19').text('$33.33');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate19').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate_half</span>
      `);
      $('#rate19, #rate19 span').css('width', '15px');

      // product20
      $('#product20')
      .attr('src', 'Standard, Double-Pole Breaker/20.jpg')
      .attr('data-name', 'Square D HOM260 Plug-In Circuit Breaker, 60 Amp, 2-Pole')
      .attr('data-price', '27.00')
      .attr('data-sku', '748294724')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para20').text('Square D HOM260 Plug-In Circuit Breaker, 60 Amp, 2-Pole');
      // Update the text content of the <h3> element that displays the price
      $('#price20').text('$27.00');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate20').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate20, #rate20 span').css('width', '15px');

      // product21
      $('#product21')
      .attr('src', 'Standard, Double-Pole Breaker/21.jpg')
      .attr('data-name', 'CH225 2-Pole 25-Amp Circuit Breaker, Type CH 3/4-Inch Plug-On Molded Case Circuit Breaker')
      .attr('data-price', '29.99')
      .attr('data-sku', '563429454')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para21').text('CH225 2-Pole 25-Amp Circuit Breaker, Type CH 3/4-Inch Plug-On Molded Case Circuit Breaker');
      // Update the text content of the <h3> element that displays the price
      $('#price21').text('$29.99');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate21').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate21, #rate21 span').css('width', '15px');

      // product22
      $('#product22')
      .attr('src', 'Standard, Double-Pole Breaker/22.jpg')
      .attr('data-name', 'CH250 2-Pole 50-Amp Circuit Breaker, Type CH 3/4-Inch Plug-On Molded Case Circuit Breaker')
      .attr('data-price', '34.99')
      .attr('data-sku', '463499454')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para22').text('CH250 2-Pole 50-Amp Circuit Breaker, Type CH 3/4-Inch Plug-On Molded Case Circuit Breaker');
      // Update the text content of the <h3> element that displays the price
      $('#price22').text('$34.99');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate22').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate22, #rate22 span').css('width', '15px');

      // product23
      $('#product23')
      .attr('src', 'Standard, Double-Pole Breaker/23.jpg')
      .attr('data-name', 'Square D HOM230 Circuit Breaker 1/pkg 30A 120/240V 2P 10kAIC')
      .attr('data-price', '16.32')
      .attr('data-sku', '4683442454')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para23').text('Square D HOM230 Circuit Breaker 1/pkg 30A 120/240V 2P 10kAIC');
      // Update the text content of the <h3> element that displays the price
      $('#price23').text('$16.32');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate23').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate23, #rate23 span').css('width', '15px');

      // product24
      $('#product24')
      .attr('src', 'Standard, Double-Pole Breaker/24.jpg')
      .attr('data-name', 'QO250 50 Amp 2-Pole Circuit Breaker for Square D, QO250CP Miniature Circuit Breaker')
      .attr('data-price', '24.99')
      .attr('data-sku', '475935934')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para24').text('QO250 50 Amp 2-Pole Circuit Breaker for Square D, QO250CP Miniature Circuit Breaker');
      // Update the text content of the <h3> element that displays the price
      $('#price24').text('$24.99');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate24').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate24, #rate24 span').css('width', '15px');

      // product25
      $('#product25')
      .attr('src', 'Standard, Double-Pole Breaker/25.jpg')
      .attr('data-name', 'HOM2100CP Homeline 100-Amp  with Visi-Trip Indicator Two-Pole Circuit Breaker')
      .attr('data-price', '47.24')
      .attr('data-sku', '689345367')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para25').text('HOM2100CP Homeline 100-Amp  with Visi-Trip Indicator Two-Pole Circuit Breaker');
      // Update the text content of the <h3> element that displays the price
      $('#price25').text('$47.24');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate25').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate25, #rate25 span').css('width', '15px');

      // product26
      $('#product26')
      .attr('src', 'Standard, Double-Pole Breaker/26.jpg')
      .attr('data-name', 'QO260 60 Amp 2-Pole Circuit Breaker for Square D, QO260CP Miniature Circuit Breaker')
      .attr('data-price', '28.99')
      .attr('data-sku', '621564893')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para26').text('QO260 60 Amp 2-Pole Circuit Breaker for Square D, QO260CP Miniature Circuit Breaker');
      // Update the text content of the <h3> element that displays the price
      $('#price26').text('$$28.99');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate26').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate_half</span>
      `);
      $('#rate26, #rate26 span').css('width', '15px');

      // product27
      $('#product27')
      .attr('src', 'Standard, Double-Pole Breaker/27.jpg')
      .attr('data-name', 'Eaton CH260 Plug-On Mount Type CH Circuit Breaker 2-Pole 60 Amp 120/240 Volt AC')
      .attr('data-price', '77.03')
      .attr('data-sku', '475846857')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para27').text('Eaton CH260 Plug-On Mount Type CH Circuit Breaker 2-Pole 60 Amp 120/240 Volt AC');
      // Update the text content of the <h3> element that displays the price
      $('#price27').text('$77.03');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate27').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate27, #rate27 span').css('width', '15px');


      // product28
      $('#product28')
      .attr('src', 'Standard, Double-Pole Breaker/28.jpg')
      .attr('data-name', 'DC Miniature Circuit Breaker, 2 Pole 1000V 63 Amp Isolator, Thermal Magnetic Trip')
      .attr('data-price', '15.98')
      .attr('data-sku', '235648587')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para28').text('DC Miniature Circuit Breaker, 2 Pole 1000V 63 Amp Isolator, Thermal Magnetic Trip');
      // Update the text content of the <h3> element that displays the price
      $('#price28').text('$15.98');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate28').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate28, #rate28 span').css('width', '15px');


      // product29
      $('#product29')
      .attr('src', 'Standard, Double-Pole Breaker/29.jpg')
      .attr('data-name', 'Square D - HOM2100CP Homeline 100-Amp Two-Pole Circuit Breaker')
      .attr('data-price', '47.24')
      .attr('data-sku', '421568937')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para29').text('Square D - HOM2100CP Homeline 100-Amp Two-Pole Circuit Breaker');
      // Update the text content of the <h3> element that displays the price
      $('#price29').text('$47.24');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate29').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate29, #rate29 span').css('width', '15px');


      // product30
      $('#product30')
      .attr('src', 'Standard, Double-Pole Breaker/30.jpg')
      .attr('data-name', 'Square D - HOM2100CP Homeline 100-Amp Two-Pole Circuit Breaker')
      .attr('data-price', '44.82')
      .attr('data-sku', '231456789')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para30').text('Square D - HOM2100CP Homeline 100-Amp Two-Pole Circuit Breaker');
      // Update the text content of the <h3> element that displays the price
      $('#price30').text('$44.82');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate30').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate_half</span>
      `);
      $('#rate30, #rate30 span').css('width', '15px');
        
      // User Deciding which product and save to local storage
          //for product1
          $('#product1').click(function() {
            var imageSrc = $("#product1").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
            //for product2
          $('#product2').click(function() {
            var imageSrc = $("#product2").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
          //for product3
          $('#product3').click(function() {
            var imageSrc = $("#product3").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
          //for product4
          $('#product4').click(function() {
            var imageSrc = $("#product4").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product5
          $('#product5').click(function() {
            var imageSrc = $("#product5").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product6
          $('#product6').click(function() {
            var imageSrc = $("#product6").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product7
          $('#product7').click(function() {
            var imageSrc = $("#product7").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product8
          $('#product8').click(function() {
            var imageSrc = $("#product8").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product9
          $('#product9').click(function() {
            var imageSrc = $("#product9").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product10
          $('#product10').click(function() {
            var imageSrc = $("#product10").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product11
          $('#product11').click(function() {
            var imageSrc = $("#product11").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product12
          $('#product12').click(function() {
            var imageSrc = $("#product12").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product13
          $('#product13').click(function() {
            var imageSrc = $("#product13").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product14
          $('#product14').click(function() {
            var imageSrc = $("#product14").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product15
          $('#product15').click(function() {
            var imageSrc = $("#product15").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product16
          $('#product16').click(function() {
            var imageSrc = $("#product16").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product17
          $('#product17').click(function() {
            var imageSrc = $("#product17").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product18
          $('#product18').click(function() {
            var imageSrc = $("#product18").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product19
          $('#product19').click(function() {
            var imageSrc = $("#product19").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product20
          $('#product20').click(function() {
            var imageSrc = $("#product20").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product21
          $('#product21').click(function() {
            var imageSrc = $("#product21").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product22
          $('#product22').click(function() {
            var imageSrc = $("#product22").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product23
          $('#product23').click(function() {
            var imageSrc = $("#product23").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product24
          $('#product24').click(function() {
            var imageSrc = $("#product24").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product25
          $('#product25').click(function() {
            var imageSrc = $("#product25").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product26
          $('#product26').click(function() {
            var imageSrc = $("#product26").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product27
          $('#product27').click(function() {
            var imageSrc = $("#product27").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product28
          $('#product28').click(function() {
            var imageSrc = $("#product28").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
  
          //for product29
          $('#product29').click(function() {
            var imageSrc = $("#product29").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
  
          //for product30
          $('#product30').click(function() {
            var imageSrc = $("#product30").attr("src");
            var name = $(this).data('name');
            var price = parseFloat($(this).data('price'));
            var sku = parseFloat($(this).data('sku'));
          
            var cartItem = {
              name: name,
              price: price,
              src: imageSrc,
              sku: sku
            };
            // Set cartItem in local storage
            localStorage.setItem('cartItem', JSON.stringify
            (cartItem));
            window.location.href = "Purchase.html";
          });
    });



    // for Standard Single-Pole Breaker
    $("#5").click(function(){
      // Changing Heading
      $(".categories").text("Standard Single-Pole Breaker");

      // product1
      $('#product1')
      .attr('src', 'Standard, Double-Pole Breaker/1.jpg')
      .attr('data-name', 'SLENKRAD A-Series Red Toggle Circuit Breaker - Single Pole 50Ar')
      .attr('data-price', '19.99')
      .attr('data-sku', '156489576')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para1').text('SLENKRAD A-Series Red Toggle Circuit Breaker - Single Pole 50Ar');
      // Update the text content of the <h3> element that displays the price
      $('#price1').text('$19.99');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate1').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate_half</span>
      `);
      $('#rate1, #rate1 span').css('width', '15px');

      // product2
      $('#product2')
      .attr('src', 'Standard, Double-Pole Breaker/2.jpg')
      .attr('data-name', 'GE Plug in Circuit Breaker, THQL, Number of Poles 1, 30 Amps, 120/240VAC')
      .attr('data-price', '16.30')
      .attr('data-sku', '54267564')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para2').text('GE Plug in Circuit Breaker, THQL, Number of Poles 1, 30 Amps, 120/240VAC');
      // Update the text content of the <h3> element that displays the price
      $('#price2').text('$16.30');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate2').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate2, #rate2 span').css('width', '15px');

      
      // product3
      $('#product3')
      .attr('src', 'Standard, Double-Pole Breaker/3.jpg')
      .attr('data-name', 'Square D by Schneider Electric HOM120CP Homeline 20 Amp Single-Pole Circuit Breaker')
      .attr('data-price', '26.45')
      .attr('data-sku', '124568973')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para3').text('Square D by Schneider Electric HOM120CP Homeline 20 Amp Single-Pole Circuit Breaker');
      // Update the text content of the <h3> element that displays the price
      $('#price3').text('$26.45');
      // Update the number of stars in the <h3> element that displays the rating
      $('#rate3').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate_half</span>
      `);
      $('#rate3, #rate3 span').css('width', '15px');

      // product4
      $('#product4')
      .attr('src', 'Standard, Double-Pole Breaker/4.jpg')
      .attr('data-name', '30 Amps, 120/240VAC, Q120 20-Amp Single Pole Type QP Circuit Breaker')
      .attr('data-price', '23.54')
      .attr('data-sku', '756894259')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para4').text('30 Amps, 120/240VAC, Q120 20-Amp Single Pole Type QP Circuit Breaker');
      // Update the text content of the <h4> element that displays the price
      $('#price4').text('$23.54');
      // Update the number of stars in the <h4> element that displays the rating
      $('#rate4').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate_half</span>
      `);
      $('#rate4, #rate4 span').css('width', '15px');

      // product5
      $('#product5')
      .attr('src', 'Standard, Double-Pole Breaker/5.jpg')
      .attr('data-name', 'SIEMENS SIEQ125 SIE Q125 SP 25A 120/240V CB, 25 Amp, Black')
      .attr('data-price', '12.05')
      .attr('data-sku', '159483598')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para5').text('SIEMENS SIEQ125 SIE Q125 SP 25A 120/240V CB, 25 Amp, Black');
      // Update the text content of the <h5> element that displays the price
      $('#price5').text('$12.05');
      // Update the number of stars in the <h5> element that displays the rating
      $('#rate5').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate5, #rate5 span').css('width', '15px');

      // product6
      $('#product6')
      .attr('src', 'Standard, Double-Pole Breaker/6.jpg')
      .attr('data-name', 'SIEMENS SIEQ126 SIE Q126 SP 26A 120/240V CB, 26 Amp, Black')
      .attr('data-price', '15.14')
      .attr('data-sku', '745896123')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para6').text('SIEMENS SIEQ126 SIE Q126 SP 26A 120/240V CB, 26 Amp, Black');
      // Update the text content of the <h6> element that displays the price
      $('#price6').text('$15.14');
      // Update the number of stars in the <h6> element that displays the rating
      $('#rate6').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate_half</span>
      `);
      $('#rate6, #rate6 span').css('width', '15px');

      // product7
      $('#product7')
      .attr('src', 'Standard, Double-Pole Breaker/7.jpg')
      .attr('data-name', 'SIEMENS SIEQ160 SIE Q160 SP 60A 120/240V CB, 60 Amp, Black')
      .attr('data-price', '17.31')
      .attr('data-sku', '568923487')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para7').text('SIEMENS SIEQ160 SIE Q160 SP 60A 120/240V CB, 60 Amp, Black');
      // Update the text content of the <h7> element that displays the price
      $('#price7').text('$17.31');
      // Update the number of stars in the <h7> element that displays the rating
      $('#rate7').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate7, #rate7 span').css('width', '15px');

      
      // product8
      $('#product8')
      .attr('src', 'Standard, Double-Pole Breaker/8.jpg')
      .attr('data-name', 'UBIF0250N Connecticut Electric UBIP-115, One Pole 15 Amp')
      .attr('data-price', '29.65')
      .attr('data-sku', '856472354')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para8').text('UBIF0250N Connecticut Electric UBIP-115, One Pole 15 Amp');
      // Update the text content of the <h8> element that displays the price
      $('#price8').text('$29.65');
      // Update the number of stars in the <h8> element that displays the rating
      $('#rate8').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate8, #rate8 span').css('width', '15px');

      // product9
      $('#product9')
      .attr('src', 'Standard, Double-Pole Breaker/9.jpg')
      .attr('data-name', 'Connecticut Electric UBIP120-New Pushmatic One Pole 20 Amp Circuit Breaker')
      .attr('data-price', '29.57')
      .attr('data-sku', '456248754')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para9').text('Connecticut Electric UBIP120-New Pushmatic One Pole 20 Amp Circuit Breaker');
      // Update the text content of the <h9> element that displays the price
      $('#price9').text('$29.57');
      // Update the number of stars in the <h9> element that displays the rating
      $('#rate9').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate_half</span>
      `);
      $('#rate9, #rate9 span').css('width', '15px');

      // product10
      $('#product10')
      .attr('src', 'Standard, Double-Pole Breaker/10.jpg')
      .attr('data-name', 'UBIP230-New Pushmatic P230 Replacement. One Pole 30 Amp Circuit Breaker')
      .attr('data-price', '50.31')
      .attr('data-sku', '841257953')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para10').text('UBIP230-New Pushmatic P230 Replacement. One Pole 30 Amp Circuit Breaker');
      // Update the text content of the <h10> element that displays the price
      $('#price10').text('$50.31');
      // Update the number of stars in the <h10> element that displays the rating
      $('#rate10').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate10, #rate10 span').css('width', '15px');

      // product11
      $('#product11')
      .attr('src', 'Standard, Double-Pole Breaker/11.jpg')
      .attr('data-name', 'UBIA20NI-New Wadsworth Type A Replacement.1 Pole 20 Amp Circuit Breaker')
      .attr('data-price', '56.61')
      .attr('data-sku', '745123689')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para11').text('UBIA20NI-New Wadsworth Type A Replacement.1 Pole 20 Amp Circuit Breaker');
      // Update the text content of the <h11> element that displays the price
      $('#price11').text('$56.61');
      // Update the number of stars in the <h11> element that displays the rating
      $('#rate11').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate11, #rate11 span').css('width', '15px');

      // product12
      $('#product12')
      .attr('src', 'Standard, Double-Pole Breaker/12.jpg')
      .attr('data-name', '0A 1-Pole Plug-On Standard Bran2ch Circuit Breaker, Thermal Magnetic')
      .attr('data-price', '9.78')
      .attr('data-sku', '548923175')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para12').text('0A 1-Pole Plug-On Standard Bran2ch Circuit Breaker, Thermal Magnetic');
      // Update the text content of the <h12> element that displays the price
      $('#price12').text('$9.78');
      // Update the number of stars in the <h12> element that displays the rating
      $('#rate12').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate12, #rate12 span').css('width', '15px');


      // product13
      $('#product13')
      .attr('src', 'Standard, Double-Pole Breaker/13.jpg')
      .attr('data-name', 'Square D Schneider Electric, QO120, Circuit Breaker 1P 20A, Black')
      .attr('data-price', '13.99')
      .attr('data-sku', '546823795')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para13').text('Square D Schneider Electric, QO120, Circuit Breaker 1P 20A, Black');
      // Update the text content of the <h13> element that displays the price
      $('#price13').text('$13.99');
      // Update the number of stars in the <h13> element that displays the rating
      $('#rate13').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate_half</span>
      `);
      $('#rate13, #rate13 span').css('width', '15px');


      // product14
      $('#product14')
      .attr('src', 'Standard, Double-Pole Breaker/14.jpg')
      .attr('data-name', 'Schneider Electric One Source QO120CP 20-Amp 1-Pole Plug Circuit Breaker')
      .attr('data-price', '13.97')
      .attr('data-sku', '412567896')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para14').text('Schneider Electric One Source QO120CP 20-Amp 1-Pole Plug Circuit Breaker');
      // Update the text content of the <h14> element that displays the price
      $('#price14').text('$13.97');
      // Update the number of stars in the <h14> element that displays the rating
      $('#rate14').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate_half</span>
      `);
      $('#rate14, #rate14 span').css('width', '15px');

      // product15
      $('#product15')
      .attr('src', 'Standard, Double-Pole Breaker/15.jpg')
      .attr('data-name', 'Cutler Hammer CHF120  Electric One Source Circuit Breaker, 1-Pole 20-Amp')
      .attr('data-price', '13.45')
      .attr('data-sku', '512567896')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para15').text('Cutler Hammer CHF120  Electric One Source Circuit Breaker, 1-Pole 20-Amp');
      // Update the text content of the <h15> element that displays the price
      $('#price15').text('$13.45');
      // Update the number of stars in the <h15> element that displays the rating
      $('#rate15').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate_half</span>
      `);
      $('#rate15, #rate15 span').css('width', '15px');

      // product16
      $('#product16')
      .attr('src', 'Standard, Double-Pole Breaker/16.jpg')
      .attr('data-name', 'Eaton Cutler-Hammer Single-Pole BR Type Circuit Breaker, 20-Amp, 120/240-Volt')
      .attr('data-price', '9.99')
      .attr('data-sku', '612667896')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para16').text('Eaton Cutler-Hammer Single-Pole BR Type Circuit Breaker, 20-Amp, 120/240-Volt');
      // Update the text content of the <h16> element that displays the price
      $('#price16').text('$9.99');
      // Update the number of stars in the <h16> element that displays the rating
      $('#rate16').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate16, #rate16 span').css('width', '15px');

      // product17
      $('#product17')
      .attr('src', 'Standard, Double-Pole Breaker/17.jpg')
      .attr('data-name', 'UBITBA115L-New Challenger One Pole 15 Amp Left Clip Circuit Breaker')
      .attr('data-price', '18.70')
      .attr('data-sku', '856492735')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para17').text('UBITBA115L-New Challenger One Pole 15 Amp Left Clip Circuit Breaker');
      // Update the text content of the <h17> element that displays the price
      $('#price17').text('$18.70');
      // Update the number of stars in the <h17> element that displays the rating
      $('#rate17').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate17, #rate17 span').css('width', '15px');

      // product18
      $('#product18')
      .attr('src', 'Standard, Double-Pole Breaker/18.jpg')
      .attr('data-name', 'quare D QO130 Plug-In Mount Standard Miniature Circuit Breaker 1-Pole 30 Amp')
      .attr('data-price', '13.95')
      .attr('data-sku', '456795234')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para18').text('quare D QO130 Plug-In Mount Standard Miniature Circuit Breaker 1-Pole 30 Amp');
      // Update the text content of the <h18> element that displays the price
      $('#price18').text('$13.95');
      // Update the number of stars in the <h18> element that displays the rating
      $('#rate18').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate18, #rate18 span').css('width', '15px');

      // product19
      $('#product19')
      .attr('src', 'Standard, Double-Pole Breaker/19.jpg')
      .attr('data-name', 'omeline Single Pole Miniature Standard Miniature Circuit Breaker (120V, 50A)')
      .attr('data-price', '18.45')
      .attr('data-sku', '562437894')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para19').text('omeline Single Pole Miniature Standard Miniature Circuit Breaker (120V, 50A)');
      // Update the text content of the <h19> element that displays the price
      $('#price19').text('$18.45');
      // Update the number of stars in the <h19> element that displays the rating
      $('#rate19').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate_half</span>
      `);
      $('#rate19, #rate19 span').css('width', '15px');


      // product20
      $('#product20')
      .attr('src', 'Standard, Double-Pole Breaker/20.jpg')
      .attr('data-name', 'Cutler Hammer 30 Amp Single Standard Miniature Pole Circuit Breaker CHF130')
      .attr('data-price', '23.00')
      .attr('data-sku', '489276319')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para20').text('Cutler Hammer 30 Amp Single Standard Miniature Pole Circuit Breaker CHF130');
      // Update the text content of the <h20> element that displays the price
      $('#price20').text('$23.00');
      // Update the number of stars in the <h20> element that displays the rating
      $('#rate20').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate20, #rate20 span').css('width', '15px');

      // product21
      $('#product21')
      .attr('src', 'Standard, Double-Pole Breaker/21.jpg')
      .attr('data-name', 'UBITBA120R-New Challenger MH120R Type A Replacement. One Pole 20 Amp Right Clip Circuit Breaker')
      .attr('data-price', '23.74')
      .attr('data-sku', '874213697')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para21').text('UBITBA120R-New Challenger MH120R Type A Replacement. One Pole 20 Amp Right Clip Circuit Breaker');
      // Update the text content of the <h21> element that displays the price
      $('#price21').text('$23.74');
      // Update the number of stars in the <h21> element that displays the rating
      $('#rate21').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate21, #rate21 span').css('width', '15px');

      // product22
      $('#product22')
      .attr('src', 'Standard, Double-Pole Breaker/22.jpg')
      .attr('data-name', 'UBIA20NI-New Wadsworth Type A Replacement.1 Pole 20 Amp Circuit Breaker, Gray')
      .attr('data-price', '56.61')
      .attr('data-sku', '564129873')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para22').text('UBIA20NI-New Wadsworth Type A Replacement.1 Pole 20 Amp Circuit Breaker, Gray');
      // Update the text content of the <h22> element that displays the price
      $('#price22').text('$56.61');
      // Update the number of stars in the <h22> element that displays the rating
      $('#rate22').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate22, #rate22 span').css('width', '15px');

      // product23
      $('#product23')
      .attr('src', 'Standard, Double-Pole Breaker/23.jpg')
      .attr('data-name', 'Square D by Schneider Electric QO115CP Circuit Breaker, Black')
      .attr('data-price', '13.85')
      .attr('data-sku', '423987562')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para23').text('Square D by Schneider Electric QO115CP Circuit Breaker, Black');
      // Update the text content of the <h23> element that displays the price
      $('#price23').text('$13.85');
      // Update the number of stars in the <h23> element that displays the rating
      $('#rate23').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate_half</span>
      `);
      $('#rate23, #rate23 span').css('width', '15px');


      // product24
      $('#product24')
      .attr('src', 'Standard, Double-Pole Breaker/24.jpg')
      .attr('data-name', 'GE Plug in Circuit Breaker, THQL, Number of Poles 1, 15 Amps, 120/240VAC, Standard')
      .attr('data-price', '16.25')
      .attr('data-sku', '568923487')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para24').text('GE Plug in Circuit Breaker, THQL, Number of Poles 1, 15 Amps, 120/240VAC, Standard');
      // Update the text content of the <h24> element that displays the price
      $('#price24').text('$16.25');
      // Update the number of stars in the <h24> element that displays the rating
      $('#rate24').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate_half</span>
      `);
      $('#rate24, #rate24 span').css('width', '15px');


      // product25
      $('#product25')
      .attr('src', 'Standard, Double-Pole Breaker/25.jpg')
      .attr('data-name', 'GE GIDDS-608007 608007 Single Pole 1/2 Thqp Breaker 20A')
      .attr('data-price', '12.24')
      .attr('data-sku', '654893256')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para25').text('GE GIDDS-608007 608007 Single Pole 1/2 Thqp Breaker 20A');
      // Update the text content of the <h25> element that displays the price
      $('#price25').text('$12.24');
      // Update the number of stars in the <h25> element that displays the rating
      $('#rate25').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate25, #rate25 span').css('width', '15px');


      // product26
      $('#product26')
      .attr('src', 'Standard, Double-Pole Breaker/26.jpg')
      .attr('data-name', 'GE Plug in Circuit Breaker, THQL, Number of Poles 1, 20 Amps, 120/240VAC, Standard')
      .attr('data-price', '15.45')
      .attr('data-sku', '562301405')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para26').text('GE Plug in Circuit Breaker, THQL, Number of Poles 1, 20 Amps, 120/240VAC, Standard');
      // Update the text content of the <h26> element that displays the price
      $('#price26').text('$15.45');
      // Update the number of stars in the <h26> element that displays the rating
      $('#rate26').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate_half</span>
      `);
      $('#rate26, #rate26 span').css('width', '15px');


      // product27
      $('#product27')
      .attr('src', 'Standard, Double-Pole Breaker/27.jpg')
      .attr('data-name', 'Eaton CH260 Plug-On Mount Circuit Breaker, 30A, 1P, 10Ka, 120Vac')
      .attr('data-price', '13.50')
      .attr('data-sku', '546378954')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para27').text('Eaton CH260 Plug-On Mount Circuit Breaker, 30A, 1P, 10Ka, 120Vac');
      // Update the text content of the <h27> element that displays the price
      $('#price27').text('$13.50');
      // Update the number of stars in the <h27> element that displays the rating
      $('#rate27').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate_half</span>
      `);
      $('#rate27, #rate27 span').css('width', '15px');

      // product28
      $('#product28')
      .attr('src', 'Standard, Double-Pole Breaker/28.jpg')
      .attr('data-name', 'UBIZ20-New Zinsco One Pole 20 Amp Thick Series, Thermal Magnetic Trip')
      .attr('data-price', '38.86')
      .attr('data-sku', '785460450')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para28').text('UBIZ20-New Zinsco One Pole 20 Amp Thick Series, Thermal Magnetic Trip');
      // Update the text content of the <h28> element that displays the price
      $('#price28').text('$38.86');
      // Update the number of stars in the <h28> element that displays the rating
      $('#rate28').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate28, #rate28 span').css('width', '15px');

      // product29
      $('#product29')
      .attr('src', 'Standard, Double-Pole Breaker/29.jpg')
      .attr('data-name', 'HOM2100CP Q130H 30-Amp Single Pole 22kA Type QPH Circuit Breaker')
      .attr('data-price', '27.62')
      .attr('data-sku', '107894504')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para29').text('HOM2100CP Q130H 30-Amp Single Pole 22kA Type QPH Circuit Breaker');
      // Update the text content of the <h29> element that displays the price
      $('#price29').text('$27.62');
      // Update the number of stars in the <h29> element that displays the rating
      $('#rate29').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate29, #rate29 span').css('width', '15px');

      // product30
      $('#product30')
      .attr('src', 'Standard, Double-Pole Breaker/30.jpg')
      .attr('data-name', 'Connecticut Electric UBIZ15 One Pole 15 Amp Thick Series Circuit Breaker')
      .attr('data-price', '23.75')
      .attr('data-sku', '785423694')
      .removeAttr('data-src');
      // Update the text content of the <p> element
      $('#para30').text('Connecticut Electric UBIZ15 One Pole 15 Amp Thick Series Circuit Breaker');
      // Update the text content of the <h30> element that displays the price
      $('#price30').text('$23.75');
      // Update the number of stars in the <h30> element that displays the rating
      $('#rate30').html(`
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
          <span class="material-symbols-sharp">star_rate</span>
      `);
      $('#rate30, #rate30 span').css('width', '15px');
 
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

