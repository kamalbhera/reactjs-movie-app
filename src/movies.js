const movies = [
    {
        id: '1',
        title: 'Oceans 8',
        category: 'Comedy',
        likes: 4,
        dislikes: 1,
        image: 'https://www.unautreblog.com/wp-content/uploads/2018/07/Oceans8_01.jpg'
    }, {
        id: '2',
        title: 'Midnight Sun',
        category: 'Comedy',
        likes: 2,
        dislikes: 0,
        image: 'https://juju.b-cdn.net/wp-content/uploads/2018/05/Midnight-Sun-movie-Age-Rating-Midnight-Sun-Movie-2018-Poster-Images-wallpaper-pictures.jpg'
    }, {
        id: '3',
        title: 'Les indestructibles 2',
        category: 'Animation',
        likes: 3,
        dislikes: 1,
        image: 'https://freakingeek.com/wp-content/uploads/2018/07/LesIndestructibles2-800x445.jpg'
    }, {
        id: '4',
        title: 'Sans un bruit',
        category: 'Thriller',
        likes: 6,
        dislikes: 6,
        image: 'https://i0.wp.com/www.artscommented.com/wp-content/uploads/2018/04/A-Quiet-Place-Poster.jpg?fit=656%2C343&ssl=1'
    }, {
        id: '5',
        title: 'Creed II',
        category: 'Drame',
        likes: 16,
        dislikes: 2,
        image: 'https://freakingeek.com/wp-content/uploads/2016/04/Creed-800x445.jpg'
    }, {
        id: '6',
        title: 'Pulp Fiction',
        category: 'Thriller',
        likes: 11,
        dislikes: 3,
        image: 'http://img.over-blog-kiwi.com/1/52/77/47/20160518/ob_371590_thumbnail-poster-color-pulpfiction-11r.jpg'
    }, {
        id: '7',
        title: 'Pulp Fiction',
        category: 'Thriller',
        likes: 12333,
        dislikes: 32,
        image: 'http://img.over-blog-kiwi.com/1/52/77/47/20160518/ob_371590_thumbnail-poster-color-pulpfiction-11r.jpg'
    }, {
        id: '8',
        title: 'Seven',
        category: 'Thriller',
        likes: 2,
        dislikes: 1,
        image: 'https://c4.wallpaperflare.com/wallpaper/421/865/183/movie-se7en-brad-pitt-wallpaper-preview.jpg'
    }, {
        id: '9',
        title: 'Inception',
        category: 'Thriller',
        likes: 2,
        dislikes: 1,
        image: 'https://s2.dmcdn.net/v/A-IMF1LpNTlSj0SR4/x1080'
    }, {
        id: '10',
        title: 'Gone Girl',
        category: 'Thriller',
        likes: 22,
        dislikes: 12,
        image: 'https://wallpaperaccess.com/full/3510932.jpg'
    },
]

export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))