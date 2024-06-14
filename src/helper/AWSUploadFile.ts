import {
  S3,
  PutObjectCommandInput,
  PutObjectCommand,
} from '@aws-sdk/client-s3';

export const uploadFile = async (file: File, folder: string) => {
  const fileBuffer = Buffer.from(await file.arrayBuffer());

  const fileName = cleanseName(file.name);

  const s3client = new S3({
    region: 'us-east-1',
    credentials: {
      accessKeyId: process.env.AWS_PUBLIC_KEY!,
      secretAccessKey: process.env.AWS_SECRET_KEY!,
    },
  });

  const options: PutObjectCommandInput = {
    Bucket: 'jenkinselectricllc',
    Key: `images/${folder}/${fileName}`,
    Body: fileBuffer,
    ContentType: file.type,
    ContentLength: fileBuffer.length,
  };

  const result = await s3client.send(new PutObjectCommand(options));

  return `https://mediacdn.jenkinselectric.llc/images/${folder}/${fileName}`;
};

export const cleanseName = (fileName: string) =>
  fileName.toLocaleLowerCase().replaceAll(' ', '_');
