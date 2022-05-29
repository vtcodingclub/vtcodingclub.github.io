function change_image(status) {
   
    images = ["one.JPG", "two.JPG", "three.JPG"];
    slideshow = document.getElementById("slideshow");

    current_slide = slideshow.src.split('slideshow/')[1];

    current_slide_index = images.indexOf(current_slide);
    num_of_photos = images.length - 1;

    if (status == "next") {
        if (current_slide_index >= num_of_photos) {
            next_image = 0;
        }
    
        else {
            next_image = current_slide_index + 1;
        }
    }

    else {
        if (current_slide_index <= 0) {
            next_image = num_of_photos;
        }

        else {
            next_image = current_slide_index - 1;
        }
    }


    slideshow.src = "images/slideshow/" + images[next_image];
    
    

}

setInterval(change_image, 2500, "next");