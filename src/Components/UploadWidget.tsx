import { useEffect, useRef, MutableRefObject } from 'react';

///uploading with sdk

interface UploadWidget {
  current?: any;
}

const UploadWidget = () => {
  const cloudinaryRef: MutableRefObject<any> = useRef();
  const widgetRef: MutableRefObject<UploadWidget | null> = useRef(null);

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    console.log('🚀 ~ useEffect ~ cloudinaryRef.current:', cloudinaryRef.current);

    widgetRef.current = cloudinaryRef.current?.createUploadWidget(
      {
        cloudName: 'deqnx9kwl',
        uploadPreset: 'ytsy9b8r',
      },
      (err: any, result: any) => {
        console.log('🚀 ~ useEffect ~ result:', result);
      }
    );
  }, []);

  return (
    <div>
      <button className="" onClick={() => widgetRef.current?.open()}>
        Upload
      </button>
    </div>
  );
};

export default UploadWidget;