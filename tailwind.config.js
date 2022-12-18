/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["index.html"],
    theme: {
        extend: {
            colors: {
                'background': '#FAF3F2',
                'red': '#F43127',
                'yellow': '#f59a1b',
                'yellow-hover': '#F6A431',
                'beige': '#fae2cb',
                'brown': '#3b200b',
                'title-black-38': 'rgba(40, 0, 3, 0.925)',
                'title-black-87': '#34201F',
                'title-black-60': '#635352',
            },
            fontFamily: {
                'lato': ['Lato', 'sans-serif'],
                'lilita-one': ['Lilita One', 'sans-serif']
            },
            backgroundImage: {
                'banner-promotion': "url('/assets/images/banners/banner-promotion.webp')",
                'banner-promotion-mobile': "url('/assets/images/banners/banner-promotion-mobile.webp')",
                'banner-menu': "url('/assets/images/banners/banner-menu.webp')",
                'banner-menu-mobile': "url('/assets/images/banners/banner-menu-mobile.webp')"
            },
            flex: {
                '3': '3 3 0%'
            }
        },
    },
    plugins: [],
}