$(document).ready(function() {
    window.sr = ScrollReveal({reset: true, mobile: false});
    //general   
    sr.reveal('.hero figure', {duration:1000, origin: 'top', mobile: false, reset: false});
    sr.reveal('.credit p', {duration: 800, delay: 100, origin: 'left', distance: '50px'});
    sr.reveal('.credit i', {duration: 800, delay: 100, origin: 'bottom', distance: '50px'});
    sr.reveal('.logo1', {duration: 800, delay: 100, origin: 'top', distance: '20px'});
    sr.reveal('.logo2', {duration: 800, delay: 100, origin: 'bottom', distance: '20px'});
    //content
    sr.reveal('.about-web h1', {duration: 800, origin: 'top', distance: '50px'});
    sr.reveal('.bcg', {duration: 800, origin: 'bottom'});
    sr.reveal('.paragraph', {duration: 800, origin: 'bottom'});
});