import React from 'react'

export default function Home() {
	return (
		<div>
			<div id="carouselExampleIndicators" class="carousel slide">
				<div class="carousel-indicators">
					<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img src={require("../images/img_bg_1.jpg")} class="d-block w-100" alt="..." />
					</div>
					<div class="carousel-item">
						<img src={require("../images/img_bg_2.jpg")} class="d-block w-100" alt="..." />
					</div>
					<div class="carousel-item">
						<img src={require("../images/img_bg_3.jpg")} class="d-block w-100" alt="..." />
					</div>
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
			<div className="colorlib-intro">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 text-center">
							<h2 className="intro">It started with a simple idea: Create quality, well-designed products that I wanted myself.</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="colorlib-product">
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-6 text-center">
							<div className="featured">
								<a href="#" className="featured-img" style={{ backgroundImage: "url('../images/men.jpg')" }}></a>
								<div className="desc">
									<h2><a href="#">Shop Men's Collection</a></h2>
								</div>
							</div>
						</div>
						<div className="col-sm-6 text-center">
							<div className="featured">
								<a href="#" className="featured-img" style={{ backgroundImage: "url('../images/women.jpg')" }}></a>
								<div className="desc">
									<h2><a href="#">Shop Women's Collection</a></h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="colorlib-product">
				<div className="container">
					<div className="row">
						<div className="col-sm-8 offset-sm-2 text-center colorlib-heading">
							<h2>Best Sellers</h2>
						</div>
					</div>
					<div className="row row-pb-md">
						<div className="col-lg-3 mb-4 text-center">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../images/item-1.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../images/item-2.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Minam Meaghan</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../images/item-3.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Men's Taja Commissioner</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../images/item-4.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Russ Men's Sneakers</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="w-100"></div>
						<div className="col-lg-3 mb-4 text-center">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../images/item-5.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../images/item-6.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../images/item-7.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../images/item-8.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="w-100"></div>
						<div className="col-lg-3 mb-4 text-center">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../images/item-9.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../images/item-10.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../images/item-11.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../images/item-12.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="w-100"></div>
						<div className="col-lg-3 mb-4 text-center">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../images/item-13.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../images/item-14.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../images/item-15.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4 text-center">
							<div className="product-entry border">
								<a href="#" className="prod-img">
									<img src={require("../images/item-16.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template" />
								</a>
								<div className="desc">
									<h2><a href="#">Women's Boots Shoes Maca</a></h2>
									<span className="price">$139.00</span>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 text-center">
							<p><a href="#" className="btn btn-primary btn-lg">Shop All Products</a></p>
						</div>
					</div>
				</div>
			</div>

			<div className="colorlib-partner">
				<div className="container">
					<div className="row">
						<div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
							<h2>Trusted Partners</h2>
						</div>
					</div>
					<div className="row">
						<div className="col partner-col text-center">
							<img src={require("../images/brand-1.jpg")} className="img-fluid" alt="Free html4 bootstrap 4 template" />
						</div>
						<div className="col partner-col text-center">
							<img src={require("../images/brand-2.jpg")} className="img-fluid" alt="Free html4 bootstrap 4 template" />
						</div>
						<div className="col partner-col text-center">
							<img src={require("../images/brand-3.jpg")} className="img-fluid" alt="Free html4 bootstrap 4 template" />
						</div>
						<div className="col partner-col text-center">
							<img src={require("../images/brand-4.jpg")} className="img-fluid" alt="Free html4 bootstrap 4 template" />
						</div>
						<div className="col partner-col text-center">
							<img src={require("../images/brand-5.jpg")} className="img-fluid" alt="Free html4 bootstrap 4 template" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
