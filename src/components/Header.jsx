import { Link } from "react-router-dom";

function Header() {
	return (
		<div>
			<nav className="colorlib-nav" role="navigation">
				<div className="top-menu">
					<div className="container">
						<div className="row">
							<div className="col-sm-7 col-md-9">
								<div id="colorlib-logo"><Link to={'/'} className="link-styles">Footwear</Link></div>
							</div>
							<div className="col-sm-5 col-md-3">
								<form action="#" className="search-wrap">
									<div className="form-group">
										<input type="search" className="form-control search border" placeholder="Search" />
										<button className="btn btn-primary submit-search text-center" type="submit"><i class="bi bi-search"></i></button>
									</div>
								</form>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12 text-left menu-1">
								<ul>
									<li className="active"><Link to={'/'}className="link-styles">Home</Link></li>
									<li className="has-dropdown">
										<Link to={'/men'} className="link-styles">Men</Link>
									</li>
									<li><Link  to={'/women'} className="link-styles">Women</Link></li>
									<li><Link  to={'/allproducts'} className="link-styles">All Products</Link></li>
									<li><Link to={'/about'} className="link-styles">About</Link></li>
									<li><Link  to={'/contact'} className="link-styles">Contact</Link></li>
									<li><Link  to={'/admin'} className="link-styles">Admin Login</Link></li>
									<li className="cart"><Link to={'/cart'} className="link-styles"><i class="bi bi-cart-fill"></i>Cart [0]</Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="sale">
					<div className="container">
						<div className="row">
							<div className="col-sm-8 offset-sm-2 text-center">
								<div className="row">
									<div className="owl-carousel2">
										<div className="item">
											<div className="col">
												<h3><a href="#" className="link-styles">25% off (Almost) Everything! Use Code: Summer Sale</a></h3>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default Header;
