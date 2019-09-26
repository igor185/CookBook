import {Form} from "multiparty";
import * as path from "path";
import axios from "axios";
import {imgurId} from "../config/imgur.config";

const base64Img = require("base64-img");

export const uploadImage = (req: any) =>
    new Promise<any>((resolve, reject) => {
        const contentType = req.headers["content-type"];

        if (contentType && contentType.indexOf("multipart") === 0) {
            const form = new Form({
                autoFiles: true,
                uploadDir: path.resolve(`${__dirname}/../../../client/build/images`),
                maxFilesSize: 1048576 * 3
            });
            form.parse(req, function (err: any, fields: any, files: any): any {
                if (err) return reject(err);
                base64Img.base64(path.resolve(files.file[0].path), (err: any, data: any) => {
                    uploadToImgur(data)
                        .then(url => resolve(url))
                        .catch(e => reject(e));
                });

            });
        } else {
            reject(new Error("Bad request"));
        }
    });

const uploadToImgur = async (image: any) => {
    try {
        const data = await axios.post(
            "https://api.imgur.com/3/upload",
            {
                image
            },
            {
                headers: {Authorization: `Client-ID ${imgurId}`}
            }
        );
        return data.data.data.link;
    } catch (e) {
    }
};