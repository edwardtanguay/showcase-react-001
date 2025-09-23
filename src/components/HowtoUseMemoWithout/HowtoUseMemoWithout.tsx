import { useState } from "react";

type User = {
	id: number;
	name: string;
	age: number;
};

export const HowtoUseMemoWithout = () => {
	const [users]: [User[], React.Dispatch<React.SetStateAction<User[]>>] =
		useState([
			{ id: 1, name: "Alice", age: 25 },
			{ id: 2, name: "Bob", age: 30 },
			{ id: 3, name: "Charlie", age: 35 },
			{ id: 4, name: "Diana", age: 28 },
		]);
	const [filter, setFilter] = useState("");
	const [sortBy, setSortBy] = useState("name");
	const [theme, setTheme] = useState("light");

	const processedUsers = (() => {
		console.log(Math.random(), "WITHOUT useMemo(): Processing users...");

		let filteredUsers = users;
		if (filter) {
			filteredUsers = users.filter((user) =>
				user.name.toLowerCase().includes(filter.toLowerCase())
			);
		}

		return [...filteredUsers].sort((a, b) => {
			if (a[sortBy as keyof User] < b[sortBy as keyof User]) return 0;
			if (a[sortBy as keyof User] > b[sortBy as keyof User]) return 1;
			return 0;
		});
	})();

	return (
		<div>
			<div
				className={`p-4 mb-4 w-[40rem] rounded ${
					theme === "light"
						? "bg-gray-200 text-black"
						: "bg-gray-800 text-white"
				} flex gap-3 items-center`}
			>
				<button
					onClick={() =>
						setTheme(theme === "light" ? "dark" : "light")
					}
				>
					Toggle Theme
				</button>
				<div>Current Theme: {theme}</div>
			</div>

			<input
				type="text"
				className="mb-3"
				placeholder="Filter by name..."
				value={filter}
				onChange={(e) => setFilter(e.target.value)}
			/>

			<select
				value={sortBy}
				className="dropdown mb-3"
				onChange={(e) => setSortBy(e.target.value)}
			>
				<option value="name">Sort by Name</option>
				<option value="age">Sort by Age</option>
			</select>

			<ul>
				{processedUsers.map((user) => (
					<li key={user.id}>
						{user.name} - {user.age} years old
					</li>
				))}
			</ul>
		</div>
	);
};
