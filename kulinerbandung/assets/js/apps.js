//list-index-item
var listMakanan = $('.content-item');
var filter = $('.search');

$.get ('https://panjidwi.github.io/talentbandung.id/kulinerbandung/assets/json/kuliner.json', function (data, status) {
    for (var i=0; data.length; i++ ) {
        var makanan = '<div class="item">'+'<figure>'+'<img src="'+data[i].images+'" />'+'</figure>'+'<article>'+'<a href="'+data[i].link+'">'+'<h2>'+data[i].nama+'</h2>'+'<p>'+'<strong>'+data[i].kategori+'</strong>'+'</p>'+'<p>'+data[i].deskripsi+'</p>'+'</a>'+'</article>'+'</div>';
        listMakanan.append(makanan);
    }
});

//filter-search
filter.on('keyup', function(){
    var makanan  = $(".item");
    var search = this.value.toLowerCase();
    
    makanan.each(function(){
       var namaMakanan   = $(this).find('h2').text().toLowerCase();
       var kategori = $(this).find('p').text().toLowerCase();
 
       if (namaMakanan.indexOf(search) != -1 || kategori.indexOf(search) != -1) {
          $(this).show(300);
       } else {
          $(this).hide(300);
       }
    });
});

//event-popup-gallery
$('.zoom-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
        verticalFit: true
    },
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
        opener: function(element) {
            return element.find('img');
        }
    }
    
});

//popup-gallery-article
$('.popup-gallery1').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile, mfp-fade',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1]
    },
    image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    }
});

$('.popup-gallery2').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile, mfp-fade',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1]
    },
    image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    }
});

$('.popup-gallery3').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile, mfp-fade',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1]
    },
    image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    }
});

//popup-maps-article
$('.popup-gmaps').magnificPopup({
    disableOn: 480,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
});