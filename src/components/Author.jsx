

const Author = () => {
    const blog = useLoaderData();
      console.log(blog);
    return (
        <div>
            <h1>{ blog.user.name}</h1>
        </div>
    );
};

export default Author;