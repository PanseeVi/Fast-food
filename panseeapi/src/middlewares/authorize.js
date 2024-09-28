export const authorize = (requiredRole) => (req, res, next) => {
  if (!req.user || !req.user.roles.includes(requiredRole)) {
    return res.status(403).json({ message: 'Forbidden' });
  }
  next();
};
