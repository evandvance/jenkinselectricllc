import { PermitVideo } from '@prisma/client';
import { useForm, FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dispatch, SetStateAction, useState } from 'react';
import GreenButton from '@/components/Buttons/GreenButton';
import { VideoSchema, VideoType } from '@/interfaces/VideoInterface';

interface VideoCardProps {
  video?: PermitVideo;
  setVideo: Dispatch<SetStateAction<PermitVideo | undefined>>;
}

const VideoCard = ({ video, setVideo }: VideoCardProps) => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VideoType>({
    resolver: zodResolver(VideoSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    const formData = new FormData();

    formData.append('url', data.url);

    let result;
    if (video === null) {
      const response = await fetch('/api/admin/videos', {
        method: 'POST',
        body: formData,
      });

      result = (await response.json()) as ApiResponse<PermitVideo>;

      if (result.status !== 201) {
        setError(true);
        return;
      }
    } else {
      const response = await fetch('/api/admin/videos', {
        method: 'PUT',
        body: formData,
      });

      result = (await response.json()) as ApiResponse<PermitVideo>;

      if (result.status !== 201) {
        setError(true);
        return;
      }
    }

    setSuccess(true);
    setVideo(result.data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" bg-slate-300 p-3 flex flex-col lg:flex-row justify-center items-center rounded space-y-3 lg:justify-around lg:space-y-0"
    >
      {error && (
        <p className="text-red-500 text-2xl text-center w-full px-5 m-2">
          Error - Something when wrong on the server
        </p>
      )}
      {success && (
        <p className="text-2xl text-center w-full px-5 text-green-600 m-2">
          Video Updated Successfully
        </p>
      )}
      <div className="flex flex-col m-5">
        <label className="text-xl" htmlFor="url">
          Video Url
        </label>
        <input
          {...register('url')}
          defaultValue={video?.url}
          className="rounded p-2 text-black w-60"
          type="text"
          name="url"
          id="url"
        />
        {errors.url && <p className="text-red-500">{errors.url.message}</p>}
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="lg:h-[27px]"></div>
        <GreenButton type="submit" className="p-2">
          {video === null ? 'Create' : 'Update'}
        </GreenButton>
      </div>
    </form>
  );
};

export default VideoCard;
