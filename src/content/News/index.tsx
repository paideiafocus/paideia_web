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
              title="facebook"
              // src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpg%2Ffocuscursinho&tabs=timeline&width=0&height=0&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffocuscursinho"
              width="1000px"
              height="1000px"
              style={{ border: 'none', overflow: 'hidden' }}
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </span>

          {/* <span>
            <iframe
              id="frame"
              width="320"
              height="568"
              src="https://instagram.com/focuscursinho?igshid=YmMyMTA2M2Y="
            // src="https://www.instagram.com/p/BxFc58nFwpN/embed"
            // frameBorder="0"
            />
          </span> */}
        </S.FaceContainer>
      </div>
    </Page>
  );
};

export default memo(News);
