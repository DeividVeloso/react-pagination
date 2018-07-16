import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

class Pagination extends PureComponent {
  constructor(props) {
    super(props);

    const { totalRecords = null, pageLimit = 30, pageNeighbours = 0 } = props;

    this.pageLimit = typeof pageLimit === 'number' ? pageLimit : 30;
    this.totalRecords = typeof totalRecords === 'number' ? totalRecords : 0;

    //pageNeighbours é a quantidade de número que aparece entre os numeros da paginacao:
    /*
      pageNeighbours = 0
      1 <- 5 -> 14
      
      pageNeighbours = 1
      1 <- 4 5 6 -> 14
      
      pageNeighbours = 2
      1 <- 3 4 5 6 7 -> 14
    
    */
    this.pageNeighbours = typeof pageNeighbours === 'number' ? Math.max(0, Math.min(pageNeighbours, 2)) : 0

    //Quantas páginas vão ter
    /*
      Exemplo 
      totalRecords = 30
      pageLimit = 10 //Mostrar 10 itens por página
      Pagination vai conter:
        <- 1 2 3 ->
    */
    this.totalPages = Math.ceil(this.totalRecords / this.pageLimit)

    this.state = { currentPage: 1 };
  }
}

Pagination.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  pageNeighbours: PropTypes.number,
  onPageChanged: PropTypes.func
};

export default Pagination