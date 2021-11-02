import React from 'react'
import './articleSettings.css'

export default function ArticleSettings() {
    return (
        <div className="article-settings">
            <div className="share-article-button">
                <i className="fas fa-share-alt hover-font-awesome-icon"></i>
            </div>
            <div className="archive-article-button">
                <i className="far fa-bookmark hover-font-awesome-icon"></i>
            </div>
            <div className="article-more-options">
                <i className="fas fa-ellipsis-h hover-font-awesome-icon"></i>
            </div>
        </div>
    )
}
