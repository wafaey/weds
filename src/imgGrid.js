import React from "react";
import "./imgGrid.css";

const ImgGrid = () => {
	return (
		<div className="">
			<a class="text" href="/en/photos/297">
				<div class="">
					<img
						class="img"
						src="https://weds360-production.s3.eu-west-1.amazonaws.com/store/photo/297/src/medium-fd1f5961dbb5312cc651d6308c95a17e.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20200224%2Feu-west-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20200224T114237Z&amp;X-Amz-Expires=900&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=37982c5fc1f39fdaab21f75d20c626a4ec203ac0865a145a41ed7a0c8964f1bc"
						alt="Medium"
					></img>
				</div>
				<h3>Customized bachelorette cake</h3>
			</a>
		</div>
	);
};

export default ImgGrid;
