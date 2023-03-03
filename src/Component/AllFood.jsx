import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Helmet from './Helmet/Helmet'
import ProductCard from './ProductCard'
import products from './fakedata/products'
import Commonsection from './CommonSection/Commonsection'
import '../styles/allfoods.css'
import ReactPaginate from "react-paginate";

function AllFood() {

    const [searchTerm, setSearchTerm] = useState("");

    const [pageNumber, setPageNumber] = useState(0);
  
    const searchedProduct = products.filter((item) => {
      if (searchTerm.value === "") {
        return item;
      }
      if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return item;
      } else {
        return console.log("not found");
      }
    });
    // Pegination
    const productPerPage = 9;
    const visitedPage = pageNumber * productPerPage;
    const displayPage = searchedProduct.slice(
      visitedPage,
      visitedPage + productPerPage
    );
  
    const pageCount = Math.ceil(searchedProduct.length / productPerPage);
  
    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };

  return (
   <>
     <Helmet title="All-Foods">
      <Commonsection title="All Foods" />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between ">
                <input
                  type="text"
                  placeholder="I'm looking for...."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-50">
                  <option>Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>

            {displayPage.map((item) => (

              <Col lg="4" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                <ProductCard item={item} />
              </Col>
             ))} 

            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName=" paginationBttns "
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
   </>
  )
}

export default AllFood