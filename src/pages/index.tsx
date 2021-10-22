import Link from "next/link";
import type { NextPage } from "next";

const HomePage: NextPage = () => {
	return (
		<>
			<h1>Home Page</h1>
			<nav>
				<Link href="/client">
					<a>Client</a>
				</Link>{" "}
				|{" "}
				<Link href="/server">
					<a>Server</a>
				</Link>
			</nav>
		</>
	);
};

export default HomePage;
