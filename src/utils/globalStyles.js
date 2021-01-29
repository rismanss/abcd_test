/* Global styles */

import { injectGlobal } from '@emotion/css';

const globalStyles = () => {
  return injectGlobal`
    body {
      margin: 0;
      padding: 0;
    }
  `;
};

export default globalStyles;
