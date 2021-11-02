import React from 'react'
import './singleArticleComponent.css'
import axios from '../../axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import ArticleSettings from './ArticleSettings';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import parseArticleDate from '../../Helpers/parseArticleDate';

export default function SingleArticleComponent() {
    const [loader, setLoader] = useState(false);
    const location = useLocation();
    const path = location.pathname.split('/')[2];
    const [title, setTitle] = useState('');
    const [username, setUsername] = useState('');
    const [articleDate, setArticleDate] = useState('');
    const [articleBody, setArticleBody] = useState('');
    const [articleCommentsNumber, setArticleCommentsNumber] = useState('');
    const [articleBodyLength, setArticleBodyLength] = useState();

    useEffect(() => {
        setLoader(true);
        const getArticle = async () => {
            const response = await axios.get('/articles/' + path);
            setTitle(response.data.article.title);
            setUsername(response.data.user[0].username);
            setArticleDate(response.data.article.created_at);
            setArticleBody(response.data.article.body);
            setArticleCommentsNumber(response.data.comments.length);
            setArticleBodyLength(response.data.article.body.length);
            setLoader(false);
            console.log("DATAAAAA", response)
        }
        getArticle();
    }, [path]);
    
    return (
        <div className="component-container">
            <Navbar />
            <div className="single-article-component-container">
                {loader ? 
                    <div className="single-article-skeleton-loader">
                        <div className="single-article-skeleton-title"></div>
                        <div className="single-article-skeleton-body"></div>
                        <div className="single-article-skeleton-username"></div>
                    </div>
                : 
                <div className="article-header-body">
                    <div className="article-title">
                        {title}
                    </div>
                    <div className="article-header">
                        <div className="article-info">
                            <div className="user-img"></div>
                            <div className="user-name-article-date">
                                <div className="article-user-name">
                                    {username}
                                </div>
                                <div className="article-date">
                                    {parseArticleDate(articleDate)}
                                </div>
                            </div>
                        </div>
                        <ArticleSettings />
                    </div>
                    <div className="article-body">
                        {articleBody}
                    </div>
                    <div className="article-footer">
                        <div className="article-footer-left">
                            <div className="article-likes">
                                <i className="far fa-thumbs-up hover-font-awesome-icon"></i>
                                10
                            </div>
                            <div className="article-comments">
                                <i className="far fa-comments hover-font-awesome-icon"></i>
                                {articleCommentsNumber}
                            </div>
                        </div>
                        <div className="article-footer-right">
                            {articleBodyLength > 2000 ? <ArticleSettings /> : null}
                        </div>
                    </div>
                    <hr />
                    
                    <div className="article-info info-space">
                        <div className="user-img"></div>
                        <div className="user-name-article-date">
                            <div className="article-written-by">Written by</div>
                            <div className="article-user-name">
                                {username}
                            </div>
                        </div>
                    </div>
                </div>}
                {articleBodyLength}
            </div>
            <Footer />
        </div>
    )
}
