const jwt = require('jsonwebtoken');

exports.profile = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(' ')[1];

    if (!token || !token)
      return res.status(401).json({ message: 'Token not provided' });

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const id = payload.id;

    res.status(200).json({ message: 'Access granted!' });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
