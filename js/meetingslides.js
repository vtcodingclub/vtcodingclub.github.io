// Place the newer slides above the older slides
// How to get the iframe url: https://it.umn.edu/services-technologies/how-tos/drupal-lite-8-9-use-iframe-embed-google
// Remove everything after the /embed?

slides = [
  {
      "slide_name": "Intro to Web Development Part 1",
      "about_slide": "October 20th - 27th, 2021",
      "type": "Workshop",
      "slide_url": "https://docs.google.com/presentation/d/16BeUYDEZITdSyiAilH0s9okEMP873TRJoex9FrugXi8/edit?usp=sharing",
      "iframe_url": "https://docs.google.com/presentation/d/e/2PACX-1vQICtrJ35NmB8hgsZgq7MTZ7ZzeVxHzs_7TuF57DKjxoOttEuQVhy-upnQusTR7ySspQFmvpH1cHB0V/embed?"
  },
  {
      "slide_name": "First Meeting!",
      "about_slide": "October 13th, 2021",
      "type": "general",
      "slide_url": "https://docs.google.com/presentation/d/1_uEJYcfGosJzlOp6nVbC0YzPFQWLSDL4TJWeus7G32A/edit?usp=sharing",
      "iframe_url": "https://docs.google.com/presentation/d/e/2PACX-1vTxTYLpqSB1JnmhajwQQgty0-CJA3Yxrkh9GWIgXwOMRNKgbokGSuB0VkItQUANsvPBSpjAyYaytshe/embed?"
  }
]

for (let i=0; i < slides.length; i++) {
  // console.log(slides[i]);
  slide = slides[i];

  // Create container for slide
  slides_container = document.getElementById("slides_container");

  slide_hyperlink = document.createElement("a");
  slide_hyperlink.href = slide.slide_url;
  slide_hyperlink.classList.add("slide_hyperlink");
  
  slide_container = document.createElement("div");
  slide_container.classList.add("slide");
  slide_container.classList.add(slide.type.toLowerCase());


  slide_preview_container = document.createElement("div");
  slide_preview_container.classList.add("slide_image_container");

  slide_hyperlink_preview = document.createElement("a");
  slide_hyperlink_preview.href = slide.slide_url;
  
  preview = document.createElement("iframe");
  preview.src = slide.iframe_url;
  preview.frameborder = "0";
  preview.width = "100%";
  preview.height = "100%";
  preview.allowfullscreen = "true";
  preview.mozallowfullscreen = "true";
  preview.webkitallowfullscreen = "true";

  about_slide_container = document.createElement("div");
  about_slide_container.classList.add("about_slide_section");

  slide_name = document.createElement("p");
  slide_name.classList.add("slide_name");
  slide_name.innerHTML = slide.slide_name + "|" + slide.type[0].toUpperCase() + slide.type.substring(1);

  about_slide = document.createElement("p");
  about_slide.classList.add("about_slide");
  about_slide.innerHTML = slide.about_slide;

  view_slides_button = document.createElement("a");
  view_slides_button.classList.add("view_slides_button");
  view_slides_button.innerHTML = "View Slides";
  view_slides_button.href = slide.slide_url;

  about_slide_container.appendChild(slide_name);
  about_slide_container.appendChild(about_slide);
  about_slide_container.appendChild(view_slides_button);

  slide_hyperlink_preview.appendChild(preview);

  slide_preview_container.appendChild(slide_hyperlink_preview);
  
  slide_container.appendChild(slide_preview_container);
  slide_container.appendChild(about_slide_container);

  slide_hyperlink.appendChild(slide_container);
  slides_container.appendChild(slide_hyperlink);
}

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
