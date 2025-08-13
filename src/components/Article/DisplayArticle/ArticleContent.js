import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import FavoriteArticleButton from '../ArticleHandler/FavoriteArticleButton';
import ShareArticle from '../ArticleHandler/ShareArticle';
import Vote from '../../../common/Votes/Vote';
import { formatLongDate } from '../../../utils/helpers/date';

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
    <div className="flex flex-col items-center gap-8 p-4 md:p-8">
      <div className="max-w-5xl w-full bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        {article.imageUrl && (
          <div className="w-full h-96 md:h-[600px] overflow-hidden relative">
            <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"/>
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
              <h2 className="text-3xl md:text-5xl font-bold text-white">{article.title}</h2>
              <p className="text-sm md:text-base text-white/80 mt-2">{article.categoryName} • Par {article.pseudo} le {formatLongDate(article)}</p>
            </div>
          </div>
        )}
        <div className="p-6 flex flex-col gap-6">
          <div className="flex flex-wrap gap-2">
            {article.tags?.map((tag, index) => (
              <span key={index} className="px-3 py-1 text-xs md:text-sm font-semibold text-white bg-primary rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <div className="prose prose-sm md:prose-lg text-gray-700 dark:text-gray-200 mt-4">
            {parse(sanitizedContent)}
          </div>
          <div className="flex justify-between items-center mt-6">
            <div className="flex gap-4">
              <FavoriteArticleButton article={article} />
              <ShareArticle article={article} />
            </div>
            <Vote upvotes={articleState.upvotes} downvotes={articleState.downvotes} userVote={articleState.userVote} subject={articleState} type="article"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleContent;
