import { render, screen } from '@testing-library/react';
import React from 'react';
import { Banner } from '@/app/components/Banner';
import { Movie } from '@/app/types/Movie';

// Mock movie object to pass as a prop
const mockMovie = {
  id: '1',
  title: 'Mock Movie',
  description: 'This is a mock movie description',
  bannerFileURL: 'http://example.com/mock-banner.jpg',
  videoFileURL: 'http://example.com/mock-video.mp4',
} as Movie;

describe('<Banner />', () => {
  it('renders without crashing', () => {
    render(<Banner movie={mockMovie} />);
    expect(screen.getByText('Mock Movie')).toBeInTheDocument();
  });

  it('renders the movie title and description', () => {
    render(<Banner movie={mockMovie} />);
    expect(screen.getByText('Mock Movie')).toBeInTheDocument();
    expect(
      screen.getByText('This is a mock movie description')
    ).toBeInTheDocument();
  });

  it('contains "Watch Now" and "More Info" buttons', () => {
    render(<Banner movie={mockMovie} />);
    expect(screen.getByText('Watch Now')).toBeInTheDocument();
    expect(screen.getByText('More Info')).toBeInTheDocument();
  });

  // Optionally, you can test if the video and image URLs are set correctly
  it('sets the video and image URLs correctly', () => {
    const { container } = render(<Banner movie={mockMovie} />);
    const videoElement = container.querySelector('video');
    if (videoElement) {
      expect(videoElement.getAttribute('src')).toBe(
        'http://example.com/mock-video.mp4'
      );
      expect(videoElement.getAttribute('poster')).toBe(
        'http://example.com/mock-banner.jpg'
      );
    } else {
      throw new Error('Video element not found');
    }
  });
});
