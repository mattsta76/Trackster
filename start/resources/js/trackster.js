var Trackster = {};

const API_KEY = 'fe1b16b0219b581ac924284082fa065f';

/* this function searches from click of button */
$(document).ready(function() {
  $('#search-button').click(function() {

    Trackster.searchTracksByTitle($('#search-input').val());

  });
});

$(document).keypress(function(e) {
    if(e.which == 13) {

  Trackster.searchTracksByTitle($('#search-input').val());
    }
});

$(document).ready(function() {
$('#search-button').click(function() {
$('.header h1').animate({
height: '+=100px'
}).addClass('change');
Trackster.searchTracksByTitle($('#search-input').val());
});
});
/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {
  var $trackList = $('#track-list')
    $trackList.empty();

    for (var trackIndex = 0; trackIndex < tracks.length; trackIndex++) {
      var track = tracks[trackIndex];
      var mediumAlbumArt = track.image[1] ["#text"];
      var htmlTrackRow =
      '<div class="row track">'+
      '<div class="col-xs-1 col-xs-offset-1 play-button">' +
      '<a href="' + track.url + '" target="_blank">' +
      '<i class="fa fa-play-circle-o fa-2x"></i>' +
      ' </a>' +  '</div>' +
      '  <div class="col-xs-4">' + track.name + '</div>' +
      '  <div class="col-xs-2">' + track.artist + '</div>' +
      '  <div class="col-xs-2"><img src="' + mediumAlbumArt + '"/></div>' +
      '  <div class="col-xs-2">' + track.listeners + '</div>' +
      '</div>';

      $trackList.append(htmlTrackRow);

  }
};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  $.ajax({
     url: 'https://ws.audioscrobbler.com/2.0/?method=track.search&track=' + title + '&api_key=' + API_KEY + '&format=json',
     success: function(response) {
       Trackster.renderTracks(response.results.trackmatches.track);
     }
   });
 };

 $( document ).ajaxComplete(function( event, request, settings ) {
   $('.header h1').animate({
     height: '-=100px'
     }).removeClass('change');
 });
