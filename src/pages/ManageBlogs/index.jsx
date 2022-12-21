import React, { useEffect, useState } from 'react';
import './ManageBlogs.scss';
import { Link } from 'react-router-dom';
import { MdOutlineEdit, MdOutlineDeleteForever } from 'react-icons/md';
import axios from 'axios';

const ManageBlogs = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		axios
			.get(`${import.meta.env.VITE_API_URL}/article`)
			.then((res) => setBlogs(res?.data))
			.catch((err) => console.log(err));
	}, []);

	const handleDeleteArticle = (id) => {
		axios
			.delete(`${import.meta.env.VITE_API_URL}/article/${id}`)
			.then((res) => console.log(res?.data))
			.catch((err) => console.log(err));
	};

	return (
		<div className="card w-100">
			<div className="card-header fw-bold">Manage Articles</div>
			<div className="p-3">
				<table className="table table-striped table-hover">
					<thead className="">
						<tr className="text-center">
							<th scope="col">Sl. No.</th>
							<th scope="col">Title</th>
							<th scope="col">Date & Time</th>
							<th scope="col">Action</th>
						</tr>
					</thead>
					<tbody className="">
						{blogs.map((blog, index) => (
							<tr>
								<th scope="row">{index + 1}</th>
								<td>{blog?.title}</td>
								<td>{blog?.dateTime}</td>
								<td>
									<div className="d-flex align-items-center">
										<button className="btn btn-outline-secondary d-flex align-items-center justify-content-center me-2">
											<MdOutlineEdit style={{ fontSize: '1.2rem' }} />
										</button>
										<button
											className="btn btn-outline-danger d-flex align-items-center justify-content-center"
											onClick={() => handleDeleteArticle(blog?._id)}
										>
											<MdOutlineDeleteForever style={{ fontSize: '1.2rem' }} />
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ManageBlogs;
