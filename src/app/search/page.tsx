import { GetStaticProps } from 'next';
import { useState } from 'react';

interface Item {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

interface SearchPageProps {
  items: Item[];
}

export const getStaticProps: GetStaticProps = async () => {
  // Mock API call
  const items = await fetch('https://api.example.com/items').then(res => res.json());

  return {
    props: {
      items,
    },
    revalidate: 10, // Revalidate every 10 seconds
  };
};

const SearchPage: React.FC<SearchPageProps> = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        placeholder="Search items..."
        className="border p-2 rounded w-full mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item) => (
          <li key={item.id} className="border p-4 rounded shadow">
            <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover mb-4 rounded" />
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
