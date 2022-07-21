import React from 'react'

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Measures from './Measures';
import mockMeasuresHistory from './mocks';

jest.mock("./hook/useMeasures", () => ({
  __esModule: true,
  default: () => ({ projectMeasuresHistory: mockMeasuresHistory })
}));

describe('<Measures />', () => {
  it('should render Measures', async () => {
    const { getByTestId } = render(<Measures />);

    expect(getByTestId('measures-history')).toBeInTheDocument()
  });
});
