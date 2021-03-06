import Head from 'next/head';
import styles from '../styles/index.module.scss';
import {
  Avatar,
  Box,
  Chip,
  Container,
  CssBaseline,
  Divider,
  Grid,
  Link,
  List, ListItem, ListItemAvatar, ListItemText,
  Paper,
  Typography
} from '@material-ui/core';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import TelegramIcon from '@material-ui/icons/Telegram';
import ContactsIcon from '@material-ui/icons/Contacts';
import ExtensionIcon from '@material-ui/icons/Extension';
import SchoolIcon from '@material-ui/icons/School';
import PersonIcon from '@material-ui/icons/Person';
import GitHubIcon from '@material-ui/icons/GitHub';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import LabelIcon from '@material-ui/icons/Label';

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>cv</title>
      </Head>
      <CssBaseline/>
      <div>
        <Container className={styles.container} maxWidth="lg">
          <Paper className={styles.paper} elevation={4}>
            <div className={styles.header}>
              <div>
                <Typography className={styles.title} variant={'h3'}>Байсал Айнакулов</Typography>
                <Typography className={styles.subTitle} variant={'h6'}>Front-end разработчик </Typography>
              </div>

              <div className={styles.text}>
                <Typography component={'span'} variant={'subtitle2'}>Занятость: </Typography>
                <Typography component={'span'} variant={'body2'}>полная занятость</Typography>
                <br/>
                <Typography component={'span'} variant={'subtitle2'}>График работы: </Typography>
                <Typography component={'span'} variant={'body2'}>гибкий график, полный день</Typography>
              </div>
            </div>
            <Divider/>
            <Grid className={styles.gridContainer} container>
              <Grid item xs={4}>
                <div className={styles.contacts}>
                  <Typography className={styles.subTitle} variant={'h6'}>
                    <ContactsIcon/>
                    <span>Контакты</span>
                  </Typography>
                  <Typography className={styles.linkWrap}>
                    <Link className={styles.link} href="tel:0708194601" underline={'none'}>
                      <PhoneIphoneIcon className={styles.linkIcon}/> 0 708 194601
                    </Link>
                  </Typography>
                  <Typography className={styles.linkWrap}>
                    <Link className={styles.link} href="mailto:mdnt3138@gmail.com" underline={'none'}>
                      <EmailIcon className={styles.linkIcon}/> mdnt3138@gmail.com
                    </Link>
                  </Typography>
                  <Typography className={styles.linkWrap}>
                    <Link className={styles.link}
                          href="https://telegram.me/CZ_010"
                          target="_blank"
                          rel="noopener noreferrer" underline={'none'}>
                      <TelegramIcon className={styles.linkIcon}/> @CZ_010
                    </Link>
                  </Typography>
                  <Typography className={styles.linkWrap}>
                    <Link className={styles.link}
                          href="https://github.com/CZ010"
                          target="_blank"
                          rel="noopener noreferrer" underline={'none'}>
                      <GitHubIcon className={styles.linkIcon}/> github.com/CZ010
                    </Link>
                  </Typography>
                </div>
                <Typography className={styles.subTitle} variant={'h6'}>
                  <PersonIcon/>
                  <span>Обо мне</span>
                </Typography>
                <Typography>
                  Начинающий веб-разработчик, хочу развиваться в направлении front-end. Front-end разработкой занимаюсь
                  уже почти год, начинал с обучения верстке сайтов из PSD-макетов. Последние 4-5 месяцев занимаюсь
                  активным изучением разработки веб-приложений на React.
                </Typography>
              </Grid>
              <Grid className={styles.dividerContainer} item xs={1}><Divider orientation={'vertical'}/></Grid>
              <Grid item xs={7}>
                <Typography className={styles.subTitle} variant={'h6'}>
                  <ExtensionIcon/>
                  <span>Ключевые навыки</span>
                </Typography>
                <div className={styles.chipContainer}>
                  <Chip
                    className={styles.chip}
                    variant={'outlined'}
                    label={'HTML'}
                    avatar={<Avatar alt="Natacha" src="/html.png"/>}
                    size={'medium'}
                  />
                  <Chip
                    className={styles.chip}
                    variant={'outlined'}
                    label={'CSS'}
                    avatar={<Avatar alt="Natacha" src="/css.png"/>}
                    size={'medium'}
                  />
                  <Chip
                    className={styles.chip}
                    variant={'outlined'}
                    label={'SCSS'}
                    avatar={<Avatar alt="Natacha" src="/scss.png"/>}
                    size={'medium'}
                  />
                  <Chip
                    className={styles.chip}
                    variant={'outlined'}
                    label={'JavaScript'}
                    avatar={<Avatar alt="Natacha" src="/js.png"/>}
                  />
                  <Chip
                    className={styles.chip}
                    variant={'outlined'}
                    label={'React js'}
                    avatar={<Avatar alt="Natacha" src="/react.png"/>}
                    size={'medium'}
                  />
                  <Chip
                    className={styles.chip}
                    variant={'outlined'}
                    label={'Redux'}
                    avatar={<Avatar alt="Natacha" src="/redux.svg"/>}
                    size={'medium'}
                  />
                  <Chip
                    className={styles.chip}
                    variant={'outlined'}
                    label={'Material ui'}
                    avatar={<Avatar alt="Natacha" src="/mu.png"/>}
                    size={'medium'}
                  />
                  <Chip
                    className={styles.chip}
                    variant={'outlined'}
                    label={'Firebase'}
                    avatar={<Avatar alt="Natacha" src="/firebase.png"/>}
                    size={'medium'}
                  />
                  <Chip
                    className={styles.chip}
                    variant={'outlined'}
                    label={'Node js'}
                    avatar={<Avatar alt="Natacha" src="/node.png"/>}
                    size={'medium'}
                  />
                  <Chip
                    className={styles.chip}
                    variant={'outlined'}
                    label={'Nest js'}
                    avatar={<Avatar alt="Natacha" src="/nest.png"/>}
                    size={'medium'}
                  />
                  <Chip
                    className={styles.chip}
                    variant={'outlined'}
                    label={'PostgreSQL'}
                    avatar={<Avatar alt="Natacha" src="/pg.png"/>}
                    size={'medium'}
                  />
                  <Chip
                    className={styles.chip}
                    variant={'outlined'}
                    label={'Postman'}
                    avatar={<Avatar alt="Natacha" src="/postman.jpg"/>}
                    size={'medium'}
                  />
                  <Chip
                    className={styles.chip}
                    variant={'outlined'}
                    label={'Git'}
                    avatar={<Avatar alt="Natacha" src="/git.png"/>}
                    size={'medium'}
                  />
                  <Chip
                    className={styles.chip}
                    variant={'outlined'}
                    label={'Linux'}
                    avatar={<Avatar alt="Natacha" src="/linux.png"/>}
                    size={'medium'}
                  />
                  <Chip
                    className={styles.chip}
                    variant={'outlined'}
                    label={'Photoshop'}
                    avatar={<Avatar alt="Natacha" src="/ps.png"/>}
                    size={'medium'}
                  />
                </div>

                <Typography className={styles.subTitle} variant={'h6'}>
                  <SchoolIcon/>
                  <span>Образование</span>
                </Typography>
                <Grid className={styles.edu} container>
                  <Grid item xs={3}>
                    <Typography variant={'body1'}>2017 &#8213; 2021</Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography variant={'body1'}>Высшее незаконченное (бакалавр), КГТУ им. И. Раззакова, Факультет
                      Информационных Технологий, кафедра ПОКС, специальность «Информационная безопасность».</Typography>
                  </Grid>
                </Grid>
                <Typography className={styles.subTitle} variant={'h6'}>
                  <GTranslateIcon/>
                  <span>Знание языков</span>
                </Typography>
                <div>

                  <List>
                    <ListItem>
                      {/*<ListItemAvatar>*/}
                      {/*  <Avatar>*/}
                      {/*    <LabelIcon/>*/}
                      {/*  </Avatar>*/}
                      {/*</ListItemAvatar>*/}
                      <ListItemText primary="кыргызский язык"/>
                    </ListItem>
                    <ListItem>
                      {/*<ListItemAvatar>*/}
                      {/*  <Avatar>*/}
                      {/*    <LabelIcon/>*/}
                      {/*  </Avatar>*/}
                      {/*</ListItemAvatar>*/}
                      <ListItemText primary="русский язык"/>
                    </ListItem>
                    <ListItem>
                      {/*<ListItemAvatar>*/}
                      {/*  <Avatar>*/}
                      {/*    <LabelIcon/>*/}
                      {/*  </Avatar>*/}
                      {/*</ListItemAvatar>*/}
                      <ListItemText primary="английский язык"/>
                    </ListItem>
                  </List>
                </div>
              </Grid>

            </Grid>
          </Paper>
        </Container>
      </div>
    </>
  );
}
