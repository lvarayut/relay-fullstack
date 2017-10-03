import i18next from 'i18next';

i18next.init({
  // we init with resources
  resources: {
    en: {
      translations: {
        sawasdee: 'Sawasdee, Sawasdee!',
        pleasure: 'Always a pleasure scaffolding your apps',
        handcrafted: 'Handcrafted with ♥ by',
        signUp: 'Sign Up',
        addFeature: 'Add Feature',
        forgotPassword: 'Forgot password',
        rememberMe: 'Remember me',
        password: 'Password',
        username: 'Username',
        integratedWith: 'Integrated with',
      }
    },
    ptBr: {
      translations: {
        sawasdee: 'Sawasdee, Sawasdee!',
        pleasure: 'Sempre um prazer fazer o scaffold dos seus apps',
        handcrafted: 'Feito à mão com ♥ por',
        signUp: 'Registrar',
        addFeature: 'Adicionar Funcionalidade',
        forgotPassword: 'Esqueci a senha',
        rememberMe: 'Lembrar de mim',
        password: 'Senha',
        username: 'Usuário',
        integratedWith: 'Integrado com'
      }
    }
  },
  fallbackLng: 'ptBr',

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
