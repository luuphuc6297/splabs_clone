import { en } from 'languages';
import { SETTING_STORE_CONTANTS } from 'utils';

export const _changeLanguage =
  (lang = 'en') =>
  (dispatch) => {
    let library;
    localStorage.setItem('lang', lang);
    switch (lang) {
      //   case 'vn':
      //     library = { ...en, ...vn };
      //     break;
      //   case 'kr':
      //     library = { ...en, ...kr };
      //     break;
      //   case 'jp':
      //     library = { ...en, ...jp };
      //     break;
      //   case 'rf':
      //     library = { ...en, ...rf };
      //     break;
      default:
        localStorage.setItem('lang', 'en');
        library = en;
        break;
    }
    dispatch({
      type: SETTING_STORE_CONTANTS.CHANGE_LANGUAGE,
      payload: library,
    });
  };
