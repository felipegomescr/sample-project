import useSWR from "swr";
import { fetcher } from "@/helpers";
import type { NextPage } from "next";
import { Posts } from "@/components/Posts";
import { Post } from "@/types";

const ClientPage: NextPage = () => {
	const { data, error } = useSWR<Post[]>("/api/posts", fetcher);

	if (error) {
		return <p>Failed to load.</p>;
	}

	return (
		<>
			<h1>Client Page</h1>
			{data ? <Posts data={data} /> : <p>Loading...</p>}
		</>
	);
};

export default ClientPage;
