import { render } from '@testing-library/react';
import DarkMode from './DarkMode';
import DarkModeContext from '../../contexts/DarkModeContext';
import { useContext, useEffect } from 'react';

describe('<DarkMode />', () => {
  it('should render without crashing', () => {
    const { baseElement } = render(<DarkMode />);
    expect(baseElement).toBeTruthy();
  });

  it('should render children', () => {
    const { getByText } = render(<DarkMode><h1>Test</h1></DarkMode>);
    expect(getByText('Test')).toBeTruthy();
  });

  it('should not have the bp5-dark class by default', () => {
    const { baseElement } = render(<DarkMode />);
    expect(baseElement.classList.contains('bp5-dark')).toBe(false);
  });

  it('should add the bp5-dark class when darkMode is set to true', () => {
    const NestedElement = () => {
      const { setDarkMode } = useContext(DarkModeContext);
      useEffect(() => {
        setDarkMode(true);
      }, [setDarkMode]);
      return <div />;
    }

    const { baseElement } = render(<DarkMode><NestedElement /></DarkMode>);
    expect(baseElement.classList.contains('bp5-dark')).toBe(true);
  })
});
