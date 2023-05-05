import db from '../../../lib/db';
import User from '../../../models/User';
import data from '../../../lib/seedData';
import Guitar from '../../../models/Guitar';

const handler = async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await Guitar.deleteMany();
  await Guitar.insertMany(data.guitars)
  const users = await User.find({}, "name isAdmin");
  const guitars = await Guitar.find({});
  await db.disconnect();
  res.send({ message: 'Users and Guitars seeded successfully', users, guitars });
};

export default handler;
