let vm = new Vue({
    el: '#vueapp',
    data: {
        isSingle: false,
        posts: '',
        post: '',
    },
    methods: {
        showPost: function( post ) {
            this.post = post;
            this.isSingle = true;
        },
        showPosts: function () {
            this.isSingle = false;
        },
    },
    created: function () {
        console.log( jsforwp_vars.site_url );
        let posts = this.$http.get( jsforwp_vars.site_url + '/wp-json/wp/v2/posts?per_page=3').then(response => {

            // get body data
            // console.log( response.body );
            this.posts = response.body;

        }, response => {
            // error callback
        });
    }
});
