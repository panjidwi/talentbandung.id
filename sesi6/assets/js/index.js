//list taman
var listTaman = $('.daftar-taman.grid-layout');
	$.get ('https://www.ariona.net/talentbandung/', function(data, status){
		for (var i=0; i<data.length; i++) {
			var taman = '<div class="grid-item">'+'<article class="taman">'+'<figure>'+'<img src="'+data[i].image.thumbnail+'"/>'+'</figure>'+'<div class="taman-detail">'+'<h2>'+'<span class="title">'+data[i].nama+'</span>'+'</h2>'+'<p>'+data[i].alamat+'</p>'+'</div>'+'</artcle>'+'</div>';
			listTaman.append(taman);
		}
    })
//filter
var filter = $('#filter');
filter.keyup(filtertaman);

function filtertaman(){
    var taman = $('.taman');
    for (var i = 0; i < taman.length; i++) {
        var item = $(taman[i]).text().toLowerCase();
        if (item.indexOf(filter.val().toLowerCase()) != -1) {
            $(taman[i]).slideDown();
        }else {
            $(taman[i]).slideUp();
        }
    }
}

var gallery = $( '.gallery-carousel' ).slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><i class="ion-ios-arrow-thin-left"></i></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="ion-ios-arrow-thin-right"></i></button>',
});

function initMap() {
    var balkot = {lat: -6.9130821, lng: 107.6071265};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: balkot
    });
    var marker = new google.maps.Marker({
      position: balkot,
      map: map
    });
}