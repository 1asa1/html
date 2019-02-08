


$(function() {
    $('#main').pagepiling({
        menu: '#nav',
        sectionSelector: '.section',
        sectionsColor: ['#fff', '#ffe0e0', '#ffc0d0', '#ffe0e0','#fff'],
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        navigation: {
            'textColor': '#fff',
            'bulletsColor': '#ff5d85',
            'position': 'right',
            'tooltips': ['top', 'profile', 'skill', 'works', 'contact']
        },
    });
});

$(function() {
	$('[data-fancybox]').fancybox();
});