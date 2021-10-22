import { Posts } from "@/components/Posts";
import { fetcher, getProtocol } from "@/helpers";
import { Post } from "@/types";
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
	const protocol = getProtocol();
	const posts = await fetcher<Post[]>(`${protocol}${req.headers.host}/api/posts`);

	return {
		props: { posts },
	};
}

const ServerPage = ({ posts }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	return (
		<>
			<h1>Server Page</h1>
			<Posts data={posts} />
		</>
	);
};

export default ServerPage;
