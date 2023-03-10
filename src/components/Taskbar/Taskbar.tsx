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
        style={{ bottom: "-5" }}
        class="flex md:hidden fixed bottom-0 right-0 left-0 w-screen bg-neutral-700 justify-center shadow shadow-slate-400"
      >
        <div
          id="toggle-component"
          class="flex flex-col h-8 md:hidden w-8 sticky object-bottom justify-center items-center py-0.5"
        >
          <div class="flex h-0.5 w-full my-0.5 bg-white">&nbsp;</div>
          <div class="flex h-0.5 w-full my-0.5 bg-white">&nbsp;</div>
          <div class="flex h-0.5 w-full my-0.5 bg-white">&nbsp;</div>
        </div>
      </div>
      {showNav && (
        <div class="flex flex-col fixed bottom-0 mb-14 transition-all h-fit w-full bg-white shadow shadow-slate-400">
          <a href="/MoundsViewXC/" class="m-4 text-gray-400 hover:text-black">
            HOME
          </a>
          <a href="/MoundsViewXC/schedule" class="m-4 text-gray-400 hover:text-black">
            SCHEDULE
          </a>
          <a href="/MoundsViewXC/results" class="m-4 text-gray-400 hover:text-black">
            RESULTS
          </a>
          <a href="/MoundsViewXC/coaches" class="m-4 text-gray-400 hover:text-black">
            COACHES
          </a>
          {/* <a href="/captains" class="m-6 text-gray-400 hover:text-black">
            CAPTAINS
          </a> */}
          <a href="/MoundsViewXC/media" class="m-4 text-gray-400 hover:text-black">
            MEDIA
          </a>
        </div>
      )}
    </>
  );
};

export default Taskbar;
