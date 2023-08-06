import tinycolor from 'tinycolor2';
import { modifyColor } from '../colorManipulate';
describe('color manipulate', () => {
  it('should modify color correctly', () => {
    const answer = tinycolor('#e94c15').brighten(10).darken(10).toString();
    const result = modifyColor('#e94c15', {
      brighten: 10,
      darken: 10,
    });

    expect(result).toEqual(answer);
  });
});
