import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

export const formatLongDate = (article) => {
    return format(new Date(article.createdAt), 'd MMMM yyyy', { locale: fr })
} 

export const formatNumericDate = (date) => {
    return date.toLocaleDateString('fr-FR', {day: '2-digit', month: '2-digit', year: 'numeric',});
}