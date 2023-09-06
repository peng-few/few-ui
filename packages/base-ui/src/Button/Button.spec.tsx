import { render, screen, fireEvent, waitFor } from '../../test-util';
import { createPalette } from '../theme';
import { Button } from './Button';
import { getColorStyle } from './Button.style';
import { ButtonColor, Variant } from './Button.type';

function Link(props: { to: string }) {
  return <a href={props.to}>link</a>;
}

describe('Button', () => {
  it('should render button', () => {
    render(<Button />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'button');
  });

  it('should change the button element to anchor element when href is provided', () => {
    render(<Button as="button" href="https://google.com" />);
    const button = screen.getByRole('link');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', 'https://google.com');
  });

  it('should render element according to "as", "as" is DOM element', () => {
    render(<Button as="main" />);
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });

  it('should render element according to "as", "as" is Component', () => {
    render(<Button as={Link} to="/home" />);
    const button = screen.getByRole('link');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', '/home');
  });
  it('has disabled attribute in button element when disabled', () => {
    render(<Button disabled />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('disabled');
    expect(button).toBeDisabled();
  });

  it('has aria-disabled attribute in other element when disabled', () => {
    render(<Button as="main" disabled />);
    const button = screen.getByRole('main');
    expect(button).toHaveClass('disabled');
    // eslint-disable-next-line jest-dom/prefer-enabled-disabled
    expect(button).not.toHaveAttribute('disabled');
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });

  it('has "noopener noreferer" in "rel" when "target" is _blank', () => {
    render(<Button href="https://google.com" target="_blank" />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('rel', ' noopener noreferer');
  });

  it('can add event handler', () => {
    const onClick = jest.fn();

    render(<Button onClick={onClick}>按我</Button>);
    fireEvent.click(screen.getByText('按我'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('has ripple when mouse down, and be removed after mouse up', async () => {
    render(<Button>按我</Button>);
    const button = screen.getByText('按我');
    const rippleContainer = button.lastChild as HTMLElement;
    expect(rippleContainer?.tagName).toBe('SPAN');

    fireEvent.mouseDown(button);
    expect(rippleContainer?.childNodes.length).toEqual(1);

    fireEvent.mouseUp(button);
    await waitFor(() => {
      expect(rippleContainer?.childNodes.length).toEqual(0);
    });
  });
  it('should retrieve the color styles Using "getColorStyle" with all variants', () => {
    const palette = createPalette({}, false);
    Object.values(Variant).forEach((variant) => {
      const cssStyle = getColorStyle(
        palette,
        false,
        ButtonColor.Primary,
        variant,
      );
      expect(cssStyle).toBeTruthy();
    });
  });
});
