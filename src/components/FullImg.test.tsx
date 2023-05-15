import { render, screen } from '@testing-library/react';
import FullImg from './FullImg';
import unsplash from '../mocks/unsplash.json';

describe('FullImg component', () => {
  it('should render an image', () => {
    const imgPicked = {
      id: unsplash[0].id,
      title: unsplash[0].alt_description,
      thumb: unsplash[0].urls.thumb,
      image: unsplash[0].urls.regular,
    };

    render(<FullImg image={imgPicked} />);
    const imgEl = screen.getByRole('img');
    expect(imgEl).toBeInTheDocument();
  });
});
