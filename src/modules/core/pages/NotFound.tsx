import notFound from "../../../assets/images/page_not_found.svg";
const NotFound = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <p className="text-6xl font-thin">404 NOT FOUND!</p>
      <p className="text-xl font-normal mt-10">This page doesnot exist</p>
      <img className="h-80 w-80" src={notFound} />
    </div>
  );
};

export default NotFound;
