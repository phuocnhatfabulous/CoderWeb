import { useState, useEffect } from 'react';
import { AiOutlineFullscreen, AiOutlineFullscreenExit, AiOutlineSetting } from 'react-icons/ai';
import { ISettings } from '../Playground';
import SettingsModal from '@/components/Modals/SettingsModal';
import DropDown from '@/components/DropDown';

type PreferenceNavProps = {
  settings: ISettings;
  setSettings: React.Dispatch<React.SetStateAction<ISettings>>;
};

const PreferenceNav: React.FC<PreferenceNavProps> = ({ setSettings, settings }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreen = () => {
    if (isFullScreen) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  };

  useEffect(() => {
    function exitHandler(e: any) {
      if (!document.fullscreenElement) {
        setIsFullScreen(false);
        return;
      }
      setIsFullScreen(true);
    }

    if (document.addEventListener) {
      document.addEventListener('fullscreenchange', exitHandler);
      document.addEventListener('webkitfullscreenchange', exitHandler);
      document.addEventListener('mozfullscreenchange', exitHandler);
      document.addEventListener('MSFullscreenChange', exitHandler);
    }
  }, [isFullScreen]);

  return (
    <div className="mt-5 ">
      <div className="flex h-11 w-full items-center justify-between bg-dark-layer-2 ">
        
          {/* <button className="flex cursor-pointer items-center rounded bg-dark-fill-3 px-2 py-1.5 font-medium  text-dark-label-2 hover:bg-dark-fill-2 focus:outline-none ">
          <div className="">
            <div className="text-label-2 text-xs dark:text-dark-label-2 ">
              <DropDown />
            </div>
          </div>
        </button> */}
          <DropDown />

        <div className="m-2 flex items-center">
          <button
            className="preferenceBtn group"
            onClick={() => setSettings({ ...settings, settingsModalIsOpen: true })}
          >
            <div className="h-4 w-4 text-lg font-bold text-dark-gray-6">
              <AiOutlineSetting />
            </div>
            <div className="preferenceBtn-tooltip">Settings</div>
          </button>

          <button className="preferenceBtn group" onClick={handleFullScreen}>
            <div className="h-4 w-4 text-lg font-bold text-dark-gray-6">
              {!isFullScreen ? <AiOutlineFullscreen /> : <AiOutlineFullscreenExit />}
            </div>
            <div className="preferenceBtn-tooltip">Full Screen</div>
          </button>
        </div>
        {settings.settingsModalIsOpen && <SettingsModal settings={settings} setSettings={setSettings} />}
      </div>
    </div>
  );
};
export default PreferenceNav;
