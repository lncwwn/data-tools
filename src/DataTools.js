/**
 * DataTools provides export capability.
 * @author victor li
 * @date 2015/03/04
 * @version 0.0.1
 */
;var DataTools = (function(window, $, undefined) {

    // default setting
    var _config = {

        flashPath: '',
        fileName: 'down.txt'

    };

    // _flashState is false by default,
    // its value will be set to true after flash ready
    var _flashState = false;

    function DataTools(config) {

        this.config = $.extend(_config, config);
        init(this.config);

    };

    // class name of export button
    var CLASS_NAME = '.js-export-btn';

    var DIV_HTML = '<div id="js-data-tools" style="position: absolute; width: 0; height: 0; z-index: 99999;"></div>';

    var EMBED_HTML = '<embed width="0" height="0" quality="high" bgcolor="#ffffff" '
                    + 'name="fs-data-tools" id="fs-data-tools" wmode="transparent" '
                    + 'allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" '
                    + 'pluginspage="http://www.macromedia.com/go/getflashplayer" />';

    function init(config) {

        _initFlash(config.flashPath);

        var _id = setInterval(function() {
            _checkState(_id, config);

        }, 100);

    };

    function _initFlash(flashPath) {

        var cover = $(DIV_HTML),
            flash = $(EMBED_HTML).attr('src', flashPath);

        $('body').append(cover.append(flash));

    };

    // make button as flash button
    var _initButton = function(x, y, w, h) {
        var cover = $('#js-data-tools'),
            flash = $('#fs-data-tools');

        var style = {'width': w, 'height': h};
        cover.css(style).css({'left': x, 'top': y});
        flash.css(style);

    };

    // make button as flash button
    function _initButton(x, y, w, h) {

        var cover = $('#js-data-tools'),
            flash = $('#fs-data-tools');

        var style = {'position': 'absolute', 'z-index': '99999', 'width': w, 'height': h};
        cover.css(style).css({'left': x, 'top': y});
        flash.css(style);

    };

    // for flash call
    window.setState = function() {

        console.log(_flashState);
        _flashState = true;
        console.log(_flashState);

    };
    window.setState = setState;

    // check whether the flash ready
    function _checkState(id, config) {

        if (_flashState) {
            //var flash = $('#fs-data-tools');
            var flash = document.getElementById('fs-data-tools');
            flash.setFileName(config.fileName);
            flash.setData('dfddsdefdgfd,当计算机尝试读取,多个字节的时候,问题就出现gfdwgfdfd,dfdssfsd');
            clearInterval(id);
        }

    };


    $(CLASS_NAME).unbind('mouseover');
    $(CLASS_NAME).unbind('click');

    $('body').on('mouseover', CLASS_NAME, function(e) {
        _initButton(e.target.offsetLeft, e.target.offsetTop, e.target.clientWidth, e.target.clientHeight);
    });

    return DataTools;

})(window, jQuery);
