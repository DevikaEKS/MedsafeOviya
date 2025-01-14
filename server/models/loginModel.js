const db = require('../config/db');

const getUserByUsername = async (email) => {
  const [rows] = await db.execute('SELECT * FROM login WHERE username = ?', [email]);
  return rows[0];
};




// Update password
const updatePassword = async (email, newPassword) => {
  try {
    const query = 'UPDATE login SET password = ? WHERE username = ?';
    await db.execute(query, [newPassword, email]);
  } catch (error) {
    throw new Error('Error updating password: ' + error.message);
  }
};


module.exports = { getUserByUsername, updatePassword };