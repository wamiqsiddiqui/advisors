const CardLayoutSkeleton = () => {
  const displayArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <section
      role="list"
      className="grid grid-cols-1 gap-8 lg:gap-14 xl:gap-8 sm:grid-cols-2 xl:grid-cols-3 h-screen animate-pulse"
    >
      {displayArray?.map(() => (
        <section className="min-w-[21vw] mx-1 rounded-lg px-4 pb-2 border-[1px] border-border-normal h-fit">
          <div className="w-full relative mb-6">
            <div
              className={`absolute ${"right-0"} my-3 h-8 w-8 bg-slate-200 animate-pulse`}
            />
          </div>
          <div>
            <div className="w-14 h-14 rounded-full my-4 bg-slate-200 animate-pulse" />
            <div className="bg-slate-200 animate-pulse h-6 mb-2 w-24" />
            <div className="mb-2 bg-slate-200 animate-pulse h-4 w-48" />
          </div>
          <div className="w-full h-8 bg-slate-200 animate-pulse" />
        </section>
      ))}
    </section>
  );
};

export default CardLayoutSkeleton;
