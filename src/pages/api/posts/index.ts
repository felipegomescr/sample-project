import { fetcher } from "@/helpers";
import type { NextApiRequest, NextApiResponse } from "next";
import type { Post } from "@/types";

export default async function handler(_: NextApiRequest, res: NextApiResponse<Post[]>) {
	const posts = await fetcher<Post[]>("https://jsonplaceholder.typicode.com/posts");

	res.status(200).json(posts);
}
