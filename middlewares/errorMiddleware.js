const errorMiddleware = (err, req, res, next) => {
  console.log(err);

  res.status(500).send({
    err,
  });
};
export default errorMiddleware;
