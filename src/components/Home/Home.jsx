import React from 'react'
import './home.css'
import { useState, useEffect } from 'react' 
import ArticleCard from '../ArticleCard/ArticleCard'
import Hero from './Hero'
import BigArticleCard from '../ArticleCard/BigArticleCard'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import axios from '../../axios'
import { useContext } from 'react'
import { Context } from '../../context/Context'

export default function Home() {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);
    const { user } = useContext(Context);

    const getUserData = () => {
        axios
            .get(`/`, {})
            .then(res => {
                const data = res.data
                    setData(data);
                    setLoader(false);
                    console.log(data);

            })
            .catch((error) => {
                setLoader(false);
                console.log(error)
            })
    };

    useEffect(() => {
        setLoader(true);
        getUserData();
        // setLoader(false);
        // setTimeout(() => {
        //     getUsersData();
        //     setLoader(false);
        // }, 8000);
    }, []);

    return (
        <div className="component-container">
            <Navbar />
            <div>
                {!user ? <Hero /> : null}
                <div className="article-stage">
                    LATEST ARTICLES
                    <hr />
                </div>

                <div className="latest-articles-home">
                    {!loader ? data.map((item, index) => {
                        if (index < 6) {
                            return (
                                <div key={index}>
                                    <ArticleCard
                                        fullArticle={item}
                                        articleIndex={index + 1}
                                    />
                                </div>
                            )
                        }
                        return null;
                    }) : [1, 2, 3, 4, 5, 6].map(loading => (  
                        <div className="loading-latest-articles" key={loading}> 
                            <div className="skeleton-username"></div>
                            <div className="skeleton-title"></div>
                            <div className="skeleton-title"></div>      
                        </div>
                    ))} 
                </div>

                <div className="article-stage">
                    ALL ARTICLES
                    <hr />
                </div>
                <div className="all-articles-home">
                    {!loader ? data.map((item, index) => {
                        if (index > 6) {
                            return (
                                <div key={index}>
                                    <BigArticleCard
                                        fullArticle={item}
                                    />
                                </div>
                            )
                        }
                        return null;
                    }): [1, 2, 3, 4, 5, 6].map(loading => (  
                        <div className="loading-latest-articles" key={loading}> 
                            <div className="skeleton-username"></div>
                            <div className="skeleton-title"></div>
                            <div className="skeleton-title"></div>      
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}
