import { useState } from "preact/hooks";

const Taskbar = () => {
  const [showNav, setShowNav] = useState(false);

  const clickHandler = () => {
    setShowNav((prevValue) => !prevValue);
  };

  return (
    <>
      <div
        id="full width container"
        onClick={clickHandler}
        class="flex fixed bottom-0 right-0 left-0 w-screen bg-slate-50 justify-end pb-2"
      >
        <div
          id="toggle-component"
          class="flex flex-col h-16 md:hidden w-14 mr-2 sticky object-bottom justify-center"
        >
          <div class="flex h-1 w-full my-1 bg-green-700">&nbsp;</div>
          <div class="flex h-1 bg-black w-full my-1 bg-green-700">&nbsp;</div>
          <div class="flex h-1 bg-black w-full my-1 bg-green-700">&nbsp;</div>
        </div>
      </div>
      {showNav && (
        <div class="flex flex-col fixed bottom-0 mb-16 transition-all h-fit w-full bg-white border-t-4 border-green-700">
          <a href="/" class="m-6 text-gray-400 hover:text-black">
            HOME
          </a>
          <a href="/schedule" class="m-6 text-gray-400 hover:text-black">
            SCHEDULE
          </a>
          <a href="/results" class="m-6 text-gray-400 hover:text-black">
            RESULTS
          </a>
          <a href="/coaches" class="m-6 text-gray-400 hover:text-black">
            COACHES
          </a>
          <a href="/captains" class="m-6 text-gray-400 hover:text-black">
            CAPTAINS
          </a>
          <a href="/media" class="m-6 text-gray-400 hover:text-black">
            MEDIA
          </a>
        </div>
      )}
    </>
  );
};

export default Taskbar;
