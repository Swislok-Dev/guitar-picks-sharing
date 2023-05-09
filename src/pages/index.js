import React from 'react';
import GuitarItem from '../components/GuitarItem';
import Layout from '../components/Layout';
import Modal from '../components/Modal';
import AddGuitarForm from '@/components/guitar/AddGuitarForm';
import clientPromise from '../../lib/mongodb';

export default function Home({ guitars }) {
  const [show, setShow] = React.useState(false);

  const onClose = () => {
    setShow(false);
  };

  return (
    <Layout>
      <div className="showcase-add flex flex-col justify-center text-center my-8 gap-4 m-auto">
        <h3>Add a guitar</h3>
        <div onClick={() => setShow(true)} className="pick">
          <span className="text">&#43;</span>
        </div>
      </div>
      <div className="my-20 flex flex-wrap justify-around gap-4">
        {guitars.map((guitar) => (
          <GuitarItem guitar={guitar} key={guitar.id} />
        ))}
      </div>
      <Modal
        title="Add a guitar"
        show={show}
        onClose={() => onClose()}
        content={<AddGuitarForm onClose={onClose} />}
      />
    </Layout>
  );
}

export async function getServerSideProps() {
  const client = await clientPromise;
  const db = client.db('guitar-picks');
  const guitars = await db.collection('guitars').find({}).toArray();
  return {
    props: {
      guitars: JSON.parse(JSON.stringify(guitars)),
    },
  };
}
