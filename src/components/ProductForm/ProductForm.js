import React, { useContext } from 'react';
import { Button } from '@tiendanube/components';
import { DownloadIcon } from '@tiendanube/icons';
import { useForm } from 'react-hook-form';
import { ProductContext } from '../../contexts/product/ProductContext';

import './ProductForm.scss';

const ProductForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { addProduct } = useContext(ProductContext);

  const handleFormSubmit = (product) => {
    addProduct(product);
    reset();
  }

  return (
    <form className="centered" onSubmit={handleSubmit(handleFormSubmit)}>
      <h2>Add new product</h2>
      <div>
        <div className="input-wrapper">
          <label className="label" htmlFor="name">Product name</label>
          <input id="name" type="text" {...register('name', {required: true})} />
          {errors.name && <span className="validation-error-message">Product name is required</span>}
        </div>

        <div className="input-wrapper">
          <label className="label" htmlFor="count">Items count</label>
          <input id="count" type="number" defaultValue="0" min="0" {...register('count', { required: true })} />
          {errors.count && <span className="validation-error-message">Items count is required</span>}
        </div>

        <div className="input-wrapper">
          <label className="label" htmlFor="price">Price</label>
          <input id="price" type="number" min="0" step=".01" {...register('price', { required: true })} />
          {errors.price && <span className="validation-error-message">Price is required</span>}
        </div>

        <div className="input-wrapper">
          <label className="label" htmlFor="promotionalPrice">Promotional Price</label>
          <input id="promotionalPrice" type="number" min="0" step=".01" {...register('promotionalPrice', { required: true })} />
          {errors.promotionalPrice && <span className="validation-error-message">Promotional price is required</span>}
        </div>

        <Button appearance="primary" icon={DownloadIcon} type="submit">
          Aceptar
        </Button>
      </div>
    </form>
  );
}

export default ProductForm;
