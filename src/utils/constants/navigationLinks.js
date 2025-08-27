import { faGear, faPenToSquare, faStar, faHouse, faTableColumns, faHandshake, faPhone } from '@fortawesome/free-solid-svg-icons';

export const navigationLinks = (user) => {
    return [
        { to: '/', label: 'A propos', icon: faHouse },
        { to: '/services', label: 'Préstations', icon: faHandshake },
        { to: '/profile', label: 'Paramètres', icon: faGear },
        { to: '/services/new', label: 'Ajouter une préstation', icon: faPenToSquare, show: user && user.role !== 'reader' },
        { to: '/dashboard', label: 'Dashboard', icon: faTableColumns, show: user && user.role === 'admin' },
        { to: '/favorites', label: 'Favoris', icon: faStar },
        { to: '/contact', label: 'Contact', icon: faPhone },
    ]
};