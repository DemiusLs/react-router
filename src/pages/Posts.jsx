
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Posts = () => {

    const urlPosts = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts/?page=1&limit=50"

    const [postsArr, setPostsArr] = useState(null)

    useEffect(() => {

        axios.get(urlPosts)
            .then(resp => {
                setPostsArr(resp.data);
                console.log(resp.data)
            }
            )

    }, [])

    return (
        <>
            <main>
                <div className="container">

                    <h1 className="py-4 text-center">All post cards</h1>
                    {postsArr !== null ? (<div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">

                        {postsArr.map((curPost, index) => (

                            < div className="col" key={index}>
                                <div className="card" >
                                    <div className="card-body">
                                        <h5 className="card-title">{curPost.title}</h5>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">{curPost.author}</h6>
                                        <p className="card-text over-text">{curPost.body}</p>
                                        <Link to="/singlePost" className="card-link">Single Post</Link>
                                        {/* <Link to="/posts" className="card-link">All Posts</Link> */}
                                    </div>
                                </div>
                            </div>

                        )

                        )}



                    </div>) : (<h2> Caricando</h2>)}



                </div>





            </main >
        </>
    );
};

export default Posts;