export interface OfferType {
  id: number;
  label: string;
  cta: string;
  bg: string;
  badge: string;
  text: string;
}

export const data = {
  offers: [
    {
      id: 1,
      label: 'Offer AC Service',
      cta: 'Get 25%',
      bg: '#EAF6EF',
      badge: '#6A9B7E',
      text: '#33383F',
    },
    {
      id: 2,
      label: 'Offer',
      cta: 'Get 15%',
      bg: '#E9F6FC',
      badge: '#83C1DE',
      text: '#33383F',
    },
  ],
};
