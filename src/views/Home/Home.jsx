import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import logo from './Saamtv_logo.avif';
import dotenv from "dotenv";
import hamburger from './menu.png';
import NewsArticles from "./../../components/NewsArticals/NewsArticals"

function Home() {
    const [news, setNews] = useState([]);
    const [search, setSearch] = useState('pune');

    const loadNews = async () => {
        try {
            const res = await axios.get(`https://newsapi.org/v2/everything?q=${search}&from=2024-07-18&to=2024-07-18&sortBy=popularity&apiKey=502c7de671af4b13b8fdf719f38e0028`);
            setNews(res.data.articles);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };

    useEffect(() => {
        loadNews();
    }, []);

    useEffect(() => {
        loadNews();
    }, [search]);

    return (
        <>
            <img src={logo} alt="Logo" className='logo' />

            <div className='navbar'>
                <img src={hamburger} alt="Menu" className='menu' />
                <div className='headings'>
                    <p>Breaking News</p>
                    <p>Top Headlines</p>
                    <p>Live TV</p>
                    <p>Maharashtra</p>
                    <p>Lifestyle</p>
                    <p>Business</p>
                    <p>Viral News</p>
                </div>
                <input
                    type="text"
                    className='search-box'
                    placeholder='Search'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className='breaking'>
                <h1 className='breakingtag'>Breaking News</h1>
                <marquee behavior="infinite" direction="left" className='tagline'>
                    The Microsoft Windows 'Glitch' Is Actually A Warning For Today's Tech |
                    Porsche crash: Transfer Pune top cop immediately, retired IA .. |
                    Mumbai: BMC records 11 rain-related complaints amid heavy rains on Saturday |
                    Sensible people should take cognisance: Sharad Pawar on RSS chief’s ‘superman’ remarks |
                    Mother to trainee IAS officer, homeopath and aspiring politician — who is Manorama Khedkar?
                </marquee>
            </div>
            <div className='news-articles'>
                {news.map((newsArticle, index) => {
                    const { author, title, description, url, urlToImage, publishedAt, content } = newsArticle;
                    return (
                        <NewsArticles
                            key={index}
                            title={title || 'No title'}
                            description={description || 'No description'}
                            url={url}
                            urlToImage={urlToImage || 'default_image_url_here'}
                            author={author || 'Unknown'}
                            publishedAt={publishedAt || 'Unknown'}
                            content={content || 'No content'}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default Home;
