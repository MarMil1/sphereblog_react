import React from 'react';
import { Link } from 'react-router-dom';
import './articleCard.css';
import parseArticleDate from '../../Helpers/parseArticleDate';

export default function ArticleCard(props) {
    return (
        <>
            <div className="article-card-container">
                <SingleArticle
                    fullArticle={props.fullArticle}
                    articleIndex={props.articleIndex}
                />
            </div>
        </>
    )
}

function SingleArticle(props) {
    return (
        <> 
            <Link className="link" to={`/article/${props.fullArticle.articleInfo.id}`}>
                <div className="with-numbered-item">
                    <div className="item-number">
                        {props.articleIndex}
                    </div>
                    <div className="article-card-newest-articles">
                        <div className="article-card-img-name">
                            <div className="article-card-img">
                            </div>
                            <div className="article-card-name">
                                {props.fullArticle.userInfo[0].username}
                            </div>
                        </div>
                        <div className="article-card-title">
                            {props.fullArticle.articleInfo.title}
                        </div>
                        <div className="article-card-info">
                            <div className="article-card-item">
                                {parseArticleDate(props.fullArticle.articleInfo.created_at)}
                            </div>
                            •
                            <div className="article-card-item">
                                <i className="far fa-comments space"></i>
                                {props.fullArticle.userComments.length}
                            </div>
                            •
                            <div className="article-card-item">
                                <i className="fas fa-book-reader space"></i>
                                125
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}
