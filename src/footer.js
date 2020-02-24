import React from "react";
import "./footer.css";

const Footer = () => {
	return (
		<div class="bottom">
			<footer class="footer">
				<div class="main">
					{" "}
					WEDDING PLANNING IS A PIECE OF CAKE WITH WEDS360. WE KNOW WHAT MATTERS MOST
					AND YOU CAN COUNT ON US EVERY STEP OF THE WAY.{" "}
				</div>

				<div class="footer-card">
					<div class="footer-cardleft">
						<div class="footer-cardleftimg">
							<img
								class="img-responsive"
								src="https://weds360.com/assets/icons/tools-website-95bef8b478b6c85387e84ee788519776163c56e0b019ed23465792a72ca2afc4.png"
								alt="Tools website"
							></img>
						</div>
						<div class="footer-cardleftup">
							<div>
								<h1>WEDDING WEBSITE</h1>
								<p>
									Where you will save all your wedding memories forever, where you will
									choose your own personalized template, manage every event detail and
									let your guests share their pictures, videos and moments with you.
									Create your website
								</p>
							</div>
						</div>
						<div class="footer-cardleftimg">
							<img
								class="img-responsive"
								src="https://weds360.com/assets/icons/tools-guestlist-f425f68309d1c60ecfbd742d0c23f6ac6e4c5f06112cc32c7f03cb44e76e46c4.png"
								alt="Tools guestlist"
							></img>
						</div>
						<div class="footer-cardleftdown">
							<h1>GUEST LIST</h1>
							<p>
								Who is coming? Who is not? Who replied with a "Maybe"? Manage all of
								this while customizing your invitations. All in one place and right at
								your fingertips. Create your guest list
							</p>
						</div>
					</div>
					<div class="footer-cardcenter">
						<div class="footer-cardcenterimg">
							<img
								class="img-responsive"
								src="https://weds360.com/assets/icons/tools-vendors-ed23b60c6df77090fbdd0525fa4933dc63663550ded8c05f79e46168566f20b8.png"
								alt="Tools vendors"
							></img>
						</div>
						<div class="footer-cardcenterup">
							<h1>BUDGETER</h1>
							<p>
								Do you have a figure in mind? Place it in the budgeter and we will
								provide you with all the choices and possibilities you can think of.
								Create and manage your budget
							</p>
						</div>
						<div class="footer-cardcenterimg">
							<img
								class="img-responsive"
								src="https://weds360.com/assets/icons/tools-vendors-ed23b60c6df77090fbdd0525fa4933dc63663550ded8c05f79e46168566f20b8.png"
								alt="Tools vendors"
							></img>
						</div>
						<div class="footer-cardcenterdown">
							<h1>VENDORS</h1>
							<p>
								Meet your service providers, view their profiles and make all the
								perfect choice for your wedding night. Start your tour
							</p>
						</div>
					</div>
					<div class="footer-cardright">
						<div class="footer-cardrightimg">
							<img
								class="img-responsive"
								src="https://weds360.com/assets/icons/tools-checklist-e124e29dd969e38098828647686c96804fe8369a8b09b6d9fc422f9a4e7b5e22.png"
								alt="Tools checklist"
							></img>
						</div>
						<div class="footer-cardrightup">
							<h1>CHECK LIST</h1>
							<p>
								Set your tasks, create your priority list and never forget any wedding
								detail. Get your check list
							</p>
						</div>
						<div class="footer-cardrightimg">
							<img
								class="img-responsive"
								src="https://weds360.com/assets/icons/tools-registry-44ab24a86952730b44ec02ae3405b2665d61471f42a631968093d3613f4f95e8.png"
								alt="Tools registry"
							></img>
						</div>
						<div class="footer-cardrightdown">
							<h1>REGISTRY LIST</h1>
							<p>
								Escape the awkward moments and receiving the same gift twice by listing
								everything you've thought of and every store you love. Let your guests
								choose what to get you for the wedding and say goodbye to unwanted
								presents. Create your dream list
							</p>
						</div>
					</div>
				</div>
				<div class="footer-distributed">
					<div class="footer-left">
						<p class="company-logo">Weds360</p>

						<p class="footer-links">
							<a href="/" class="company-logo">
								Facebook
							</a>
							<a href="/" class="company-logo">
								Instgram
							</a>
						</p>
					</div>

					<div class="footer-center">
						<div>
							<h2>
								@ Copyright <span>plus360</span> All Rights Reserved
							</h2>
						</div>
					</div>

					<div class="footer-right">
						<h2>Terms & Conditions </h2>
						<h2> Privacy Policy</h2>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
