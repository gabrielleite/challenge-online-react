import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@tiendanube/components';
import { DownloadIcon } from '@tiendanube/icons';
import { useForm } from 'react-hook-form';
import { ProductContext } from '../../contexts/product/ProductContext';

import './ProductForm.scss';

const ProductForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { upsertProduct, findProduct } = useContext(ProductContext);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const product = findProduct(id);

    if (product) reset({ ...product });
  }, [id, findProduct, reset]);

  const handleFormSubmit = (product, event) => {
    upsertProduct(product);
    event.target.reset();
    navigate('/products');
  }

  return (
    <form className="centered" onSubmit={handleSubmit(handleFormSubmit)}>
      <h2>Add new product</h2>
      <input type="hidden" {...register('key')} />
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
