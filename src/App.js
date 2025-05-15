import React from 'react';
import FilterableProductTable from './components/FilterableProductTable';
import { PRODUCTS } from './data';

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
