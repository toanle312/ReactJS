import { useState, useEffect } from "react";

const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users'];

function Content() {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');
    const [showGoToTop, setShowGoToTop] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(posts => {
                setPosts(posts);
            })
    }, [type]);

    // Chỉ gọi một lần
    useEffect(() =>{
        const handleScroll = () => {
            setShowGoToTop(window.scrollY >= 200);
        }

        const handleResize = () => {
            setWidth(window.innerWidth);
        }

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () =>{
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div>
            <h1>{width}</h1>
            {tabs.map(tab => 
                <button 
                    key={tab}
                    style={type === tab ? { color: '#fff', background: '#333'} : {}}
                    onClick={() => setType(tab)}
                >{tab}</button>
            )}
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => <li key={post.id}>{post.title || post.name}</li>)}
            </ul>
            {showGoToTop && <button
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px'
                }}
                onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })}
            >Go To Top</button>}
        </div>
    )
}
export default Content;
