function ready() {


    const md_height = window.innerHeight;
    const md_width = window.innerWidth;
    
    const img_resizes_one = document.getElementsByClassName("photo_one")[0];
    const img_resizes_two = document.getElementsByClassName("photo_two")[0];

    const  img_resize_one = img_resizes_one.getElementsByTagName("img")[0];    
    const img_resize_two = img_resizes_two.getElementsByTagName("img")[0];    
     
       if (md_width >= 1200){               
               img_resize_one.setAttribute('src', 'images/1200/1200_photo_1.jpg');
               img_resize_two.setAttribute('src', 'images/1200/1200_photo_2.jpg');
        }
      else if (md_width <= 1199 & md_width >= 992){               
               img_resize_one.setAttribute('src', 'images/992/992_photo_1.jpg');
               img_resize_two.setAttribute('src', 'images/992/992_photo_2.jpg');
        }
      else if (md_width <= 991 & md_width >= 768){
               img_resize_one.setAttribute('src', 'images/768/768_photo_1.jpg');
               img_resize_two.setAttribute('src', 'images/768/768_photo_2.jpg');
        }
       else if (md_width <= 765 & md_width >= 576){               
               img_resize_one.setAttribute('src', 'images/576/576_photo_1.jpg');
               img_resize_two.setAttribute('src', 'images/576/576_photo_2.jpg');
        }
       else if (md_width <= 576 & md_width >= 375){               
               img_resize_one.setAttribute('src', 'images/375/375_photo_1.jpg');
               img_resize_two.setAttribute('src', 'images/375/375_photo_2.jpg');
        }; 
    
}

  document.addEventListener("DOMContentLoaded", ready);