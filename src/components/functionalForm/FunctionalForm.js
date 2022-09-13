import React, {useContext} from 'react';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "../form/styles/FormStyles";
import { Check } from '@material-ui/icons';
import {LanguageContext} from '../../contexts/languageContext/LanguageContext';

const wordSets ={
    english: {signIn: 'Sign In', email: 'Email', password: 'Password', rememberMe: 'Remember Me'},
    french: {signIn: `S'identifier`, email: 'E-mail', password: 'Mot de Passe', rememberMe: 'Souviens-toi de Moi'},
    japanese: {signIn: 'ログイン', email: 'Eメール', password: 'パスワード', rememberMe: '私を覚えてますか'},
    spanish: {signIn: 'Registrarse', email: 'Email', password: 'Contraseña', rememberMe: 'Recuérdame'},
};

function FunctionalForm(props) {

    const {currentLanguage, toggleLanguage} = useContext(LanguageContext);
    const {classes} = props;
    const {signIn, email, password, rememberMe} = wordSets[currentLanguage];

  return (
    <main 
    className={classes.main}>
        <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant='h5'>
                {signIn}
            </Typography>
            <Select value={currentLanguage} onChange={toggleLanguage}>
                <MenuItem value='english'>English</MenuItem>
                <MenuItem value='french'>French</MenuItem>
                <MenuItem value='japanese'>Japanese</MenuItem>
                <MenuItem value='spanish'>Spanish</MenuItem>
            </Select>
            <form className={classes.form}>
                <FormControl margin='normal' required fullWidth>
                    <InputLabel htmlFor='email'>
                        {email}
                    </InputLabel>
                    <Input id='email' name='email' autoFocus>
                    </Input>
                </FormControl>
                <FormControl margin='normal' required fullWidth>
                    <InputLabel htmlFor='password'>
                        {password}
                    </InputLabel>
                    <Input id='password'  name='password' autoFocus>
                    </Input>
                </FormControl>
                <FormControlLabel 
                    control={<Checkbox color='primary'/>}
                    label={rememberMe}
                    className={classes.formCheckbox}
                />
                <Button 
                variant='contained' type='submit' fullwidth='true' color='primary' className={classes.submit}>
                    {signIn}
                </Button>
            </form>
        </Paper>
    </main>
  )
}

export default withStyles(styles)(FunctionalForm);
