import Image from 'next/image';

type Props = {
  title: string;
  bannerFileURL: string;
};

export const MovieCardImage: React.FC<Props> = ({ title, bannerFileURL }) => {
  return (
    <Image
      alt={title}
      src={bannerFileURL}
      width={600}
      height={400}
      className='rounded-md object-cover object-top transition'
    />
  );
};
