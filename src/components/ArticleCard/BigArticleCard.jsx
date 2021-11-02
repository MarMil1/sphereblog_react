import React from 'react'
import './bigArticleCard.css'
import parseArticleDate from '../../Helpers/parseArticleDate'
import { Link } from 'react-router-dom'

export default function BigArticleCard(props) {
    return (
        <div className="big-article-card-container">
            <BigSingleArticle
                fullArticle={props.fullArticle}
            />
        </div>
    )
}

function BigSingleArticle(props) {
    const truncateArticleBody = (body) => {
        return body.substring(0, 140) + ' . . .';
    }

    return (
        <>
            <Link className="link" to={`/article/${props.fullArticle.articleInfo.id}`}>
                <div className="big-single-article-container">
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
                    <div className="article-card-body">
                        {truncateArticleBody(props.fullArticle.articleInfo.body)}
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
            </Link>
        </>
    )
}
