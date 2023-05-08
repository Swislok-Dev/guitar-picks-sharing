import db from '../../../../lib/db';
import Guitar from '../../../../models/Guitar';

// GET /api/guitars/:id
const handler = async (req, res) => {
  await db.connect();
  const guitar = await Guitar.findById(req.query.id);
  await db.disconnect();
  res.send(guitar);
};

export default handler;
