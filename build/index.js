export default async ({ req, res, log, error }) => {
    return res.json({ message: "Hello world", param: req?.params });
};
