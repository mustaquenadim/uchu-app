import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import moment from 'moment';
import ReactQuill from 'react-quill';

const WriteBlog = () => {
	const { register, handleSubmit } = useForm();
	const [value, setValue] = useState('');

	const onSubmit = (data) => {
		let imgData = new FormData();
		imgData.append('image', data.imageUrl[0]);
		axios
			.post(
				`https://api.imgbb.com/1/upload?key=${
					import.meta.env.VITE_IMGBB_API_KEY
				}`,
				imgData
			)
			.then((res) => {
				if (res?.data?.success) {
					const blogData = {
						title: data.title,
						imageURL: res?.data?.data?.display_url,
						description: value,
						dateTime: new Date(),
					};
					axios
						.post(`${import.meta.env.VITE_API_URL}/article`, blogData)
						.then((res) => console.log(res))
						.catch((err) => console.log(err));
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="card w-100">
			<div className="card-header fw-bold">Write Article</div>
			<form onSubmit={handleSubmit(onSubmit)} className="p-3 rounded-3">
				<div className="mb-3">
					<label htmlFor="serviceCoverPhoto" className="form-label">
						Upload Cover Image
					</label>
					<input
						type="file"
						className="form-control"
						id="serviceCoverPhoto"
						placeholder="Upload image"
						{...register('imageUrl')}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="name" className="form-label">
						Title
					</label>
					<input
						type="text"
						className="form-control"
						name="title"
						id="title"
						placeholder="Enter title"
						{...register('title')}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="price" className="form-label">
						Description
					</label>
					<ReactQuill theme="snow" value={value} onChange={setValue} />
				</div>
				<button type="submit" className="btn btn-primary">
					Publish
				</button>
			</form>
		</div>
	);
};

export default WriteBlog;
