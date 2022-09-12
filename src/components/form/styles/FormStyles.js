import { fade } from "@material-ui/core/styles/colorManipulator";

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up('md')]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        }

    },
    formPaper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
    },
    formAvatar: {
        marginTop: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },

});

export default styles;