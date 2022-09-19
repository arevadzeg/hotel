
const config = {
    header: {
        styles: {
            color: '#fff',
            enable: true,
            backgroundColor: '#000',
            fontWeight: 500,
            fontSize: "16px",
            padding: '35px 20px',
        },
        logo: 'https://roomshotels.com/wp-content/themes/roomshotelsv2/img/logo-secondary-white.svg',
        navItems: [
            {
                displayText: 'About us',
                link: '/about'
            },
            {
                displayText: 'Contact',
                link: '/contact'
            },
            {
                displayText: 'Book now',
                link: '/booking'
            },
            {
                displayText: 'Gallery',
                link: '/gallery'
            }
        ]
    },

    productList: {
        backgroundVideo: "https://roomshotels.com/wp-content/uploads/2021/09/Rooms-Tbilisi-1600px_s.mp4",
        styles: {
            postStyles: {
                backgroundColor: "#fff",
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4vw'
            },
            postHeader: {
                fontSize: "25px",
                color: "#000",
                fontWeight: 600,
            },
            postDescription: {
                fontSize: "20px",
                color: "#000",
                fontWeight: 400,
            },
            productsListHeaderStyles: {
                fontSize: "48px",
                color: "#000",
                fontWeight: 400,
                textAlign: 'center',
                margin: '90px'
            }
        },
        productsListHeader: {
            text: 'Original Experiences in Tbilisi',
        },
        list: [
            {
                img: 'https://roomshotels.com/wp-content/uploads/2021/09/rh-tbilisi-kitchen-entrance-1600x1068.webp',
                header: 'Modern Retellings of Old Traditions',
                description: 'The Kitchen represents the latest phase of Rooms Hotel Tbilisi’s culinary journey. Located on the ground floor overlooking the garden, the restaurant reflects the hotel’s signature aesthetic with a blend of traditional and modern design features. Head chef David Legrand, inspired by the world’s hottest spots of culinary, fits his experience with the identity of Rooms Hotel.',
                button: {
                    enable: true,
                    text: 'View The Kitchen',
                    link: '/kitchen'
                }
            },
            {
                img: 'https://roomshotels.com/wp-content/uploads/2021/09/rh-tbilisi-bar-room-cocktail.webp',
                header: 'Bar Room',
                description: 'The Bar and Lounge are Tbilisis most authentic social and meeting spaces during the day, while turning into an inviting evening spot after the dinner',
                button: {
                    enable: false,
                }
            },
            {
                img: 'https://roomshotels.com/wp-content/uploads/2021/09/rh-tbilisi-garden-bar-1600x1068.webp',
                header: 'Garden Bar',
                description: 'The ultimate urban retreat, the Garden Bar lights up the eastern corner of the hotel’s courtyard garden.s',
                button: {
                    enable: false,
                }
            }

        ]
    },


    footer: {

        styles: {
            general: {
                backgroundColor: '#000',
                padding: '55px',
            },
            header: {
                fontSize: "18px",
                color: "#fff",
            },
            footerLink: {
                fontSize: "16px",
                color: "#ddd",
            }
        },
        footerColumns: [
            {
                header: 'DESTINATIONS',
                links: [
                    { text: 'London' },
                    { text: 'Barcelona' },
                    { text: 'New Your' },
                    { text: 'Los angeles' },
                ]
            },
            {
                header: "SOCIAL MEDIA",
                links: [
                    { text: 'Facebook' },
                    { text: 'Instagram' },
                    { text: 'Pinterest' }
                ]
            },

        ]
    }


}






export default config