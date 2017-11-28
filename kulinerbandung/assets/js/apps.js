$(document).ready(function(){

//scroll animation
AOS.init();

//list makanan
var listMakanan = $('.content-item');
var filter = $('.search');

$.get ('https://panjidwi.github.io/talentbandung.id/kulinerbandung/assets/json/kuliner.json', function (data, status) {
    for (var i=0; data.length; i++ ) {
        var makanan = '<div class="item">'+'<figure>'+'<img src="'+data[i].images+'" />'+'</figure>'+'<article>'+'<a href="'+data[i].link+'">'+'<h2>'+data[i].nama+'</h2>'+'<p>'+'<strong>'+data[i].kategori+'</strong>'+'</p>'+'<p>'+data[i].deskripsi+'</p>'+'</a>'+'</article>'+'</div>';
        listMakanan.append(makanan);
    }
})

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

});