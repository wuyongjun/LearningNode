jQuery(function($){

  // Create variables (in this scope) to hold the API and image size
  var jcrop_api,
      boundx,
      boundy,

      // Grab some information about the preview pane
      $preview = $('#preview-pane'),
      $pcnt = $('#preview-pane .preview-container'),
      $pimg = $('#preview-pane .preview-container img'),

      xsize = $pcnt.width(),
      ysize = $pcnt.height();
  
  console.log('init',[xsize,ysize]);
  $('#target').Jcrop({
    onChange: updatePreview,
    onSelect: updatePreview,
    aspectRatio: xsize / ysize
  },function(){
    // Use the API to get the real image size
    var bounds = this.getBounds();
    boundx = bounds[0];
    boundy = bounds[1];
    // Store the API in the jcrop_api variable
    jcrop_api = this;

    // Move the preview into the jcrop container for css positioning
    $preview.appendTo(jcrop_api.ui.holder);
  });

  function updatePreview(c)
  {
    if (parseInt(c.w) > 0)
    {
      var rx = xsize / c.w;
      var ry = ysize / c.h;

      var width = Math.round(rx * boundx),
          height = Math.round(ry * boundy),
          ml = Math.round(rx * c.x),
          mt = Math.round(ry * c.y);

      $pimg.css({
        width: width + 'px',
        height: height + 'px',
        marginLeft: '-' + ml + 'px',
        marginTop: '-' + mt + 'px'
      });

      $('h1').html(width + ' | ' + height + ' | ' + ml + ' | ' + mt); 
    }
  };

  $('input').click(function () {
    let oDiv = $('.jcrop-holder>div:first');
    let name = $('#target').attr('data-name');
    let w = parseInt(oDiv.css('width'));
    let h = parseInt(oDiv.css('height'));
    let l = parseInt(oDiv.css('left'));
    let t = parseInt(oDiv.css('top'));
    // alert(w + ' | ' + h + ' | ' + l + ' | ' + t + ' | ' + name);
    $.get('/docrop', {
      name, w, h, l, t
    }, function (result) {
      console.log(result);
    });
  });
});