var banner = [
["https://www.behance.net/gallery/60397651/Banking-Ads", "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2f592860397651.5a4bc425a04da.jpg"],
["https://www.behance.net/gallery/60397651/Banking-Ads", "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/70d18660397651.5a4bc386dde23.jpg"],
["https://www.behance.net/gallery/60397651/Banking-Ads", "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e7dce560397651.5a4bc386dda65.jpg"]
];
function shuffle(a) {
   var j, x, i;
   for (i = a.length - 1; i > 0; i--) {
       j = Math.floor(Math.random() * (i + 1));
       x = a[i];
       a[i] = a[j];
       a[j] = x;
       
    }
    return a;
    
}
shuffle(banner);
document.getElementById('ad-container').innerHTML = '<a href="'+banner[0][0]+'" target="_blank" rel="nofollow"><img src="'+banner[0][1]+'" height="250" width="300" alt="300x250 Banner Ad" /></a>';

