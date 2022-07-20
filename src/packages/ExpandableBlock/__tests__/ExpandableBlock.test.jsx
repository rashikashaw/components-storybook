import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ExpandableBlock } from "../ExpandableBlock";

const Header = () => <div>Header</div>;
const Body = () => <div>Body</div>;
const renderExpandableBlock = (props = {}) => {
  const {
    initiallyOpen = false,
    mockFunction = () => {},
  } = props;
  return render(
    <ExpandableBlock
      header={<Header />}
      body={<Body />}
      initiallyOpen={initiallyOpen}
      onToggle={mockFunction}
    />
  );
};

describe('ExpandableBlock', () => {
  it('should render header and body correctly', () => {
    const { getByText } = renderExpandableBlock();
    expect(getByText('Header')).toBeInTheDocument();
    expect(getByText('Body')).toBeInTheDocument();
  });
  it('should toggle when clicked on header', () => {
    const { queryByTestId } = renderExpandableBlock();
    expect(queryByTestId('expandable-block-close')).toBeInTheDocument();
    expect(queryByTestId('expandable-block-open')).not.toBeInTheDocument();
    userEvent.click(queryByTestId('expandable-block-header'));
    expect(queryByTestId('expandable-block-close')).not.toBeInTheDocument();
    expect(queryByTestId('expandable-block-open')).toBeInTheDocument();
  });
  it('should be initially open when initiallyOpen is true', () => {
    const { queryByTestId } = renderExpandableBlock({ initiallyOpen: true });
    expect(queryByTestId('expandable-block-close')).not.toBeInTheDocument();
    expect(queryByTestId('expandable-block-open')).toBeInTheDocument();
  });
  it('should execute onToggle callback when it toggles', () => {
    const mockFunction = jest.fn();
    const { queryByTestId } = renderExpandableBlock({ mockFunction });
    userEvent.click(queryByTestId('expandable-block-header'));
    expect(mockFunction).toBeCalledTimes(1);
    expect(mockFunction).toBeCalledWith(true);
  });
});