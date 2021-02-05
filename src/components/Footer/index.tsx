import Image from 'next/image';
import Grid from '@material-ui/core/Grid';
import * as S from './styles';

const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Grid container alignItems="center" spacing={3}>
        <Grid item xs={11}>
          Copyright © Associação Paideia - Todos os direitos reservados
        </Grid>
        <Grid item xs={1}>
          <a href="https://www.facebook.com/focuscursinho/" target="_blank">
            <Image src="/face_light.png" width="38" height="38" />
          </a>
        </Grid>
      </Grid>
    </S.Footer>
  );
};

export default Footer;
