"use client"
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
      focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg
      px-4 py-2.5 flex items-center justify-center gap-2 cursor-pointer"
    >
      {pending ? (
        <>
          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          Saving...
        </>
      ) : (
        "Save Note"
      )}
    </button>
  );
};

export default SubmitButton;
