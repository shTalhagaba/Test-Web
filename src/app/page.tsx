import ItemCard from '../components/ItemCard';

const HomePage: React.FC<{ items: Item[] }> = ({ items }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Items</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <ItemCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
