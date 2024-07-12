import { ApplianceIcon } from '~/assets/icons/applianceIcon';
import { ArrowForwardIcon } from '~/assets/icons/arrowForwardIcon';
import { BeautyIcon } from '~/assets/icons/beautyIcon';
import { CleaningIcon } from '~/assets/icons/cleaningIcon';
import { ElectronicIcon } from '~/assets/icons/electronicsIcon';
import { PaintingIcon } from '~/assets/icons/paintingIcon';
import { PlumbingIcon } from '~/assets/icons/plumbingIcon';
import { RepairIcon } from '~/assets/icons/repairIcon';
import { SalonIcon } from '~/assets/icons/salonIcon';
import { ShiftingIcon } from '~/assets/icons/shiftingIcon';

export type ItensMap = {
  id: number;
  label: string;
  icon: React.JSX.Element;
  bg: string;
  border?: string;
  navigateTo?: string;
};

export const shortItemsMap: ItensMap[] = [
  {
    id: 1,
    label: 'AC Repair',
    icon: <RepairIcon />,
    bg: '#FFBC99',
  },
  {
    id: 2,
    label: 'Beauty',
    icon: <BeautyIcon />,
    bg: '#CABDFF',
  },
  {
    id: 3,
    label: 'Appliance',
    icon: <ApplianceIcon />,
    bg: '#B1E5FC',
  },
  {
    id: 4,
    label: 'See All',
    icon: <ArrowForwardIcon />,
    bg: 'transparent',
    border: '#ECECEC',
    navigateTo: 'CategoriesScreen',
  },
];

export const itensMap: ItensMap[] = [
  {
    id: 1,
    label: 'AC Repair',
    icon: <RepairIcon />,
    bg: '#FFBC99',
  },
  {
    id: 2,
    label: 'Beauty',
    icon: <BeautyIcon />,
    bg: '#CABDFF',
  },
  {
    id: 3,
    label: 'Appliance',
    icon: <ApplianceIcon />,
    bg: '#B1E5FC',
  },
  {
    id: 4,
    label: 'Painting',
    icon: <PaintingIcon />,
    bg: '#B5EBCD',
  },
  {
    id: 5,
    label: 'Cleaning',
    icon: <CleaningIcon />,
    bg: '#FFD88D',
  },
  {
    id: 6,
    label: 'Plumbing',
    icon: <PlumbingIcon />,
    bg: '#CBEBA4',
  },
  {
    id: 7,
    label: 'Electronics',
    icon: <ElectronicIcon />,
    bg: '#FB9B9B',
  },
  {
    id: 8,
    label: 'Shifting',
    icon: <ShiftingIcon />,
    bg: '#F8B0ED',
  },
  {
    id: 9,
    label: "Men's Salon",
    icon: <SalonIcon />,
    bg: '#AFC6FF',
  },
];
