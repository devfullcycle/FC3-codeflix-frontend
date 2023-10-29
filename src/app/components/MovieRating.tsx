type Props = {
  rating: string;
};

const borderColor = (rating: string): string => {
  switch (rating) {
    case 'pg':
      return 'text-green-500';
    case 'pg-13':
      return 'text-yellow-500';
    case 'r':
      return 'text-red-500';
    case 'nc-17':
      return 'text-red-700';
    default:
      return 'text-white';
  }
};
export const MovieRating: React.FC<Props> = ({ rating }) => (
  <span
    className={`text-xsm border-1 border border-gray-700 px-2 uppercase ${borderColor(
      rating
    )}`}
  >
    {rating}
  </span>
);
