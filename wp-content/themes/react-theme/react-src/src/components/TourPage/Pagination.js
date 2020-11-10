import React from 'react';
import LeftArrow from '../../images/pagination-left.png';
import RightArrow from '../../images/pagination-right.png';
import LeftArrowGrey from '../../images/pagination-left-greyout.png';
import RightArrowGrey from '../../images/pagination-right-greyout.png';
import './Pagination.styles.css';

const Pagination = ({pageNum, currentPage, handlePrevPage, handleNextPage}) => {
    var LeftIcon = LeftArrow;
    var RightIcon = RightArrow;

    if(currentPage == 1) {LeftIcon = LeftArrowGrey}
    if(currentPage == pageNum) {RightIcon = RightArrowGrey}
    return(
        <div className="add-stop-pagination pagination">
            <img className="pagination-arrow" src={LeftIcon} onClick={handlePrevPage} />
            <div className="pagination-center">
    <span className="current-page">{currentPage}</span> / 
                <span className="page-number">{pageNum}</span>
            </div>
            <img className="pagination-arrow" src={RightIcon} onClick={handleNextPage}/>
        </div>
    )
}
export default Pagination;