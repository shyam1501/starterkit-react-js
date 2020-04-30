
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../../src/components/Button'
import { btnData } from '__tests__/staticProps/ButtonData';
Enzyme.configure({ adapter: new Adapter() });

const handleClickSpy = jest.fn();
const handleClick = handleClickSpy;

describe('Button', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Button {...btnData} handleClick={handleClickSpy} />);
    expect(wrapper).toMatchSnapshot();
  });
});