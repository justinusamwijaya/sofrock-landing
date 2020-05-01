const Nations = {
    options: ['id', 'eng'],
    id: {
        icon: '/flags/id.svg',
        label: 'ID'
    },
    eng: {
        icon: '/flags/eng.svg',
        label: 'ENG'
    },
}

const Sentences = {
    eng: {
        aboutUs: [
            {
                title: 'Your Solution to Efficiency',
                content: `Sofrock is a solution and a service provider created for your business.
                We enlarge your current systems using the power computers and automation.
                We want you to have the most efficient ways for the best results.`,
                imgName: 'about_us.jpg'
            },
            {
                content: `Starting in 2020, we are working on systems involves Warehousing, POS, Human Resources, and Marketing. 
                We understand that each company are unique and we provide custom system towards your uniqueness value.`
            }, 
            {
                title: 'Our Vision',
                content: `Become powerhouse for industry automation pioneer and succeed in empowering Small-Medium Enterprise around ASEAN`,
                imgName: 'about_us_2.jpg'
            },
            {
                title: 'Why sofrock?',
                content: `We keep moving forward for the new technology implementation and innovative development. We provide free consultation and demonstration at your place. We also give you a one-year warranty, product training and direct support. All of our products are customizable and configurable.`
            }
        ],
        contact: {
            title: 'Contact Us',
            contacts: [
                {
                    address: 'Jl. Puspa Cempaka Timur 3 Blok B4 No. 10 RT 001 / RW 015, Komplek Graha Puspa, Bandung Barat, Jawa Barat, 40391, Indonesia',
                    email: 'sofrock.tech@gmail.com',
                    number: '+62 821 480 57578',
                    image:null,
                }, 
            ]
        },
        notFound: {
            msg: `Your requested page is not found!`
        },
        slogans: [
            'Boost your efficiency.',
            'Automate your system.',
            'Improve your productivity.',
            'Limit your operational error.',
        ],
        welcome: 'Welcome to sofrock!',
        menus: {
            about: 'About',
            // products: 'Products',
            contact: 'Contact Us'
        },
        footerMenu: {
            menuList: ['about', 'contact'],
            about: {
                name: 'About Us',
                children: [{
                        name: 'Introduction',
                        sideIcon: null,
                        href: '/about'
                    }, 
                    // {
                    //     name: 'Products',
                    //     sideIcon: null,
                    //     href: '/products'
                    // }
                ]
            },
            contact: {
                name: 'Contact Us',
                children: [{
                        name: 'Jl. Puspa Cempaka Timur 3 Blok B4 No. 10 RT 001 / RW 015, Komplek Graha Puspa, Bandung Barat, Jawa Barat, 40391, Indonesia',
                        sideIcon: null,
                        href: null
                    }, {
                        name: 'sofrock.tech@gmail.com',
                        sideIcon: null,
                        href: null
                    }, {
                        name: '+62 821 480 57578',
                        sideIcon: null,
                        href: null
                    }
                ]
            }
        },
    },
    id: {
        aboutUs: [
            {
                title: 'Solusi Efisiensi Anda',
                content: `Sofrock adalah solusi dan jasa yang disediakan untuk menjawab permasalahan bisnis anda.
                Kami membantu untuk memperbesar sistem anda melalui komputer dan automasi.
                Kami ingin anda memiliki cara paling efisien dan mendapat hasil yang terbaik.`,
                imgName: 'about_us.jpg'
            },
            {
                content: `Pada 2020, Kami merancang sistem dalam bidang Warehousing, POS, Human Resources, dan Marketing. 
                Kami mengerti bahwa setiap perusahaan unik dan kami menyediakan sistem yang dapat beradaptasi dengan perusahaan anda.`
            }, 
            {
                title: 'Visi Kami',
                content: `Menjadi powerhouse otomasi industri dan memperkuat usaha menengah kebawah dalam kisaran ASEAN`,
                imgName: 'about_us_2.jpg'
            },
            {
                title: 'Mengapa sofrock?',
                content: `Kami terus berjalan untuk implementasi teknologi dan inovasi sistem. Kami menyediakan konsultasi gratis dan demonstrasi pada tempat anda. Kami juga memberikan garansi 1-tahun, support, dan juga pelatihan sistem. Semua produk kami dapat di kostumisasi sesuai dengan kebutuhan anda.`
            }
        ],
        contact: {
            title: 'Kontak Kami',
            contacts: [
                {
                    address: 'Jl. Puspa Cempaka Timur 3 Blok B4 No. 10 RT 001 / RW 015, Komplek Graha Puspa, Bandung Barat, Jawa Barat, 40391, Indonesia',
                    email: 'sofrock.tech@gmail.com',
                    number: '+62 821 480 57578',
                    image:null,
                }, 
            ]
        },
        notFound: {
            msg: `Page tidak ditemukan!`
        },
        slogans: [
            'Tingkatkan efisiensi-mu.',
            'Tingkatkan produktivitas-mu.',
            'Tingkatkan kinerja-mu.',
        ],
        welcome: 'Selamat Datang di sofrock!',
        menus: {
            about: 'Tentang Kami',
            // products: 'Produk',
            contact: 'Hubungi'
        },
        footerMenu: {
            menuList: ['about', 'contact'],
            about: {
                name: 'Tentang Kami',
                children: [{
                        name: 'Perkenalan',
                        sideIcon: null,
                        href: '/about'
                    }, 
                    // {
                    //     name: 'Produk',
                    //     sideIcon: null,
                    //     href: '/products'
                    // }
                ]
            },
            contact: {
                name: 'Hubungi Kami',
                children: [{
                        name: 'Jl. Puspa Cempaka Timur 3 Blok B4 No. 10 RT 001 / RW 015, Komplek Graha Puspa, Bandung Barat, Jawa Barat, 40391, Indonesia',
                        sideIcon: null,
                        href: null
                    }, {
                        name: 'sofrock.tech@gmail.com',
                        sideIcon: null,
                        href: null
                    }, {
                        name: '+62 821 480 57578',
                        sideIcon: null,
                        href: null
                    }
                ]
            }
        },
    },
}

export {
    Sentences,
    Nations
}