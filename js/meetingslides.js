

// Filter slides
$(document).ready(function(){
    $('.slide_filter_item').click(function(){
      const value = $(this).attr('data-filter');
      if (value == 'All') {
        $('.slide').show('1000');
      }
      else {
        $('.slide').not('.' +value).hide('1000');
        $('.slide').filter('.' +value).show('1000');
      }
    })
  
  
    // add active class on selected item
    $('.slide_filter_item').click(function(){
      $(this).addClass('slide_filter_active').siblings().removeClass('slide_filter_active');
    })
  })