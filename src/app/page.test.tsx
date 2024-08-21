import { render, screen } from '@testing-library/react';
import HomePage from './page';

const mockItems = [
  {
    id: 1,
    name: 'Item 1',
    description: 'Description for item 1',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Item 2',
    description: 'Description for item 2',
    imageUrl: 'https://via.placeholder.com/150',
  },
];

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

jest.mock('./page', () => ({
  __esModule: true,
  default: () => <HomePage items={mockItems} />,
}));

test('renders home page with items', () => {
  render(<HomePage items={mockItems} />);

  expect(screen.getByText('Item 1')).toBeInTheDocument();
  expect(screen.getByText('Item 2')).toBeInTheDocument();
});
