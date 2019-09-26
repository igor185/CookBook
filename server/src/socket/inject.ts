export default (io: any) => (req: any, res: any, next: () => void) => {
    req.io = io;
    next();
};