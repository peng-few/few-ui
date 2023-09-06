import { rescaleCss } from '../rescaleCss';
describe('rescale css value', () => {
  it('rescale css value', () => {
    const result = rescaleCss('100px', 0.8);
    expect(result).toEqual('80px');
  });
});
