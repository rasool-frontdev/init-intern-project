import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex h-screen items-center flex-col justify-center">
      <h6 className="font-medium text-6xl">404 Not Found</h6>
      <p>You are visited page not found</p>
      <Link
        href={"/"}
        className="bg-red-500 mt-3 p-2 rounded-md text-white"
      >
        Back to home page
      </Link>
    </div>
  );
};

export default NotFoundPage;
