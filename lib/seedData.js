import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Cory',
      password: bcrypt.hashSync('cmacma'),
      isAdmin: true,
    },
    {
      name: 'Bob',
      password: bcrypt.hashSync('123asd'),
      isAdmin: false,
    },
  ],
};

export default data;
