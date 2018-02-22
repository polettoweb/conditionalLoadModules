function createCarousel(element) {
    console.log('success!');

    const jcarousel = $('.ui-carousel--responsive .jcarousel');

    jcarousel.on('jcarousel:reload jcarousel:create', function () {
        var carousel = $(this),
            containerWidth = carousel.innerWidth(),
            itemWidth,
            itemsPerPage;

        /*
            Change the number of visible carousel items based
            on the window width.
            */

        if (containerWidth >= 512) {
            itemWidth = containerWidth / 4;
            itemsPerPage = 4;
        } else if (containerWidth >= 350) {
            itemWidth = containerWidth / 3;
            itemsPerPage = 3;
        } else if (containerWidth >= 250) {
            itemWidth = containerWidth / 2;
            itemsPerPage = 2;
        }

        if(itemsPerPage < carousel.jcarousel('items').length) {
            //Items are off-screen - show controls.
            jcarousel.removeClass('hide-controls');
        } else {
            //All carousel items visible - hide controls.
            jcarousel.addClass('hide-controls');
        }

        carousel.jcarousel('items').css('width', Math.ceil(itemWidth) + 'px');
    });

    $('.ui-carousel--hor .jcarousel').jcarousel({
        wrap: 'both'
    });

    // Expect to fire on page load
    $('.ui-carousel--vert .jcarousel').jcarousel({
        vertical: true
    });

    $('.ui-carousel--hor .jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.ui-carousel--hor .jcarousel-next').jcarouselControl({
        target: '+=1'
    });

    $('.ui-carousel--vert .jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.ui-carousel--vert  .jcarousel-next').jcarouselControl({
        target: '+=1'
    });

    if($('.jcarousel-pagination')) {
        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function () {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function () {
                $(this).removeClass('active');
            })
            .jcarouselPagination({
                item: function (page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
    }
}

export default createCarousel;