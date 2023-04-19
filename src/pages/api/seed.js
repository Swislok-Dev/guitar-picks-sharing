import db from '../../../lib/db';
import User from '../../../models/User';
import data from '../../../lib/seedData';

const handler = async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  const users = await User.find({}, "name isAdmin");
  await db.disconnect();
  res.send({ message: 'Users seeded successfully', users });
};

export default handler;
