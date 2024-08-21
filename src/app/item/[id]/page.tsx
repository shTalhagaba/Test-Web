import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

interface Item {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

interface ItemDetailPageProps {
  item: Item;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const items = await fetch('https://api.example.com/items').then(res => res.json());

  const paths = items.map((item: Item) => ({
    params: { id: item.id.toString() },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const item = await fetch(`https://api.example.com/items/${params?.id}`).then(res => res.json());

  return {
    props: {
      item,
    },
    revalidate: 10,
  };
};

const ItemDetailPage: React.FC<ItemDetailPageProps> = ({ item }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <img src={item.imageUrl} alt={item.name} className="w-full h-64 object-cover mb-4 rounded" />
      <h1 className="text-3xl font-bold mb-2">{item.name}</h1>
      <p>{item.description}</p>
    </div>
  );
};

export default ItemDetailPage;
