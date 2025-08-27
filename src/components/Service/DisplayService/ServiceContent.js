import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import parse from 'html-react-parser';
import FavoriteServiceButton from '../ServiceHandler/FavoriteServiceButton';
import ShareService from '../ServiceHandler/ShareService';
import Vote from '../../../common/Votes/Vote';

function ServiceContent({ service }) {
  const [serviceState, setServiceState] = useState(service || {});

  useEffect(() => {
    setServiceState(service);
  }, [service]);

  const sanitizedContent = service.content.replace(
    /<p>\s*(<h1>[^<]*<\/h1>)\s*<\/p>/g,
    '<div>$1</div>'
  );

  return (
    <div className="w-full px-4">
      <div className="flex justify-end mt-8">
        <Link to="/services" className="flex items-center gap-2 text-primary font-semibold hover:underline pb-6 text-sm md:text-base">
          Découvrir nos services
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
      {service.imageUrl && (
        <div className="w-full h-64 sm:h-96 md:h-[500px] lg:h-[600px] xl:h-[800px] overflow-hidden rounded-lg">
          <img src={service.imageUrl} alt={service.title}  className="w-full h-full object-cover"/>
        </div>
      )}
      <div className="mx-auto  mt-6 md:mt-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          {service.title}
        </h1>
        {service.price && (
          <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary mt-2">
            {service.price} €
          </div>
        )}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-4 text-xs sm:text-sm text-gray-500">
          {service.categoryName && (
            <span className="uppercase tracking-wide">{service.categoryName}</span>
          )}
          {service.tags?.map((tag, index) => (
            <span key={index} className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full text-xs sm:text-sm">
              {tag}
            </span>
          ))}
        </div>
        <div className="prose prose-sm sm:prose-base md:prose-lg lg:prose-xl dark:prose-invert mt-6 sm:mt-8 md:mt-10">
          {parse(sanitizedContent || '<p>No content available.</p>')}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-8 md:mt-12 border-t border-gray-200 dark:border-gray-700 pt-4 md:pt-6 gap-4 md:gap-0">
          <div className="flex gap-4">
            <FavoriteServiceButton service={service} />
            <ShareService service={service} />
          </div>
          <Vote upvotes={serviceState.upvotes} downvotes={serviceState.downvotes} userVote={serviceState.userVote} subject={serviceState} type="service"/>
        </div>
      </div>
    </div>
  );
}

export default ServiceContent;
