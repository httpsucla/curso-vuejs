new Vue ({
    el: '#desafio',
    data: {
        nome: 'Paula',
        idade: 21,
        image: "https://res.cloudinary.com/practicaldev/image/fetch/s--L71__yWO--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/z74oqos1984w5g5ah0i9.jpeg"
    },
    methods: {
        random() {
            return Math.random();
        }
    }
})