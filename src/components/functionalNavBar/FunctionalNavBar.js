import React, {useContext} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import styles from '../navBar/styles/NavBarStyles';
import InputBase from "@material-ui/core/InputBase";
// import {ThemeContext} from '../../contexts/themeContext/ThemeContext';
// import {LanguageContext} from '../../contexts/languageContext/LanguageContext';
import { FunctionalThemeContext } from '../../contexts/functionalThemeContext/FunctionalThemeContext';
import { FunctionalLanguageContext } from '../../contexts/functionalLanguageContext/FunctionalLanguageContext';

const navContentSets = {
    english: {appTitle: 'App Title', search: 'Search', flag: '🇺🇸'},
    french: {appTitle: `Titre de l'application`, search: 'Chercher', flag: '🇫🇷'},
    japanese: {appTitle: 'アプリのタイトル', search: '捜索', flag: '🇯🇵'},
    spanish: {appTitle: 'Título de la Aplicación', search: 'Buscar', flag: '🇪🇸'},
};

function FunctionalNavBar(props) {

    const {isDarkMode, toggleDarkMode} = useContext(FunctionalThemeContext);
    const {classes} = props;
    const {currentLanguage} = useContext(FunctionalLanguageContext);
    const {appTitle, search, flag} = navContentSets[currentLanguage];

  return (
    <div 
        className={classes.root}>
        <AppBar position='static' color={isDarkMode ? 'default' : 'primary'}>
            <Toolbar>
                <IconButton className={classes.menuButton} color='inherit'>
                    <span>{flag}</span>
                </IconButton>
                <Typography className={classes.title} variant='h6' color='inherit'>
                    {appTitle}
                </Typography>
                <Switch onChange={toggleDarkMode} />
                <div className={classes.grow} />
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase placeholder={`${search}...`} 
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputSearch }} />
                </div>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default withStyles(styles)(FunctionalNavBar);
