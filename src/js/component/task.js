import React from "react";
import PropTypes from "prop-types";

export default function Task(props) {
	return <li className="list-group-item border-1 d-flex pl-5">Esta es mi tarea</li>;
}
Task.propTypes = {
	newTask: PropTypes.string
};
