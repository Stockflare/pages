$(document).ready(function() {
  $('.reveal').click(function() {
    $('header').toggleClass('revealed');
  });

  var $iframeSpinner = $('.iframe-spinner');
  var $iframe = $('.iframe');

  window.onIframeLoad = function() {
    $iframeSpinner.fadeOut(function() {
      $iframe.fadeIn();
    });
  }

  function generateIframe(ric) {
    var src = 'https://widget-api.stockflare.com/?ric=' + ric;
    var iframe = '<iframe height="800" class="widget" src="' + src + '" onLoad="onIframeLoad()"></iframe>'
    var code = '<iframe height="800" src="' + src + '"></iframe>'

    $iframe
      .css('display', 'none')
      .html(iframe);

    $iframeSpinner.css('display', 'block');

    $('.code').text(code);
    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  }

  generateIframe('fb.o');

  var data = {
    sorting: {
      market_value_usd: 'desc'
    },
    select: ['ric', 'short_name'],
    term: ''
  };

  var $spinner = $('.search-spinner');

  $('.widget-search').autocomplete({
    serviceUrl: 'https://api.stockflare.com/search',
    ajaxSettings: {
      method: 'PUT',
      dataType: 'json',
      data: data
    },
    transformResult: function(response) {
      return {
        suggestions: $.map(response, function(item) {
          var display = item.short_name + ' (' + item.ric.toUpperCase() + ')';
          return { value: display, data: item.ric };
        })
      };
    },
    onSearchStart: function(q) {
      $spinner.show();
      data.term = q.query;
    },
    onSearchComplete: function() {
      $spinner.hide();
    },
    onSelect: function (suggestion) {
      generateIframe(suggestion.data);
    }
  });

});
