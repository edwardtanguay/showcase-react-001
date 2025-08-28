import { useState } from "react";

type User = {
	id: number;
	name: string;
	age: number;
};

export const HowtoUseMemo = () => {
	const [users]: [User[], React.Dispatch<React.SetStateAction<User[]>>] =
		useState([
			{ id: 1, name: "Alice", age: 25 },
			{ id: 2, name: "Bob", age: 30 },
			{ id: 3, name: "Charlie", age: 35 },
			{ id: 4, name: "Diana", age: 28 },
		]);
	const [filter, setFilter] = useState("");
	const [sortBy, setSortBy] = useState("name");

	const processedUsers = (() => {
		console.log(Math.random(), "Processing users...");

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
