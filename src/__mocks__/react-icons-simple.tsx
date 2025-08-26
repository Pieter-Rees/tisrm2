import React from 'react';

interface IconProps {
    size?: string | number;
    [key: string]: unknown;
}

// Simple mock for react-icons components
const createIconMock = (name: string) => {
    const IconComponent = React.forwardRef<SVGSVGElement, IconProps>(({ size, ...props }, ref) => (
        <svg
            ref={ref}
            data-testid={`icon-${name}`}
            data-size={size}
            width={size || "1em"}
            height={size || "1em"}
            fill="currentColor"
            viewBox="0 0 16 16"
            {...props}
        >
            <title>{name}</title>
        </svg>
    ));
    IconComponent.displayName = name;
    return IconComponent;
};

// Export all icons as named exports
export const BsStarFill = createIconMock('BsStarFill');
export const BsLinkedin = createIconMock('BsLinkedin');
export const BsArrowRight = createIconMock('BsArrowRight');
export const BsTelephone = createIconMock('BsTelephone');
export const BsDownload = createIconMock('BsDownload');
export const BsEnvelope = createIconMock('BsEnvelope');
export const BsGeoAlt = createIconMock('BsGeoAlt');
export const BsGlobe = createIconMock('BsGlobe');
export const BsStar = createIconMock('BsStar');
export const BsStarHalf = createIconMock('BsStarHalf');
export const BsHeart = createIconMock('BsHeart');
export const BsHeartFill = createIconMock('BsHeartFill');
export const BsCheck = createIconMock('BsCheck');
export const BsX = createIconMock('BsX');
export const BsPlus = createIconMock('BsPlus');
export const BsDash = createIconMock('BsDash');
export const BsSearch = createIconMock('BsSearch');
export const BsFilter = createIconMock('BsFilter');
export const BsSortDown = createIconMock('BsSortDown');
export const BsSortUp = createIconMock('BsSortUp');
export const BsGrid = createIconMock('BsGrid');
export const BsList = createIconMock('BsList');
export const BsEye = createIconMock('BsEye');
export const BsEyeSlash = createIconMock('BsEyeSlash');
export const BsLock = createIconMock('BsLock');
export const BsUnlock = createIconMock('BsUnlock');
export const BsPerson = createIconMock('BsPerson');
export const BsPersonFill = createIconMock('BsPersonFill');
export const BsGear = createIconMock('BsGear');
export const BsHouse = createIconMock('BsHouse');
export const BsHouseFill = createIconMock('BsHouseFill');
export const BsBookmark = createIconMock('BsBookmark');
export const BsBookmarkFill = createIconMock('BsBookmarkFill');
export const BsCalendar = createIconMock('BsCalendar');
export const BsClock = createIconMock('BsClock');
export const BsChat = createIconMock('BsChat');
export const BsChatFill = createIconMock('BsChatFill');
export const BsBell = createIconMock('BsBell');
export const BsBellFill = createIconMock('BsBellFill');
export const BsTrash = createIconMock('BsTrash');
export const BsPencil = createIconMock('BsPencil');
export const BsSave = createIconMock('BsSave');
export const BsShare = createIconMock('BsShare');
export const BsPrint = createIconMock('BsPrint');
export const BsCamera = createIconMock('BsCamera');
export const BsImage = createIconMock('BsImage');
export const BsFile = createIconMock('BsFile');
export const BsFolder = createIconMock('BsFolder');
export const BsFolderFill = createIconMock('BsFolderFill');
export const BsMusicNote = createIconMock('BsMusicNote');
export const BsPlay = createIconMock('BsPlay');
export const BsPause = createIconMock('BsPause');
export const BsStop = createIconMock('BsStop');
export const BsSkipBackward = createIconMock('BsSkipBackward');
export const BsSkipForward = createIconMock('BsSkipForward');
export const BsVolumeUp = createIconMock('BsVolumeUp');
export const BsVolumeMute = createIconMock('BsVolumeMute');
export const BsBrightnessHigh = createIconMock('BsBrightnessHigh');
export const BsBrightnessLow = createIconMock('BsBrightnessLow');
export const BsMoon = createIconMock('BsMoon');
export const BsSun = createIconMock('BsSun');
export const BsCloud = createIconMock('BsCloud');
export const BsCloudRain = createIconMock('BsCloudRain');
export const BsCloudSnow = createIconMock('BsCloudSnow');
export const BsLightning = createIconMock('BsLightning');
export const BsWind = createIconMock('BsWind');
export const BsThermometer = createIconMock('BsThermometer');
export const BsDroplet = createIconMock('BsDroplet');
export const BsUmbrella = createIconMock('BsUmbrella');
export const BsTree = createIconMock('BsTree');
export const BsFlower = createIconMock('BsFlower');
export const BsLeaf = createIconMock('BsLeaf');
export const BsSeed = createIconMock('BsSeed');
export const BsBug = createIconMock('BsBug');
export const BsFish = createIconMock('BsFish');
export const BsBird = createIconMock('BsBird');
export const BsCat = createIconMock('BsCat');
export const BsDog = createIconMock('BsDog');
export const BsHorse = createIconMock('BsHorse');
export const BsCow = createIconMock('BsCow');
export const BsPig = createIconMock('BsPig');
export const BsSheep = createIconMock('BsSheep');
export const BsChicken = createIconMock('BsChicken');
export const BsDuck = createIconMock('BsDuck');
export const BsGoose = createIconMock('BsGoose');
export const BsTurkey = createIconMock('BsTurkey');
export const BsRabbit = createIconMock('BsRabbit');
export const BsHamster = createIconMock('BsHamster');
export const BsGuineaPig = createIconMock('BsGuineaPig');
export const BsGerbil = createIconMock('BsGerbil');
export const BsMouse = createIconMock('BsMouse');
export const BsRat = createIconMock('BsRat');
export const BsSquirrel = createIconMock('BsSquirrel');
export const BsChipmunk = createIconMock('BsChipmunk');
export const BsBeaver = createIconMock('BsBeaver');
export const BsOtter = createIconMock('BsOtter');
export const BsRaccoon = createIconMock('BsRaccoon');
export const BsSkunk = createIconMock('BsSkunk');
export const BsFox = createIconMock('BsFox');
export const BsWolf = createIconMock('BsWolf');
export const BsBear = createIconMock('BsBear');
export const BsLion = createIconMock('BsLion');
export const BsTiger = createIconMock('BsTiger');
export const BsLeopard = createIconMock('BsLeopard');
export const BsCheetah = createIconMock('BsCheetah');
export const BsJaguar = createIconMock('BsJaguar');
export const BsPanther = createIconMock('BsPanther');
export const BsLynx = createIconMock('BsLynx');
export const BsBobcat = createIconMock('BsBobcat');
export const BsCougar = createIconMock('BsCougar');
export const BsMountainLion = createIconMock('BsMountainLion');
export const BsPuma = createIconMock('BsPuma');
