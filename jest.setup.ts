import React from 'react';
import '@testing-library/jest-dom';

jest.mock('react-social-icons', () => ({
  SocialIcon: () => React.createElement('div'),
}));
