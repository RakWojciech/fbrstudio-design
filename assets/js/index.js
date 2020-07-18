// // init Isotope
// var $grid = $('.grid').isotope({
//     itemSelector: '.grid-item',
//     percentPosition: true,
//     masonry: {
//       columnWidth: '.grid-sizer'
//     }
//   });
//   // layout Isotope after each image loads
//   $grid.imagesLoaded().progress( function() {
//     $grid.isotope('layout');
//   }); 


// external js: isotope.pkgd.js

$('.grid').isotope({
    itemSelector: '.grid-item',
    // masonry: {
    //   columnWidth: 100
    // }
  });
  