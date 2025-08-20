import {
  APP_CONFIG,
  CONTACT_INFO,
  NAVIGATION_ROUTES,
  EXTERNAL_LINKS,
  UI_CONSTANTS,
  CURRENT_YEAR,
} from '../app';

describe('App Constants', () => {
  describe('APP_CONFIG', () => {
    it('should have correct app configuration', () => {
      expect(APP_CONFIG.name).toBe('TIS Risk Managers');
      expect(APP_CONFIG.description).toBe('Professional insurance and risk management services');
      expect(APP_CONFIG.version).toBe('2.0.0');
      expect(APP_CONFIG.author).toBe('TIS Risk Managers');
      expect(APP_CONFIG.url).toBe('https://tisrm.nl');
    });

    it('should have correct structure', () => {
      expect(APP_CONFIG).toHaveProperty('name');
      expect(APP_CONFIG).toHaveProperty('description');
      expect(APP_CONFIG).toHaveProperty('version');
      expect(APP_CONFIG).toHaveProperty('author');
      expect(APP_CONFIG).toHaveProperty('url');
    });
  });

  describe('CONTACT_INFO', () => {
    it('should have correct contact information', () => {
      expect(CONTACT_INFO.name).toBe('TIS Risk Managers');
      expect(CONTACT_INFO.phone).toBe('+31 20 636 8191');
      expect(CONTACT_INFO.email).toBe('info@tisrm.nl');
    });

    it('should have correct address information', () => {
      expect(CONTACT_INFO.address.street).toBe('Muiderstraat 1');
      expect(CONTACT_INFO.address.postalCode).toBe('1011 PZ');
      expect(CONTACT_INFO.address.city).toBe('Amsterdam');
      expect(CONTACT_INFO.address.country).toBe('Nederland');
    });

    it('should have correct postal box information', () => {
      expect(CONTACT_INFO.postalBox.box).toBe('Postbus 12887');
      expect(CONTACT_INFO.postalBox.postalCode).toBe('1100 AW');
      expect(CONTACT_INFO.postalBox.city).toBe('Amsterdam');
    });

    it('should have correct social media links', () => {
      expect(CONTACT_INFO.social.linkedIn).toBe('https://www.linkedin.com/company/tisrm/');
    });
  });

  describe('NAVIGATION_ROUTES', () => {
    it('should have all required navigation routes', () => {
      expect(NAVIGATION_ROUTES.home).toBe('/');
      expect(NAVIGATION_ROUTES.insurance).toBe('/verzekeringen');
      expect(NAVIGATION_ROUTES.insurancePersonal).toBe('/verzekeringen/particulier');
      expect(NAVIGATION_ROUTES.insuranceBusiness).toBe('/verzekeringen/zakelijk');
      expect(NAVIGATION_ROUTES.taxi).toBe('/taxi');
      expect(NAVIGATION_ROUTES.riskManagement).toBe('/risk-management');
      expect(NAVIGATION_ROUTES.about).toBe('/over-ons');
      expect(NAVIGATION_ROUTES.contact).toBe('/contact');
      expect(NAVIGATION_ROUTES.quote).toBe('/offerte');
      expect(NAVIGATION_ROUTES.downloads).toBe('/bestanden');
    });

    it('should have consistent route structure', () => {
      const routes = Object.values(NAVIGATION_ROUTES);
      routes.forEach(route => {
        expect(route).toMatch(/^\//);
        expect(typeof route).toBe('string');
      });
    });
  });

  describe('EXTERNAL_LINKS', () => {
    it('should have correct external links', () => {
      expect(EXTERNAL_LINKS.damageReport).toBe(
        'https://schade.emsclaimsengine.com/index.php?template=tis&view=consument.login#identificatie_vragen'
      );
      expect(EXTERNAL_LINKS.gtmId).toBe('G-3HPHN1BV1Q');
    });

    it('should have valid URLs', () => {
      expect(EXTERNAL_LINKS.damageReport).toMatch(/^https?:\/\//);
    });
  });

  describe('UI_CONSTANTS', () => {
    describe('breakpoints', () => {
      it('should have correct breakpoint values', () => {
        expect(UI_CONSTANTS.breakpoints.sm).toBe('640px');
        expect(UI_CONSTANTS.breakpoints.md).toBe('768px');
        expect(UI_CONSTANTS.breakpoints.lg).toBe('1024px');
        expect(UI_CONSTANTS.breakpoints.xl).toBe('1280px');
        expect(UI_CONSTANTS.breakpoints['2xl']).toBe('1536px');
      });

      it('should have valid CSS pixel values', () => {
        Object.values(UI_CONSTANTS.breakpoints).forEach(breakpoint => {
          expect(breakpoint).toMatch(/^\d+px$/);
        });
      });
    });

    describe('animations', () => {
      it('should have correct animation durations', () => {
        expect(UI_CONSTANTS.animations.fast).toBe('150ms');
        expect(UI_CONSTANTS.animations.normal).toBe('250ms');
        expect(UI_CONSTANTS.animations.slow).toBe('350ms');
      });

      it('should have valid CSS duration values', () => {
        Object.values(UI_CONSTANTS.animations).forEach(duration => {
          expect(duration).toMatch(/^\d+ms$/);
        });
      });
    });

    describe('zIndexes', () => {
      it('should have correct z-index values', () => {
        expect(UI_CONSTANTS.zIndexes.dropdown).toBe(1000);
        expect(UI_CONSTANTS.zIndexes.sticky).toBe(1020);
        expect(UI_CONSTANTS.zIndexes.fixed).toBe(1030);
        expect(UI_CONSTANTS.zIndexes.modal).toBe(1040);
        expect(UI_CONSTANTS.zIndexes.popover).toBe(1050);
        expect(UI_CONSTANTS.zIndexes.tooltip).toBe(1060);
        expect(UI_CONSTANTS.zIndexes.toast).toBe(1070);
      });

      it('should have ascending z-index values', () => {
        const zIndexes = Object.values(UI_CONSTANTS.zIndexes);
        for (let i = 1; i < zIndexes.length; i++) {
          const current = zIndexes[i];
          const previous = zIndexes[i - 1];
          if (typeof current === 'number' && typeof previous === 'number') {
            expect(current).toBeGreaterThan(previous);
          }
        }
      });
    });

    describe('hover effects', () => {
      it('should have card hover effects', () => {
        expect(UI_CONSTANTS.hover.card.transition).toBe('all 0.3s ease');
        expect(UI_CONSTANTS.hover.card.transform).toBe('translateY(-4px)');
        expect(UI_CONSTANTS.hover.card.boxShadow).toBe('xl');
      });

      it('should have button hover effects', () => {
        expect(UI_CONSTANTS.hover.button.transition).toBe('all 0.2s ease-in-out');
        expect(UI_CONSTANTS.hover.button.transform).toBe('translateY(-2px)');
        expect(UI_CONSTANTS.hover.button.boxShadow).toBe('lg');
      });

      it('should have image hover effects', () => {
        expect(UI_CONSTANTS.hover.image.transition).toBe('all 0.3s ease');
        expect(UI_CONSTANTS.hover.image.transform).toBe('scale(1.02)');
        expect(UI_CONSTANTS.hover.image.boxShadow).toBe('xl');
      });

      it('should have link hover effects', () => {
        expect(UI_CONSTANTS.hover.link.transition).toBe('all 0.2s ease');
        expect(UI_CONSTANTS.hover.link.color).toBe('blue.500');
        expect(UI_CONSTANTS.hover.link.transform).toBe('translateX(2px)');
      });

      it('should have subtle hover effects', () => {
        expect(UI_CONSTANTS.hover.subtle.transition).toBe('all 0.2s ease');
        expect(UI_CONSTANTS.hover.subtle.transform).toBe('translateY(-1px)');
        expect(UI_CONSTANTS.hover.subtle.bg).toBe('gray.50');
      });
    });
  });

  describe('CURRENT_YEAR', () => {
    it('should return current year', () => {
      const currentYear = new Date().getFullYear();
      expect(CURRENT_YEAR).toBe(currentYear);
    });

    it('should be a number', () => {
      expect(typeof CURRENT_YEAR).toBe('number');
    });

    it('should be a reasonable year value', () => {
      if (CURRENT_YEAR !== undefined) {
        expect(CURRENT_YEAR).toBeGreaterThan(2020);
        expect(CURRENT_YEAR).toBeLessThan(2030);
      }
    });
  });

  describe('Constants Structure', () => {
    it('should have all required constant objects', () => {
      expect(APP_CONFIG).toBeDefined();
      expect(CONTACT_INFO).toBeDefined();
      expect(NAVIGATION_ROUTES).toBeDefined();
      expect(EXTERNAL_LINKS).toBeDefined();
      expect(UI_CONSTANTS).toBeDefined();
      expect(CURRENT_YEAR).toBeDefined();
    });

    it('should have correct structure', () => {
      const constants = [APP_CONFIG, CONTACT_INFO, NAVIGATION_ROUTES, EXTERNAL_LINKS, UI_CONSTANTS];
      constants.forEach(constant => {
        expect(constant).toBeDefined();
        expect(typeof constant).toBe('object');
      });
      
      // CURRENT_YEAR is a number, not an object
      expect(CURRENT_YEAR).toBeDefined();
      expect(typeof CURRENT_YEAR).toBe('number');
    });
  });
});
