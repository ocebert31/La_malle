import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import parse from 'html-react-parser';
import FavoriteArticleButton from '../ArticleHandler/FavoriteArticleButton';
import ShareArticle from '../ArticleHandler/ShareArticle';
import Vote from '../../../common/Votes/Vote';

function ArticleContent({ article }) {
  const [articleState, setArticleState] = useState(article || {});

  useEffect(() => {
    setArticleState(article);
  }, [article]);

  const sanitizedContent = article.content.replace(
    /<p>\s*(<h1>[^<]*<\/h1>)\s*<\/p>/g,
    '<div>$1</div>'
  );

  return (
    <div className="w-full">
      <div className="flex justify-end mt-8">
        <Link to="/services" className="flex items-center gap-2 text-primary font-semibold hover:underline pb-10">
          Découvrir nos services
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
      {article.imageUrl && (
        <div className="w-full h-[800px] overflow-hidden">
          <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover"/>
        </div>
      )}
      <div className="mx-auto px-4 md:px-0">
        <h1 className="text-4xl md:text-5xl font-bold mt-8 leading-tight">
          {article.title}
        </h1>
        {article.price && (
          <div className="text-xl font-bold text-primary mt-2">
            {article.price} €
          </div>
        )}
        <div className="flex flex-wrap items-center gap-3 mt-4 text-sm text-gray-500">
          {article.categoryName && (
            <span className="uppercase tracking-wide">{article.categoryName}</span>
          )}
          {article.tags?.map((tag, index) => (
            <span key={index} className="px-2 py-0.5 bg-gray-200 text-gray-700 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>
        <div className="prose prose-lg dark:prose-invert mt-8">
          {parse(sanitizedContent)}
        </div>
        <div className="flex justify-between items-center mt-12 border-t border-gray-200 pt-6">
          <div className="flex gap-4">
            <FavoriteArticleButton article={article} />
            <ShareArticle article={article} />
          </div>
          <Vote upvotes={articleState.upvotes} downvotes={articleState.downvotes} userVote={articleState.userVote} subject={articleState} type="article"/>
        </div>
      </div>
    </div>
  );
}

export default ArticleContent;
