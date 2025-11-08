import React, { useState, useEffect } from "react";
import "./Blog.css";
import { img } from "framer-motion/client";


const Blog = () => {
    const [categories, setCategories] = useState([]);
    const [postsByCategory, setPostsByCategory] = useState({});

    useEffect(() => {
        // 1. Fetch categories
        fetch("https://portevalobashi.com/wp-json/wp/v2/categories")
            .then(res => res.json())
            .then(data => {
                setCategories(data);

                // 2. For each category, fetch posts
                data.forEach(cat => {
                    fetch(`https://portevalobashi.com/wp-json/wp/v2/posts?categories=${cat.id}`)
                        .then(res => res.json())
                        .then(posts => {
                            if (!Array.isArray(posts) || posts.length === 0) return;

                            // 3. Fetch featured images for each post
                            Promise.all(
                                posts.map(post => {
                                    const imgLink = post._links?.["wp:featuredmedia"]?.[0]?.href;
                                    if (imgLink) {
                                        return fetch(imgLink)
                                            .then(res => res.json())
                                            .then(imgData => ({
                                                ...post,
                                                featured_image: imgData.guid.rendered,
                                            }))
                                            .catch(() => ({
                                                ...post,
                                                featured_image: null,
                                            }));
                                    }
                                    return { ...post, featured_image: null };
                                })
                            ).then(postsWithImages => {
                                // Merge into postsByCategory
                                setPostsByCategory(prev => ({
                                    ...prev,
                                    [cat.name]: postsWithImages,
                                }));
                            });
                        });
                });
            });
    }, []);

    // Helper function (outside component or at top of file)
    const limitExcerpt = (excerpt, limit = 50) => {
        if (!excerpt) return "";

        // Create a temporary element to strip HTML tags
        const temp = document.createElement("div");
        temp.innerHTML = excerpt;
        const text = temp.textContent || temp.innerText || "";

        // Limit characters
        const limitedText = text.length > limit ? text.substring(0, limit) + "..." : text;

        // Return HTML-safe string
        return `<p>${limitedText}</p>`;
    };



    return (

        <div className="blog-container">
            {categories.map((cat) => (
                <div key={cat.id} className="category-section">
                    <h2 className="category-title">{cat.name}</h2>
                    <div className="posts-grid">
                        {postsByCategory[cat.name]?.map((post) => {
                            const featuredImage =
                                post._embedded?.["wp:featuredmedia"]?.[0]?.href;
                            const authorName =
                                post._embedded?.author?.[0]?.name || "Admin";
                            const date = new Date(post.date).toLocaleDateString();

                            return (
                                <div key={post.id} className="post-card">
                                    <img
                                        src={post.featured_image}
                                        alt={post.title.rendered}
                                        className="post-image"
                                    />
                                    <div className="post-content">
                                        <h3
                                            className="post-title"
                                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                        />
                                        <p className="post-meta">
                                            By {authorName} | {date}
                                        </p>
                                        <div
                                            className="post-excerpt"
                                            dangerouslySetInnerHTML={{
                                                __html: limitExcerpt(post?.excerpt?.rendered, 100),
                                            }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Blog;