import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import TableSortLabel from '@mui/material/TableSortLabel';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export default function ProductTableMaterialUI({ productList }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortBy, setSortBy] = useState('');
  const productsPerPage = 5;

  // Sorting function
  const sortedProducts = productList.sort((a, b) => {
    if (sortBy === 'price') {
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    } else if (sortBy === 'rating.rate') {
      return sortOrder === 'asc' ? a.rating.rate - b.rating.rate : b.rating.rate - a.rating.rate;
    }
    // Add more conditions for other fields if needed
    // Default sorting if sortBy is empty or unknown
    return 0;
  });

  // Pagination code
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page in pagination
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  // Toggle sorting order
  const handleSort = (sortByField) => {
    if (sortByField === sortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(sortByField);
      setSortOrder('asc');
    }
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className='materialtablewrapper'>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortBy === 'price'}
                  direction={sortOrder}
                  onClick={() => handleSort('price')}
                  IconComponent={sortOrder === 'asc' ? ArrowDropDownIcon : ArrowDropUpIcon}
                >
                  Price
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortBy === 'rating.rate'}
                  direction={sortOrder}
                  onClick={() => handleSort('rating.rate')}
                  IconComponent={sortOrder === 'asc' ? ArrowDropDownIcon : ArrowDropUpIcon}
                >
                  Rate
                </TableSortLabel>
              </TableCell>
              <TableCell>Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell><img className='productimage' src={product.image} alt={product.title} /></TableCell>
                <TableCell>{product.title}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.rating.rate}</TableCell>
                <TableCell>{product.rating.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        className='product-table-pagination'
        count={Math.ceil(productList.length / productsPerPage)}
        page={currentPage}
        onChange={handleChangePage}
      />
    </div>
  );
}
