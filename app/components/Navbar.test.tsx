import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navigation bar tests', () => {
  beforeEach(() => {
    render(<Navbar />);
  });
  const contents = ['Home', 'About Us', 'Vote', 'Finals', 'Contact Us'];
  const refs = ['/', '/about', '/vote', '/finals', '/contact-us'];
  it('tests all nav links are correct', () => {
    const links = screen.getAllByTestId('navigation-link');
    expect(links).toHaveLength(contents.length);
    links.forEach((link, i) => {
      expect(link).toHaveTextContent(contents[i]);
      expect(link.getAttribute('href')).toBe(refs[i]);
    });
  });
});
