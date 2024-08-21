import { render } from '@testing-library/react';
import ItemCard from './ItemCard';

const mockItem = {
  id: 1,
  name: 'Test Item',
  description: 'This is a test item',
  imageUrl: 'https://via.placeholder.com/150',
};

test('renders ItemCard with correct content', () => {
  const { getByText, getByAltText } = render(<ItemCard {...mockItem} />);

  expect(getByText('Test Item')).toBeInTheDocument();
  expect(getByText('This is a test item')).toBeInTheDocument();
  expect(getByAltText('Test Item')).toBeInTheDocument();
});
