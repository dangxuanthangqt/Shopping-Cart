import React, { Component } from 'react';

export class Header extends Component {
    render() {
        return (
            <header>
            <ul id="slide-out" className="side-nav hidden custom-scrollbar sn-bg-2 ps ps--theme_default" data-ps-id="c27390a3-9efc-e0d8-197a-ab96d73a156a">
              <li>
                <div className="logo-wrapper waves-light waves-effect waves-light">
                  <span>
                    <img src="http://mdbootstrap.com/img/logo/mdb-transparent.png" alt="" className="img-fluid flex-center" />
                  </span>
                </div>
              </li>
              <li>
                <ul className="social">
                  <li>
                    <span className="icons-sm fb-ic">
                      <i className="fa fa-facebook"> </i>
                    </span>
                  </li>
                  <li>
                    <span className="icons-sm pin-ic">
                      <i className="fa fa-pinterest"> </i>
                    </span>
                  </li>
                  <li>
                    <span className="icons-sm gplus-ic">
                      <i className="fa fa-google-plus"> </i>
                    </span>
                  </li>
                  <li>
                    <span className="icons-sm tw-ic">
                      <i className="fa fa-twitter"> </i>
                    </span>
                  </li>
                </ul>
              </li>
              <li>
                <form className="search-form" role="search">
                  <div className="form-group waves-light waves-effect waves-light">
                    <input type="text" className="form-control" placeholder="Search" />
                  </div>
                </form>
              </li>
              <li>
                <ul className="collapsible collapsible-accordion">
                  <li>
                    <span className="collapsible-header waves-effect arrow-r">
                      <i className="fa fa-shopping-bag" /> Product Page
                      <i className="fa fa-angle-down rotate-icon" />
                    </span>
                    <div className="collapsible-body">
                      <ul>
                        <li>
                          <span href="product.html" className="waves-effect">Product Page V.1</span>
                        </li>
                        <li>
                          <span href="product-page.html" className="waves-effect">Product Page V.2</span>
                        </li>
                        <li>
                          <span href="product-page-4.html" className="waves-effect">Product Page V.3</span>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="active">
                    <span className="collapsible-header waves-effect arrow-r active">
                      <i className="fa fa-shopping-cart" /> Cart Pages
                      <i className="fa fa-angle-down rotate-icon" />
                    </span>
                    <div className="collapsible-body">
                      <ul>
                        <li>
                          <span href="cart.html" className="waves-effect">Page with shopping cart</span>
                        </li>
                        <li>
                          <span href="contact.html" className="waves-effect">Page with contact form</span>
                        </li>
                        <li>
                          <span href="contact-2.html" className="waves-effect">Page with contact form V.2</span>
                        </li>
                        <li>
                          <span href="login.html" className="waves-effect">Page with sign in form</span>
                        </li>
                        <li>
                          <span href="terms.html" className="waves-effect">Page with 'terms of use'</span>
                        </li>
                        <li>
                          <span href="faq.html" className="waves-effect">Page with 'FAQ'</span>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <span className="collapsible-header waves-effect arrow-r">
                      <i className="fa fa-dashboard" /> Homepages
                      <i className="fa fa-angle-down rotate-icon" />
                    </span>
                    <div className="collapsible-body">
                      <ul>
                        <li>
                          <span href="home-page.html" className="waves-effect">Ecommerce homepage default</span>
                        </li>
                        <li>
                          <span href="home-page-2.html" className="waves-effect">Ecommerce homepage full width</span>
                        </li>
                        <li>
                          <span href="home-page-3-carousel.html" className="waves-effect">Ecommerce homepage V.3 Carousel</span>
                        </li>
                        <li>
                          <span href="home-page-3-full-page-carousel.html" className="waves-effect">Ecommerce homepage V.3 Full Page Carousel</span>
                        </li>
                        <li>
                          <span href="home-page-3-half-page-carousel.html" className="waves-effect">Ecommerce homepage V.3 Half Page Carousel</span>
                        </li>
                        <li>
                          <span href="home-page-4.html" className="waves-effect">Ecommerce homepage V.4</span>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <span className="collapsible-header waves-effect arrow-r">
                      <i className="fa fa-desktop" /> Post Pages
                      <i className="fa fa-angle-down rotate-icon" />
                    </span>
                    <div className="collapsible-body">
                      <ul>
                        <li>
                          <span href="post.html" className="waves-effect">Page with column on the right</span>
                        </li>
                        <li>
                          <span href="blog-post-left-column.html" className="waves-effect">Page with newsletter on the left</span>
                        </li>
                        <li>
                          <span href="blog-post.html" className="waves-effect">Page with newsletter on the right</span>
                        </li>
                        <li>
                          <span href="blog-post-full-width.html" className="waves-effect">Full width page with logged user</span>
                        </li>
                        <li>
                          <span href="blog-post-full-width%20not%20logged%20in%20user.html" className="waves-effect">Full width page with not logged user</span>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <span className="collapsible-header waves-effect arrow-r">
                      <i className="fa fa-diamond" /> Category Pages
                      <i className="fa fa-angle-down rotate-icon" />
                    </span>
                    <div className="collapsible-body">
                      <ul>
                        <li>
                          <span href="category-list-left-column.html" className="waves-effect">Category list with left column</span>
                        </li>
                        <li>
                          <span href="category-list-right-column.html" className="waves-effect">Category list with right column</span>
                        </li>
                        <li>
                          <span href="category-grid-left-column.html" className="waves-effect">Category grid with left column</span>
                        </li>
                        <li>
                          <span href="category-right-column.html" className="waves-effect">Category grid with right column</span>
                        </li>
                        <li>
                          <span href="category-grid-left-column-carousel.html" className="waves-effect">Category grid with left column carousel</span>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
              <div className="sidenav-bg mask-strong" />
              <div className="ps__scrollbar-x-rail">
                <div className="ps__scrollbar-x" tabIndex={0} />
              </div>
              <div className="ps__scrollbar-y-rail">
                <div className="ps__scrollbar-y" tabIndex={0} />
              </div>
            </ul>
            <nav className="navbar fixed-top navbar-toggleable-md navbar-expand-lg navbar-dark scrolling-navbar double-nav">
              <div className="float-left">
                <span data-activates="slide-out" className="button-collapse">
                  <i className="fa fa-bars" />
                </span>
              </div>
              <div className="breadcrumb-dn mr-auto">
                <ol className="breadcrumb header-breadcrumb">
                  <li className="breadcrumb-item">
                    <span>Trang Chủ</span>
                  </li>
                </ol>
              </div>
              <ul className="nav navbar-nav nav-flex-icons ml-auto">
                <li className="nav-item dropdown">
                  <span className="nav-link dropdown-toggle waves-effect waves-light" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa-user" /> Tài Khoản</span>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                    <span className="dropdown-item waves-effect waves-light">Đăng Ký</span>
                    <span className="dropdown-item waves-effect waves-light">Đăng Nhập</span>
                    <span className="dropdown-item waves-effect waves-light">Đăng Xuất</span>
                  </div>
                </li>
              </ul>
            </nav>
          </header>

        );
    }
}

export default Header;
