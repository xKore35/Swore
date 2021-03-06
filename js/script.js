$(document).ready(function() {
    $.ripple(".items a.item,.ts.button,a.card,.menu a.item", {
        debug: false, // Turn Ripple.js logging on/off
        on: 'mousedown', // The event to trigger a ripple effect

        opacity: 0.4, // The opacity of the ripple
        color: "auto", // Set the background color. If set to "auto", it will use the text color
        multi: true, // Allow multiple ripples per element

        duration: 0.25, // The duration of the ripple

        // Filter function for modifying the speed of the ripple
        rate: function(pxPerSecond) {
            return pxPerSecond;
        },

        easing: 'linear' // The CSS3 easing function of the ripple
    });
    setTimeout("$('.fadeIn').removeClass('fadeIn')", 1000)

    $("a.ts.button[href=\"#login\"").click(function() {
        $("header#welcome").attr('style', `height: 221px !important;
        padding: 5em 2em !important;
        padding-bottom: calc(4em + 48px) !important;
        font-size: 14px;`)
        $("header#welcome .header,header#welcome .description,header#welcome .action").attr('style', 'display: none;')
        $("#intro").attr('style', 'opacity: 0;')

        setTimeout("document.location.href = \"login.html\"", 250)

    });
});

function headerImg() {
    if (window.sessionStorage["headerImg"]) {
        var headerImg = window.sessionStorage["headerImg"]
    } else {
        var perviewImg = Trianglify({
            width: 2560,
            height: 2560,
            stroke_width: 200,
            cell_size: 100,
        });
        var headerImg = perviewImg.png()
        window.sessionStorage["headerImg"] = headerImg
    }
    document.write('<img src="' + headerImg + '">');
}