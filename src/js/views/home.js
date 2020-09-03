import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import Task from "../component/task";

export function Home() {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid text-center">
			<h1 className="titulo">todos</h1>
			<div className="col-7 bg-white mx-auto">
				<div className="boxinput row border py-2">
					<input
						onKeyDown={e => {
							if (e.key === "Enter") {
								actions.addTask(e.target.value);
								e.target.value = "";
							}
						}}
						className="container-fluid border-0 pl-5"
						type="text"
						placeholder="what needs to be done?..."
					/>
				</div>
			</div>
			<ul className="list-group boxtask col-7 bg-white mx-auto">
				{store.tasks.map((task, index) => {
					return (
						<li className="d-flex justify-content-between" key={index}>
							{task.label}{" "}
							<p
								onClick={() => {
									actions.deleteTask(index);
								}}>
								X
							</p>
						</li>
					);
				})}
			</ul>
			<div className="col-7 bg-white mx-auto">
				<div className="boxcontador row pl-5 border">
					<p className="contador">{store.tasks.length} item left</p>
				</div>
			</div>
		</div>
	);
}
