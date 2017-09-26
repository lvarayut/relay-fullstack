import i18next from 'i18next';

i18next.init({
  // we init with resources
  resources: {
    en: {
      translations: {
        pleasure: 'Always a pleasure scaffolding your apps',
        handcrafted: 'Handcrafted with ♥ by'
      }
    },
    br: {
      translations: {
        pleasure: 'Sempre um prazer fazer o scaffold dos seus apps',
        handcrafted: 'Feito com o ♥ por'
      }
    }
  },
  fallbackLng: 'en',

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ','
  }
});

export default i18next;
