$(document).ready(function() {
    window.sr = ScrollReveal({reset: true, mobile: false});
    //general   
    sr.reveal('.hero figure', {duration:1000, origin: 'top', mobile: false, reset: false});
    sr.reveal('.credit p', {duration: 800, delay: 100, origin: 'left', distance: '50px'});
    sr.reveal('.credit i', {duration: 800, delay: 100, origin: 'bottom', distance: '50px'});
    sr.reveal('.logo1', {duration: 800, delay: 100, origin: 'top', distance: '20px'});
    sr.reveal('.logo2', {duration: 800, delay: 100, origin: 'bottom', distance: '20px'});
    //article
    sr.reveal('.web-article h1', {duration: 800, origin: 'left', distance: '100px'});
    sr.reveal('.web-article figure', {duration: 800, origin: 'left', distance: '20px'});
    sr.reveal('.web-article p', {duration: 800, origin: 'right', distance: '100px'});
    sr.reveal('.rec-list h2', {duration: 800, origin: 'bottom', distance: '30px'});
    sr.reveal('.rec-item', {duration: 500, origin: 'left', distance: '20px', reset: false});
    sr.reveal('.rec-item h3', {duration: 500, origin: 'right', distance: '50px'});
    sr.reveal('.rec-item figure', {duration: 600, origin: 'left', distance: '30px'});
    sr.reveal('.rec-info span', {duration: 600, origin: 'right', distance: '30px'});
});