interface PostCardProps {
  id: string;
  title: string;
  desc: string;
}

const PostCard: React.FC<PostCardProps> = ({ id, title, desc }) => {
  return (
    <div>
      <a
        href={"/posts/" + id}
        className="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{desc}</p>
      </a>
    </div>
  );
};

export default PostCard;
