(function($){
  $(function(){
    $('.button-collapse').sideNav({
      closeOnClick: true
    });
      var options = [
        {selector: '#top', offset: 1500, callback: function(){
          $("#topScroller").removeClass('hide');
        } },
      ];
      Materialize.scrollFire(options);
    $('.parallax').parallax();
    $("#contactform").validate({
      lang: 'de'
    });
    $('a[href^="#"]').click(
      function(e) {
        e.preventDefault(); var dest = $(this).attr('href');
        $('html,body').animate({ scrollTop: $(dest).offset().top }, 'slow');
      }
    );

  }); // end of document ready
})(jQuery); // end of jQuery name space

/*jQuery(document).ready(function($) {
  var siteUrl = 'http://'+(document.location.hostname||document.location.host);

  // Make sure that all clicked links that link to your internal website
  // don't just reload the page but execute a History.pushState call
  $(document).delegate('a[href^="/"],a[href^="'+siteUrl+'"]', "click", function(e) {
    e.preventDefault();
    History.pushState({}, "", this.pathname);
  });

  // Catch all History stateChange events
  History.Adapter.bind(window, 'statechange', function(){
    var State = History.getState();
    // Load the new state's URL via an Ajax Call
    $.get(State.url, function(data){
      // Replace the "<title>" tag's content
      var title = $(data).filter("title").text();
      document.title = title;

      // Replace the content of the main container (.content)
      // If you're using another div, you should change the selector
      var content = $(data).filter('body');
      $('body').html(content);
      $('.parallax').parallax();
      $("#contactform").validate();
      // If you're using Google analytics, make sure the pageview is registered!
      //_gaq.push(['_trackPageview', State.url]);
    });
  });
});
  */