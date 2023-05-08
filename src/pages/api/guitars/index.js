import db from '../../../../lib/db';
import Guitar from '../../../../models/Guitar';

// GET /api/guitars
const handler = async (req, res) => {
  await db.connect();
  const guitars = await Guitar.find();

  res.status(200).json(guitars);
};

export default handler;
