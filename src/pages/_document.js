import React from 'react'

import { extractCritical } from '@emotion/server'
import globalStyles from '@utils/globalStyles'
import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const styles = extractCritical(initialProps.html)

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            data-emotion-css={styles.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: styles.css }}
          />
          <style
            dangerouslySetInnerHTML={{
              __html:
                '* {-webkit-touch-callout:none; -webkit-user-select:none; -khtml-user-select:none; -moz-user-select:none; -ms-user-select:none; user-select:none;} body { color: #3E4148 } a { -webkit-tap-highlight-color: transparent } main { background-color: #fff } .section-heading { font-size: 1rem; color: #3E4148; line-height: 1.375rem; margin-bottom: 6px } .section-heading-center { margin: 24px 0; text-align: center }'
            }}
          />
        </>
      )
    }
  }

  render () {
    return (
      <Html>
        <Head>
          <meta name='theme-color' content='#8cc540' />

          {globalStyles()}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
