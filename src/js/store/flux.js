const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			tasks: []
		},
		actions: {
			addTask: task => {
				const store = getStore();
				const newTask = { label: task, done: true };
				setStore({ tasks: [...store.tasks, newTask] });
				getActions().putSchudeles();
			},

			deleteTask: index => {
				const store = getStore();
				let newArray = [];
				for (let i = 0; i < store.tasks.length; i++) {
					if (index != i) {
						newArray.push(store.tasks[i]);
					}
				}
				setStore({ tasks: newArray });
				getActions().putSchudeles();
			},

			getSchudeles: async () => {
				let response = await fetch("https://assets.breatheco.de/apis/fake/todos/user/juliosau");
				let data = await response.json();
				setStore({ tasks: data });
			},

			putSchudeles: async newTask => {
				let store = getStore();
				let response = await fetch("https://assets.breatheco.de/apis/fake/todos/user/juliosau", {
					headers: { "Content-Type": "application/json" },
					method: "PUT",
					body: JSON.stringify(store.tasks)
				});
			},

			postSchudeles: async () => {
				let store = getStore();
				let response = await fetch("https://assets.breatheco.de/apis/fake/todos/user/blablablabla", {
					headers: { "Content-Type": "application/json" },
					method: "POST",
					body: JSON.stringify([])
				});
			}
		}
	};
};

export default getState;
