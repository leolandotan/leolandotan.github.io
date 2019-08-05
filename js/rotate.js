(function($) {
    if ($('.spritespin').length) {
        var spin = $('.spritespin');
        spin.spritespin({
            // Set a single image url as source
            source: '/images/bike6x6_big.jpg',
            // Define the size of the display.
            width: 480,
            height: 327,
            // Set the total number of frames to show. The 6x6 sprite might contain 36 images
            // but it only has 34 frames, hence we set it to 34 here
            frames: 34,
            // The 6x6 sprite sheet contains 6 frames in one row.
            framesX: 6,
            // reverse interaction direction
            sense: -1,
            animate: false,
            plugins: [
                '360',
                'drag'
            ]
        });


        var api = spin.spritespin("api");

        spin.bind("onLoad.spritespin", function() {
            var data = api.data;
            data.stage.prepend($(".details .detail")); // add current details
            data.stage.find(".detail").hide();         // hide current details
            console.log('onload');
        }).bind("onFrame.spritespin", function() {
            var data = api.data;
            // data.stage.find(".detail:visible").stop(false).fadeOut();
            data.stage.find(".detail:visible").stop(false).hide();
            data.stage.find(".detail.detail-" + data.frame).stop(false).show();
            console.log('onFrame: ' + data.frame);
        });

        $('.detail').hover(
            function () {
                $(this).find('.content').fadeIn();
            },
            function () {
                $(this).find('.content').fadeOut();
            }
            
        );
    }
})(jQuery);
