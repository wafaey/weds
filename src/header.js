import React from "react";
import "./header.css";
import "./App.css";

const Header = () => {
	return (
		<div className="header-container header-fixed">
			<div className="header">
				<div className="header-links header-links-left">
					{/* <div class="arabic">

             </div> */}
					<ul className="">
						<li className="header-link-toggle">
							<a href="/" className="header-link-toggle-anchor">
								360 Planner
							</a>
							<div class="header-link-dropdown">
								<a style={{ borderTop: 0 }} href="/en/checklists">
									Check List
								</a>
								<a href="/en/budgeter">Budgeter</a>
								<a href="/en/registery">Registery</a>
								<a href="/en/guestlist">Guest List</a>
								<a href="/en/build your website">Wedding Website</a>
								<a href="/en/couple">Couple Website</a>
								<a href="/en/more">More</a>
							</div>
						</li>
						<li class="header-link-toggle">
							{" "}
							<a href="/" class="header-link-toggle-anchor">
								Her
							</a>
							<div class="header-link-dropdown">
								<a style={{ borderTop: 0 }} href="/">
									Designers
								</a>
								<a href="/">Bridal Boutique</a>
							</div>
						</li>
						<li class="header-link-toggle">
							{" "}
							<a href="/" class="header-link-toggle-anchor">
								Him
							</a>
							<div class="header-link-dropdown">
								<a style={{ borderTop: 0 }} href="/">
									Suits
								</a>
								<a href="/">Health</a>
							</div>
						</li>
						<li class="header-link-toggle">
							{" "}
							<a href="/" class="header-link-toggle-anchor">
								The Wedding
							</a>
							<div class="header-link-dropdown">
								<a style={{ borderTop: 0 }} href="/">
									Venues
								</a>
								<a href="/">Outdoor Wedding Venues</a>
							</div>{" "}
						</li>
					</ul>
				</div>
				<div></div>
				<div></div>
			</div>
			<div class="header-logo">
				<a href="/">
					<img
						class="img-responsive"
						src="https://weds360.com/assets/logo-a44ab28137d9c6c366386172e63d31ba35dfd616b594a0b39e1f5d45a3130973.png"
						alt="Logo"
					></img>
				</a>
			</div>
			<div class="header">
				<div class="header-links header-links-left">
					{/* <div class="arabic">

             </div> */}
					<ul>
						<li class="header-link-toggle">
							<a href="/" class="header-link-toggle-anchor">
								Vendors
							</a>
							<div class="header-link-dropdown">
								<a style={{ borderTop: 0 }} href="/en/checklists">
									Check List
								</a>
								<a href="/en/budgeter">Budgeter</a>
								<a href="/en/registery">Registery</a>
								<a href="/en/guestlist">Guest List</a>
								<a href="/en/build your website">Wedding Website</a>
								<a href="/en/couple">Couple Website</a>
								<a href="/en/more">More</a>
							</div>
						</li>
						<li class="header-link-toggle">
							{" "}
							<a href="/" class="header-link-toggle-anchor">
								Gallery
							</a>
							<div class="header-link-dropdown">
								<a style={{ borderTop: 0 }} href="/">
									Designers
								</a>
								<a href="/">Bridal Boutique</a>
							</div>
						</li>
						<li class="header-link-toggle">
							{" "}
							<a href="/" class="header-link-toggle-anchor">
								Idea & More
							</a>
							<div class="header-link-dropdown">
								<a style={{ borderTop: 0 }} href="/">
									Suits
								</a>
								<a href="/">Health</a>
							</div>
						</li>
					</ul>
				</div>
				<div></div>
				<div></div>
			</div>
			<div class="mobile-styles"></div>
		</div>
	);
};

export default Header;
