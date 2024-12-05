import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import img from '../../assets/images/new/whitelogo.webp';

Project6.propTypes = {
  data: PropTypes.array,
};

function Project6(props) {
  const { data } = props;
  return (
    <section className="nft">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="filter">
              {/* Removed the "All categories" box */}
            </div>
          </div>

          {data.map((item) => (
            <div key={item.id} className="col-xl-3 col-md-6">
              <div className="nft-item">
                <div className="card-media">
                  <Link to="#">
                    <img src={item.img} alt="Cyfonii" />
                  </Link>
                </div>
                <div className="card-title">
                  <Link to="#" className="h5">
                    {item.title}
                  </Link>
                </div>
                <div className="meta-info">
                  <div className="author">
                    <div className="avatar">
                      <img src={img} alt="Cyfonii" />
                    </div>
                    <div className="info">
                      <span>Organized On</span>
                      <Link to="#" className="h6">
                        {item.ownedBy}
                      </Link>
                    </div>
                  </div>
                  <Link to="#" className="wishlist-button heart">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.75 4.3125C11.75 2.86292 10.5256 1.6875 9.01533 1.6875C7.88658 1.6875 6.91708 2.34433 6.5 3.28175C6.08292 2.34433 5.11342 1.6875 3.98408 1.6875C2.475 1.6875 1.25 2.86292 1.25 4.3125C1.25 8.52417 6.5 11.3125 6.5 11.3125C6.5 11.3125 11.75 8.52417 11.75 4.3125Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="number-like"> {item.likes}</span>
                  </Link>
                </div>
                <div className="card-bottom style-explode">
                  <div className="price">
                    <span className="icon-logo-01"></span>
                    <div className="price-details">
                      <span> Ticket Price</span>
                      <h6>{item.bid}</h6>
                    </div>
                  </div>
                  <div className="button-place-bid">
                    <Link
                      to=""
                      data-toggle="modal"
                      data-target="#popup_bid"
                      className="sc-button"
                    >
                      <span>Register</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project6;
