export const errorMiddleware = (err: any, req: any, res: any, next: any) => {
  console.log(err);

  // if (err instanceof ApiError || err instanceof StorageError) {
  //   return res
  //     .status(err.status)
  //     .json({ message: err.message, errors: err.error });
  // }

  return res.status(500).json({ message: "API Error" });
};