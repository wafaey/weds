import React from "react";
import "./imgGrid.css";

const ImgGrid = ({ data }) => {
	console.log(data);
	return (
		<div className="">
			<a class="text" href="/en/photos/297">
				<div class="">
					<img class="img" src={data ? data.imgId : "sda"} alt="Medium"></img>
				</div>
				<h3>{data ? data.name : "ds"}</h3>
			</a>
		</div>
	);
};

export default ImgGrid;
