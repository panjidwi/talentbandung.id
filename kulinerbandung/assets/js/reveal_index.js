$(document).ready(function() {
    window.sr = ScrollReveal({reset: false, mobile: false});
    //general   
    sr.reveal('.hero figure', {duration:1000, origin: 'top', reset: false});
    sr.reveal('.credit p', {duration: 800, delay: 200, origin: 'left', distance: '50px'});
    sr.reveal('.credit i', {duration: 800, delay: 200, origin: 'bottom', distance: '50px'});
    sr.reveal('.menu', {duration: 800, delay: 400, origin: 'left', distance: '100px', reset: false});
    sr.reveal('.logo1', {duration: 800, delay: 400, origin: 'top', distance: '20px'});
    sr.reveal('.logo2', {duration: 800, delay: 400, origin: 'bottom', distance: '20px'});
    //content
    sr.reveal('.title i', {duration: 1000, origin: 'top'});
    sr.reveal('.title h2', {duration: 1000, origin: 'bottom'});
    sr.reveal('.event-item', {duration: 800, origin: 'bottom', distance: '20px'});
});