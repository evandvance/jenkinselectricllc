'use server';
import { S3, PutObjectCommand } from '@aws-sdk/client-s3';
import { FormData } from './ApplianceUploadForm';
import { FieldValues } from 'react-hook-form';

const handleFileFormSubmission = async (formData: FieldValues) => {
  const file = formData.imageFile;

  const fileName = file?.name;
  const fileType = file?.type;

  const binaryFile = await file.arrayBuffer();
  const fileBuffer = Buffer.from(binaryFile);

  const s3client = new S3({
    region: 'us-east-1',
    credentials: {
      accessKeyId: process.env.AWS_PUBLIC_KEY!,
      secretAccessKey: process.env.AWS_SECRET_KEY!,
    },
  });
};

export { handleFileFormSubmission };
