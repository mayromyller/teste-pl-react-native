import { format } from 'date-fns';

export function dateFormatter(date: string) {
  if (!date) return 'Not set';
  const formattedDate = format(new Date(date), 'dd/MM/yyyy');

  return formattedDate ?? 'Not set';
}
