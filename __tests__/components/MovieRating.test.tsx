import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MovieRating } from '@/app/components/MovieRating';

describe('<MovieRating />', () => {
  it('renders without crashing', () => {
    render(<MovieRating rating='pg' />);
    expect(screen.getByText('pg')).toBeInTheDocument();
  });

  it('displays the correct rating', () => {
    render(<MovieRating rating='pg-13' />);
    expect(screen.getByText('pg-13')).toBeInTheDocument();
  });

  it('applies the correct text color for rating "pg"', () => {
    render(<MovieRating rating='pg' />);
    expect(screen.getByText('pg')).toHaveClass('text-green-500');
  });

  it('applies the correct text color for rating "pg-13"', () => {
    render(<MovieRating rating='pg-13' />);
    expect(screen.getByText('pg-13')).toHaveClass('text-yellow-500');
  });

  it('applies the correct text color for rating "r"', () => {
    render(<MovieRating rating='r' />);
    expect(screen.getByText('r')).toHaveClass('text-red-500');
  });

  it('applies the correct text color for rating "nc-17"', () => {
    render(<MovieRating rating='nc-17' />);
    expect(screen.getByText('nc-17')).toHaveClass('text-red-700');
  });

  it('applies the default text color for unknown ratings', () => {
    render(<MovieRating rating='unknown' />);
    expect(screen.getByText('unknown')).toHaveClass('text-white');
  });
});
