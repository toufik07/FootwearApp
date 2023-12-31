import { Link } from "react-router-dom";

function Header() {
	return (
		<div>
			<nav className="colorlib-nav " role="navigation">
				<nav class="navbar navbar-expand-lg navbar-light bg-light">
					<Link to={'/'} className="navbar-brand" style={{
						fontWeight :"bold"
					}}>Footwear</Link>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav mr-auto text-dark">
							<li class="nav-item active">
							<Link to={'/'} className="link-styles">Home</Link>
							</li>
							<li class="nav-item">
							<Link to={'/men'} className="link-styles ">Men</Link>
							</li>
							<li class="nav-item">
							<Link to={'/women'} className="link-styles ">Women</Link>	
							</li>
							<li class="nav-item">
							<Link to={'/allproducts'} className="link-styles ">All Products</Link>
							</li>
							<li class="nav-item">
							<Link to={'/about'} className="link-styles ">About</Link>	
							</li>
							<li class="nav-item">
							<Link to={'/contact'} className="link-styles ">Contact</Link>	
							</li>
							<li class="nav-item">
							<Link to={'/admin'} className="link-styles ">Admin Login</Link>	
							</li>
							<li className="cart"><Link to={'/cart'} className="link-styles "><i class="bi bi-cart-fill"></i>Cart [0]</Link></li>
						</ul>
						<form class="form-inline my-2 my-lg-0">
							<div className="form-group">
								<input type="search" className="form-control search border" placeholder="Search" />
								<button className="btn btn-primary submit-search text-center" type="submit" style={{
									backgroundColor :"#88c8bc"
								}}><i class="bi bi-search"></i></button>
							</div>
						</form>
					</div>
				</nav>
			
				<div className="sale">
					<div className="container">
						<div className="row">
							<div className="col-sm-8 offset-sm-2 text-center">
								<div className="row">
									<div className="owl-carousel2">
										<div className="item">
											<div className="col">
												<h6>25% off (Almost) Everything! Use Code: Summer Sale</h6>
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
