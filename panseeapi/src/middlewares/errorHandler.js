export const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Ghi log lỗi ra console
  res.status(500).json({ message: 'Something went wrong!' });
};
