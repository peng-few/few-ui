import { render, screen } from '../../test-util';
import { Button } from './Button';
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
});
