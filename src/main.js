import React, { useState } from "react";
import "./main.css";
import ImgGrid from "./imgGrid.js";

const Main = () => {
	const [listOfImages, setListOfImages] = useState([]);
	const [nameOfSearch, setNameOfSearch] = useState("");
	const handleNameSearchChange = e => setNameOfSearch(e.target.value);
	return (
		<div className="Main">
			<div class="wedding-breadcrumb">
				<h1 class="wedding-breadcrumb-link">
					<a href="/">Gallery</a>
				</h1>
				<i class="fa fa-angle-right " aria-hidden="true"></i>
				<h2> Wedding Ideas</h2>
			</div>
			<div class="photos-wrapper">
				<div class="filters-container">
					<form class="filters-radio" action="/en/photos">
						<input type="hidden" name="category" value="4"></input>
						<div class="filters-actions">
							<a class="filters-actions-clear" href="/">
								Clear
							</a>
							<button class="filters-actions-apply">Apply</button>
						</div>
						<div class="vendors-search-inputs posts">
							<input
								type="text"
								placeholder="Search"
								name="name"
								onChange={handleNameSearchChange}
								value={nameOfSearch}
							></input>
							{/* <input type="hidden" name="category" value="4"></input>
              <i class="fa fa-circle-thin" aria-hidden="true"></i> */}
						</div>
					</form>
				</div>
				<div class="photos-container">
					<div class="top">
						<ImgGrid data={listOfImages[0]} />
						<ImgGrid data={setListOfImages[1]} />
						<ImgGrid data={listOfImages[2]} />
					</div>
					<div class="middle">
						<ImgGrid data={listOfImages[3]} />
						<ImgGrid data={listOfImages[4]} />
						<ImgGrid data={listOfImages[5]} />
					</div>
					<div class="bottom">
						<ImgGrid data={listOfImages[6]} />
						<ImgGrid data={listOfImages[7]} />
						<ImgGrid data={listOfImages[8]} />
					</div>
				</div>
			</div>
			<div class="pagination-block">
				<div class="pagination">
					<ul class="pagination">
						<li class="previous previous_page">
							<a href="/">Previous</a>
						</li>
						<li class="active">
							<a href="/">1</a>
						</li>
						<li>
							<a href="/">2</a>
						</li>
						<li>
							<a href="/">3</a>
						</li>
						<li>
							<a href="/">4</a>
						</li>
						<li>
							<a href="/">5</a>
						</li>
						<li>
							<a href="/">6</a>
						</li>
						<li>
							<a href="/">7</a>
						</li>
						<li>
							<a href="/">8</a>
						</li>
						<li>
							<a href="/">9</a>
						</li>
						<li>
							<a href="/">...</a>
						</li>
						<li>
							<a href="/">40</a>
						</li>
						<li>
							<a href="/">41</a>
						</li>
						<li class="next_page next">
							<a href="/">Next</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Main;
