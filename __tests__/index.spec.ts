import kiv from '../src';

const str2icon = {
  '@beta': '🍏',
  '@production': '🍎',
  '@upload': '🚚',
  '@cache': '📦',
};

describe('api.basic', () => {
  test('icon with msg pairing', () => {
    const str1 = 'Current msg is __@beta__';
    const str2 = 'Current msg is __@production__';
    const str3 = 'Current msg is __@upload__';
    const str4 = 'Current msg is __@cache__';

    expect(kiv(str1, str2icon)).toBe('🍏');
    expect(kiv(str2, str2icon)).toBe('🍎');
    expect(kiv(str3, str2icon)).toBe('🚚');
    expect(kiv(str4, str2icon)).toBe('📦');
    expect(kiv('Current msg is __@unknown__', str2icon)).toBe('');
    expect(kiv('Current msg is __@unknown__', str2icon, '🍌')).toBe('🍌');
  });

  test('icon with msg pairing with default icon', () => {
    expect(kiv('Current msg is __@unknown__', str2icon)).toBe('');
    expect(kiv('Current msg is __@unknown__', str2icon, '🍌')).toBe('🍌');
  });
});
