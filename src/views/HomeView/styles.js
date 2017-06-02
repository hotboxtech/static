export default {
  base: {
    minHeight: '100vh',
  },
  logo: {
    height: 80,
    margin: 'auto 40px auto auto',
    '@media (max-width: 640px)': {
      height: 50,
      margin: 'auto 20px auto auto',
    },
  },
  content: e => ({
    display: 'flex',
    transition: '500ms ease-in',
    opacity: e ? 1 : 0,
    width: '100vw',
    height: 'auto',
    minHeight: '100vh',
    position: 'relative',
    transform: e ? 'none' : 'translateY(20px)',
    flexFlow: 'column nowrap',
  }),
  titleWrap: {
    flex: '0 0 auto',
    margin: 'auto 0 40px',
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontWeight: 700,
    margin: 'auto auto auto 0',
    fontSize: 70,
    fontFamily: 'Roboto',
    textTransform: 'uppercase',
    '@media (max-width: 640px)': {
      fontSize: 40,
    },
  },
  description: {
    flex: '0 0 auto',
    color: '#aaa',
    margin: '0 auto',
    fontSize: '1.25em',
    width: 'auto',
    textAlign: 'center',
    fontWeight: 400,
    '@media (max-width: 640px)': {
      fontSize: '1em',
    },
  },
  contactBtn: {
    color: '#ccc',
    fontSize: '1em',
    margin: 'auto auto 40px',
    outline: 'none',
    width: '100%',
    flex: '0 0 auto',
    textDecoration: 'none',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 0,
    transition: '400ms ease-out',
    ':hover': {
      cursor: 'pointer',
      color: 'red',
      transition: '100ms ease-in',
    }
  },
  contactBtnIcon: {
    fontSize: '1em',
    margin: 'auto 0 auto 10px',
  }
};
