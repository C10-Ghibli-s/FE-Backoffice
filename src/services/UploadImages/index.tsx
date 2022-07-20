import React, { FC } from 'react';
import axios from "axios";
import { useState } from "react";
import Image from "next/image";
import { useFormContext } from 'react-hook-form';

type uploadImagesDefaultType = {
    imageUrlDefault?: string,
}

export const UploadImages: FC<uploadImagesDefaultType> = ({imageUrlDefault}:uploadImagesDefaultType) => {
    const methods = useFormContext();
    const {
        register,
        formState: { errors },
      } = methods;

    const [image, setImage] = useState<any>(imageUrlDefault ||
        "https://ih1.redbubble.net/image.3083717230.4980/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg"
      );
    const [imageUrl, setImageUrl] = useState<any>('');

    const fileUploadHandler = (e:any) => {
        e.preventDefault();
        const fd = new FormData();
        fd.append("file", e.target.files[0]);
        fd.append("upload_preset", "my-uploads");
        axios
        .post("https://api.cloudinary.com/v1_1/dnwvfuj9x/image/upload", fd)
        .then(res => {
            console.log(res);
            setImageUrl(res.data.secure_url);
        })
        .catch(err => {
            console.log(err);
        });

        // preview image
        let file = e.target.files[0]
        const reader = new FileReader();
    
        reader.onload = () => {
            if(reader.readyState === 2) {
            setImage(reader.result)
            }
        }
    
        if(file) {
            reader.readAsDataURL(file);
        }
    };

    return (
    <>
        <div className="max-w-sm p-2 border-2 lg:w-4/5 lg:max-w-md lg:h-4/5 border-slate-400/40 rounded-xl">
            <Image
                onClick={() => document?.getElementById("movieBanner")?.click()}
                width="300"
                height="300"
                className="object-scale-down w-full hover:cursor-pointer"
                src={image}
                alt="Movie banner preview"
            />
            </div>
            <div>
            <label
                className="cursor-pointer relative mb-2 transition-colors text-black w-[60px] after:bg-black after:content-[''] hover:after:h-[1px] after:w-full after:absolute after:-left-[0] after:top-6 "
                htmlFor="movieBanner"
            >
                Movie banner*
            </label>
            <input
                className="hidden"
                type="file"
                id="movieBanner"
                onChange={e => {
                    fileUploadHandler(e);
                }}
            />
            {errors.movieBanner && errors.movieBanner?.message && (
              <span className="max-w-xs text-xs text-red-500">
                {errors.movieBanner.message}
              </span>
            )}
            <input 
                className="hidden" 
                type="string" 
                id="movieBannerUrl"
                value={imageUrl}
                {...register('movieBanner')}
            />
        </div>
    </>
  );
}
