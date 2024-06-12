'use client';
import { useFormState } from 'react-dom';

const ApplianceUploadForm = () => {
  return (
    <>
      <form className="flex flex-col p-2" action="">
        <div className="border rounded-xl border-jellcblue bg-slate-300 p-3 flex flex-col space-y-2">
          <label className="text-2xl" htmlFor="image-file">
            Upload images
          </label>
          <input type="file" name="image-file[]" id="image-file" />
        </div>
        <button
          className="flex justify-center items-center m-5 w-54 h-16 text-2xl bg-gradient-to-r from-jellcdarkblue to-jellcblue text-white rounded-xl hover:bg-white hover:text-jellcblue "
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ApplianceUploadForm;
