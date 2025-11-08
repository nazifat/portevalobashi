import blog from '/public/data.json'
import { motion } from "framer-motion";

const HomeBlog = () => {
    return (
        <div>
            <div className="min-h-screen bg-gray-50 px-4 md:px-12 py-12">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Welcome to <span className="text-red-600">Nazifa’s Blog</span>
                    </h1>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Thoughts, reflections, and lessons on books, focus, and mindful living.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {blog.map((post) => (
                        <motion.div
                            key={post.id}
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow"
                        >
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-5">
                                <p className="text-sm text-gray-400">{post.date}</p>
                                <h2 className="text-xl font-semibold text-gray-800 mt-2 hover:text-blue-600 cursor-pointer">
                                    {post.title}
                                </h2>
                                <p className="text-gray-500 text-sm mt-2">{post.description}</p>
                                <div className="mt-4 text-sm text-gray-600">
                                    — {post.author}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeBlog;