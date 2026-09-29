import { getFormMessage } from '../getFormMessage';

describe('getFormMessage', () => {
  it('returns CMS value when present', () => {
    const copy = {
      offerte: {
        validationMessages: { phoneInvalid: 'Ongeldig telefoonnummer' },
      },
    };
    expect(
      getFormMessage(copy, 'offerte', 'validationMessages', 'phoneInvalid', 'fallback'),
    ).toBe('Ongeldig telefoonnummer');
  });

  it('returns fallback when missing', () => {
    expect(
      getFormMessage(null, 'offerte', 'validationMessages', 'phoneInvalid', 'fallback'),
    ).toBe('fallback');
  });
});
