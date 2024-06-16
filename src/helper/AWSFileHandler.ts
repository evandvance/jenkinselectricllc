import {
  S3,
  PutObjectCommandInput,
  PutObjectCommand,
  DeleteObjectCommand,
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

  const Key = `images/${
    process.env.NODE_ENV === 'development' ? 'dev/' : ''
  }${folder}/${fileName}`;

  console.log(Key);
  const options: PutObjectCommandInput = {
    Bucket: 'jenkinselectricllc',
    Key: Key,
    Body: fileBuffer,
    ContentType: file.type,
    ContentLength: fileBuffer.length,
  };

  const result = await s3client.send(new PutObjectCommand(options));

  return `https://mediacdn.jenkinselectric.llc/${Key}`;
};

export const cleanseName = (fileName: string) =>
  fileName.toLocaleLowerCase().replaceAll(' ', '_');

/**This is broken rn but in a rush so dont have time to figure it out. */
export async function deleteFile(folder: string) {
  const Key = `images/${
    process.env.NODE_ENV === 'development' ? 'dev/' : ''
  }${folder}`;

  const s3client = new S3({
    region: 'us-east-1',
    credentials: {
      accessKeyId: process.env.AWS_PUBLIC_KEY!,
      secretAccessKey: process.env.AWS_SECRET_KEY!,
    },
  });

  const options = {
    Bucket: 'jenkinselectricllc',
    Key: Key,
  };

  const result = await s3client.send(new DeleteObjectCommand(options));

  console.log(result);
  return;
}
