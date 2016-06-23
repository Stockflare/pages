$(document).ready(function() {
  $('.reveal').click(function() {
    $('header').toggleClass('revealed');
  });

  function generateIframe(ric) {
    var src = 'https://widget-api.stockflare.com/?ric=' + ric;
    var iframe = '<iframe height="800" class="widget" src="' + src + '"></iframe>'
    var code = '<iframe height="800" src="' + src + '"></iframe>'
    $('.iframe')
      .html(iframe)
      .show();

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

  var $spinner = $('.spinner');

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
            return { value: item.short_name, data: item.ric };
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
