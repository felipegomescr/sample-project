import { Post } from "@/types";

type PostsProps = {
	data: Post[];
};

export const Posts = ({ data }: PostsProps) => {
	return (
		<ul>
			{data.map(({ id, body, title }) => (
				<li key={id}>
					<h2>{title}</h2>
					<p>{body}</p>
				</li>
			))}
		</ul>
	);
};
