import React, { useState, useEffect } from "react";
import "./main.css";
import ImgGrid from "./imgGrid.js";

const Main = () => {
	const [listOfImages, setListOfImages] = useState([]);
	useEffect(() => {
		const getlist = async () => {
			const result = await fetch("http://localhost:3001/images");

			const res = await result.json();
			setListOfImages(res);
		};
		getlist();
	}, []);
	const [pageNumber, setPageNumber] = useState(1);
	const [nameOfSearch, setNameOfSearch] = useState("");
	const handleNameSearchChange = e => setNameOfSearch(e.target.value);
	const pageChange = x => {
		//	const x = 2;
		if (pageNumber === 1) {
			document.getElementsById("1").classList.remove("active");
			document.getElementById(x).classList.add("active");
			setPageNumber(x);
		}
		if (pageNumber === 2) {
			document.getElementById("2").classList.remove("active");
			document.getElementById(x).classList.add("active");
			setPageNumber(x);
		}
		if (pageNumber === 3) {
			document.getElementById("3").classList.remove("active");
			document.getElementById(x).classList.add("active");
			setPageNumber(x);
		}
		if (pageNumber === 4) {
			document.getElementById("4").classList.remove("active");
			document.getElementById(x).classList.add("active");
			setPageNumber(x);
		}
		if (pageNumber > 1 && x === 0) {
			document.getElementById(pageNumber).classList.remove("active");
			document.getElementById(pageNumber - 1).classList.add("active");
			setPageNumber(pageNumber + 1);
		}
		if (pageNumber < 4 && x === 5) {
			document.getElementById(pageNumber).classList.remove("active");
			document.getElementById(pageNumber + 1).classList.add("active");
			setPageNumber(pageNumber + 1);
		}
	};

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
						<ImgGrid data={listOfImages[1]} />
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
							<a id="0" href="/">
								Previous
							</a>
						</li>
						<li id="1" class="active" onClick={pageChange}>
							<a href="/">1</a>
						</li>
						<li id="2" onClick={pageChange}>
							<a href="/">2</a>
						</li>
						<li id="3" onClick={pageChange}>
							<a href="/">3</a>
						</li>
						<li id="4" onClick={pageChange}>
							<a href="/">4</a>
						</li>
						<li id="5" class="next_page next">
							<a href="/">Next</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Main;
