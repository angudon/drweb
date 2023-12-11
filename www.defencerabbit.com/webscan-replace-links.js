$( document ).ready(function() {
    $('a').each(function(i,link){
        var reg = /(https:\/\/webscan.upguard.com\/)(.*)/
        var newlink = link.href.replace(reg, 'https://www.upguard.com/$2')
        link.href = newlink;

        reg = /(https:\/\/app.upguard.com\/webscan\/)(.*)/
        newlink = link.href.replace(reg, 'https://www.upguard.com/$2')
        link.href = newlink;

        reg = /(https:\/\/app.upguard.com\/)(.*)/
        newlink = link.href.replace(reg, 'https://www.upguard.com/$2')
        link.href = newlink;

    });
});