import React, {useState} from 'react';
import {uploadFile} from "../../services/image.service";
import {Button, Loader} from "semantic-ui-react";

interface IProps {
    children: any;
    changeUrl: (url: string) => any
}

const ImageUploader = (props: IProps) => {
    const [isUploading, upload] = useState(false);


    const handleUploadFile = (e: any) => {
        const file = e.target.files[0];
        upload(true);


        const data = new FormData();
        data.append('file', file);

        if (uploadFile) {
            uploadFile(data)
                .then(({link}) => {
                    upload(false);
                    props.changeUrl(link)
                })
                .catch(error => {
                    console.log(error)
                });
        }
    };


    return (
        <Button color="teal" icon labelPosition="left" as="label"
                id={'btn'} style={{paddingLeft: "0 !important", paddingRight: "0 !important"}}>
            {isUploading ?   <Loader active inline size={"mini"}/>: "Upload photo" }
            <input
                name="image"
                type="file"
                onChange={handleUploadFile}
                accept=".jpg, .jpeg, .png"
                hidden
                disabled={isUploading}
            />
        </Button>
    )
};


export default ImageUploader;