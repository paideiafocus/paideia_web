import { memo } from 'react';

import Page from '@/components/Page';
import * as S from './styles';

const News = () => {
  return (
    <Page align="center">
      <S.NewsTitle>
        <h5>
          Para ficar por dentro das noticias, curta nossa página no Facebook!
        </h5>
      </S.NewsTitle>
      <div>
        <S.FaceContainer
          _ngcontent-ufp-c4=""
          // className="fb-page fb_iframe_widget"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-href="https://www.facebook.com/pg/focuscursinho"
          data-show-facepile="true"
          data-small-header="false"
          data-tabs="timeline"
          fb-xfbml-state="rendered"
          fb-iframe-plugin-query="adapt_container_width=true&amp;app_id=&amp;container_width=1110&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fpg%2Ffocuscursinho&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline"
        >
          <span>
            <iframe
              name="f78291fa5842fc"
              width="1000px"
              height="1000px"
              data-testid="fb:page Facebook Social Plugin"
              title="fb:page Facebook Social Plugin"
              frameBorder="0"
              // allowtransparency="true"
              allowFullScreen
              scrolling="no"
              allow="encrypted-media"
              src="https://web.facebook.com/v3.0/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfed8b4b1d34bac%26domain%3Dlocalhost%26origin%3Dhttp%253A%252F%252Flocalhost%253A4001%252Ff3476196162465%26relation%3Dparent.parent&amp;container_width=1110&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fpg%2Ffocuscursinho&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline"
            />
          </span>
        </S.FaceContainer>
      </div>
    </Page>
  );
};

export default memo(News);
