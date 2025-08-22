import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const socialMediaLinks = () => {
    return [
        { href: 'https://facebook.com', icon: faFacebookF, aria: "Lien facebook"},
        { href: 'https://twitter.com', icon: faTwitter, aria: "Lien twitter" },
        { href: 'https://instagram.com', icon: faInstagram, aria: "Lien instagram"},
    ]
};