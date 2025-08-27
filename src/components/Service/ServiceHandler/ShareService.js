import { FaTwitter } from 'react-icons/fa';

function ShareService ({ service }) {
    const url= process.env.REACT_APP_URL

    const stripHtml = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    };

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
        return text.slice(0, maxLength) + '...';
        }
        return text;
    };

    const shareOnTwitter = () => {
        const plainTextContent = stripHtml(service.content);
        const truncatedContent = truncateText(plainTextContent, 100);
        const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            service.title + '\n\n' + 
            truncatedContent + '\n\n' + 
            `Lien du service: ${url}/services/${service._id}`
        )}`;      
        window.open(twitterShareUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className='flex items-center justify-center'>
            <button onClick={shareOnTwitter} className='px-2 py-2'>
                <FaTwitter className="text-2xl sm:text-3xl md:text-4xl" />
            </button>
        </div>
    );
};

export default ShareService;
