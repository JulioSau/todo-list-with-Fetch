const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			tasks: []
		},
		actions: {
			addTask: task => {
				const store = getStore();
				setStore({ tasks: [...store.tasks, task] });
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
			}
		}
	};
};

export default getState;
