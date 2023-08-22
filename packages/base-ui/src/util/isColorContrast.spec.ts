import isColorContrast from './isColorContrast';

describe('isColorContrast', () => {
  it('should return those colors is contrast', () => {
    const isContrast = isColorContrast('black', 'white');
    expect(isContrast).toBeTruthy();
  });
});
