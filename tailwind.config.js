/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["index.html"],
    theme: {
        extend: {
            colors: {
                background: '#FAF3F2',
                red: {
                    '50': '#fef3f2',
                    '100': '#ffe2e1',
                    '200': '#ffcbc8',
                    '300': '#ffa7a2',
                    '400': '#fd736c',
                    '500': '#f43127',
                    '600': '#B50B04',
                    '700': '#bf1e16',
                    '800': '#9e1d16',
                    '900': '#831e19',
                },
                yellow: {
                    '50': '#fff8eb',
                    '100': '#fdebc8',
                    '200': '#fad58d',
                    '300': '#f8ba51',
                    '400': '#f59a1b',
                    '500': '#ef7e11',
                    '600': '#d45b0b',
                    '700': '#b03d0d',
                    '800': '#8f3011',
                    '900': '#752812',
                },
                beige: {
                    '50': '#fdf6ef',
                    '100': '#fae2cb',
                    '200': '#f7d0b1',
                    '300': '#f1b180',
                    '400': '#ea874d',
                    '500': '#e5682a',
                    '600': '#d74f1f',
                    '700': '#b23c1c',
                    '800': '#8e311e',
                    '900': '#732b1b',
                },
                brown: {
                    '50': '#fefbec',
                    '100': '#fbf5ca',
                    '200': '#f6ea91',
                    '300': '#f2d957',
                    '400': '#eec731',
                    '500': '#e7aa19',
                    '600': '#cd8412',
                    '700': '#aa5f13',
                    '800': '#8a4b16',
                    '900': '#3b200b',
                },
                'title-black-38': '#1D0605',
                'title-black-87': '#34201F',
                'title-black-60': '#635352',
            },
            fontFamily: {
                lato: ['Lato', 'sans-serif'],
                'lilita-one': ['Lilita One', 'sans-serif']
            },
            backgroundImage: {
                'banner-promotion': "url('/assets/images/banners/banner-promotion.svg')",
                'banner-promotion-mobile': "url('/assets/images/banners/banner-promotion-mobile.svg')",
                'banner-menu': "url('/assets/images/banners/banner-menu.svg')",
                'banner-menu-mobile': "url('/assets/images/banners/banner-menu-mobile.svg')",
                'burger-prime': "url('/assets/images/offers/burger-prime.svg')",
                'batata': "url('/assets/images/offers/batata.svg')",
                'sorvete': "url('/assets/images/offers/sorvete.svg')",
            },
            flex: {
                '3': '3 3 0%'
            }
        },
    },
    plugins: [],
}