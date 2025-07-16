const PostCompo = ({ title, body }) => {
    return (
        <div className="flex flex-col items-start justify-start border p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-gray-700">
                {body}
            </p>
        </div>
    );
};

export default PostCompo;