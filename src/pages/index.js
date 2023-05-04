import React from 'react';
import GuitarItem from '../components/GuitarItem';
import Layout from '../components/Layout';
import Modal from '../components/Modal';
import AddGuitarForm from '@/components/guitar/AddGuitarForm';

export default function Home() {
  const [show, setShow] = React.useState(false);

  const onClose = () => {
    setShow(false)
  }
  const exampleImage1 =
    'https://m.media-amazon.com/images/I/71ZlrIEmxOL._AC_SY879_.jpg';
  const exampleImage2 =
    'https://c1.zzounds.com/media/productmedia/fit,600by800/quality,85/1_Full_Straight_Front_40878-415561e4d53a9ab83db782d02d3487bf.jpg';
  const exampleImage3 =
    'https://m.media-amazon.com/images/I/51dk8encHuL._AC_SL1200_.jpg';

  return (
    <Layout>
      <div className="showcase-add flex flex-col justify-center text-center my-8 gap-4 m-auto">
        <h3>Add a guitar</h3>
        <div onClick={() => setShow(true)} className="pick">
          <span className="text">&#43;</span>
        </div>
      </div>
      <div className="my-20 flex flex-wrap justify-around gap-4">
        <GuitarItem imageUrl={exampleImage1} />
        <GuitarItem imageUrl={exampleImage2} />
        <GuitarItem imageUrl={exampleImage3} />
      </div>
      <Modal
        title="Add a guitar"
        show={show}
        onClose={() => onClose()}
        content={<AddGuitarForm onClose={onClose}/>}
      />
    </Layout>
  );
}
