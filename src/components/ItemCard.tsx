import Image from 'next/image';
import Link from 'next/link';

interface ItemCardProps {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ id, name, description, imageUrl }) => {
  return (
    <div className="border p-4 rounded shadow">
      <Image
        src={imageUrl}
        alt={name}
        width={150}
        height={150}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p>{description}</p>
      <Link href={`/item/${id}`}>
        <span className="text-blue-500 mt-2 inline-block cursor-pointer">View Details</span>
      </Link>
    </div>
  );
};

export default ItemCard;
