;(function($){
    $(document).ready(function () {
        var $draggables = $(".dr").draggabilly({
            containement: true
//            grid:[10,10]
        });

        $draggables.on('dragStart',function(){
            $("#banner_download").hide();
        });

        $('.prepare').on('click', function (e) {
            var s = $(window).scrollTop();
            e.preventDefault();
            html2canvas($("#canvas")[0], {
                onrendered: function (canvas) {
                    $(".download").attr("href", canvas.toDataURL("image/jpeg", 1.0));
                    $(window).scrollTop(s);
                    $("#banner_download").show();
                }
            });

        });

        $("#title_text").on("input propertychange", function () {
            $("#title").html($(this).val());
        });
        $("#title_width").on("input propertychange", function () {
            $("#title").width($(this).val());
        });
        $("#title_height").on("input propertychange", function () {
            $("#title").height($(this).val());
        });
        $("#title_fontsize").on("input propertychange", function () {
            $("#title").css("font-size", $(this).val());
        });

        $("#title_alignment").on("change", function () {
            $("#title").css("text-align", $(this).val());
        });
        $("#title_lh").on("input propertychange", function () {
            $("#title").css("line-height", $(this).val());
        });
        $("#title_color").on("change", function () {
            $("#title").css("color", $(this).val());
        });

        $("#title_font").on("input propertychange", function () {
            $("#title").css("font-family", $(this).val());
        });

        $("#paragraph_text").on("input propertychange", function () {
            $("#para").html($(this).val());
        });
        $("#paragraph_width").on("input propertychange", function () {
            $("#para").width($(this).val());
        });
        $("#paragraph_height").on("input propertychange", function () {
            $("#para").height($(this).val());
        });

        $("#paragraph_fontsize").on("input propertychange", function () {
            $("#para").css("font-size", $(this).val());
        });

        $("#paragraph_alignment").on("change", function () {
            $("#para").css("text-align", $(this).val());
        });

        $("#paragraph_lh").on("input propertychange", function () {
            $("#para").css("line-height", $(this).val());
        });

        $("#paragraph_color").on("change", function () {
            $("#para").css("color", $(this).val());
        });

        $("#paragraph_font").on("input propertychange", function () {
            $("#para").css("font-family", $(this).val());
        });


        $("#canvas_width").on("input propertychange", function () {
            $("#canvas").width($(this).val());
        });

        $("#canvas_height").on("input propertychange", function () {
            $("#canvas").height($(this).val());
        });
        $("#canvas_src").on("input propertychange", function () {
            var imageurl = $(this).val().replace(/http[s]?:\/\//gi,"/images/");

            $("#canvas").css("background", "url(" + imageurl + ")");
            $("#canvas").css("background-size", "cover");
        });

        $("#icon_width").on("input propertychange", function () {
            $("#icon").width($(this).val());
        });
        $("#icon_height").on("input propertychange", function () {
            $("#icon").height($(this).val());
        });

        $("#icon_src").on("input propertychange", function () {
            var iconsrc = $(this).val().replace(/http[s]?:\/\//gi,"/images/");
            $("#icon").attr("src", iconsrc);
        });

        $("#hide_icon").on("click", function () {
            $("#icon").toggle();
        });


        $("#overlay_color").on("input propertychange", function () {
            $(".overlay").css("background-color",$(this).val());
        });

        $("#overlay_opacity").on("input propertychange", function () {
            $(".overlay").css("opacity",$(this).val());
        });


        $("input, select").on("input propertychange",function(){
            $("#banner_download").hide();
        });


    });
})(jQuery);
