import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Btn } from 'src/assets/commonStyle/styles';
import GoodsNavbar from 'src/components/shared/goodsNavbar/goodsNavbar';
import FileUpload from './FileUpload';
import Axios from 'axios';

const Goods = [
  { key: 1, value: 'Goods1' },
  { key: 2, value: 'Goods2' },
  { key: 3, value: 'Goods3' },
];

function UploadProduct(props) {
  const { userId } = useSelector((state) => state.auth);

  const [TitleValue, setTitleValue] = useState('');
  const [DescriptionValue, setDescriptionValue] = useState('');
  const [PriceValue, setPriceValue] = useState(0);
  const [GoodsValue, setGoodsValue] = useState(1);
  const [Images, setImages] = useState([]);

  const onTitleChange = (e) => {
    setTitleValue(e.currentTarget.value);
  };
  const onDescriptionChange = (e) => {
    setDescriptionValue(e.currentTarget.value);
  };
  const onPriceChange = (e) => {
    setPriceValue(e.currentTarget.value);
  };
  const onGoodsSelectChange = (e) => {
    setGoodsValue(e.currentTarget.value);
  };

  const updateImages = (newImages) => {
    console.log(newImages);
    setImages(newImages);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      !TitleValue ||
      !DescriptionValue ||
      !PriceValue ||
      !GoodsValue ||
      !Images
    ) {
      return alert('fill all the fields first!');
    }

    const variables = {
      writer: 'Master',
      title: TitleValue,
      description: DescriptionValue,
      price: PriceValue,
      images: Images,
      goods: GoodsValue,
    };

    Axios.post('/api/product/uploadProduct', variables).then((res) => {
      if (res.data.success) {
        alert('Product Successfully Uploaded');
        props.history.push('/');
      } else {
        alert('Failed to upload Product');
      }
    });
  };

  return (
    <div style={{ width: '100%' }}>
      <GoodsNavbar />
      <div style={{ maxWidth: '1000px', margin: '2rem auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 level={2}>Upload Product</h1>
        </div>

        <form onSubmit={onSubmit} className="row">
          {/* Drop zone */}
          <div className="col-4">
            <FileUpload
              refreshFunction={updateImages}
              style={{ float: 'left' }}
            />
          </div>
          <div className="col-8">
            <br />
            <br />
            <label>Title</label>
            <input
              type="text"
              class="form-control"
              onChange={onTitleChange}
              value={TitleValue}
              style={{ width: '100%' }}
            />
            <br />
            <br />
            <label>Description</label>
            <br />
            <textarea
              class="form-control"
              onChange={onDescriptionChange}
              value={DescriptionValue}
              style={{ width: '100%' }}
            />
            <br />
            <br />
            <label>Price</label>
            <br />
            <input onChange={onPriceChange} value={PriceValue} />
            <br />
            <select onChange={onGoodsSelectChange}>
              {Goods.map((item) => (
                <option key={item.key} value={item.key}>
                  {item.value}
                </option>
              ))}
            </select>
            <br />
            <br />
            <Btn onClick={onSubmit}>Submit</Btn>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UploadProduct;