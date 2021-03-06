import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { Container, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        height: 32,
        width: "100%",
        padding: "2px 4px",
    },
    input: {
        marginLeft: theme.spacing(1),
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
    searchBarDecoration: {
        width: "100%",
        background: theme.palette.primary.main,
        padding: "10px 0 10px 10px",
        marginTop: 30,
    },
}));

export const SearchBar = ({ offices, setSearchResults }) => {
    const classes = useStyles();

    const handleSearch = (e) => {
        const searchValue = e.target.value;
        let filteredOffices;
        filteredOffices = offices.filter(
            (office) =>
                office.name.toLowerCase().includes(searchValue) ||
                office.name.toUpperCase().includes(searchValue) ||
                office.name.includes(searchValue)
        );
        setSearchResults(filteredOffices);
    };

    return (
        <div className={classes.searchBarDecoration}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <form
                            className={classes.root}
                            onSubmit={(e) => e.preventDefault()}
                            noValidate
                            autoComplete="off"
                        >
                            <Paper className={classes.root}>
                                <IconButton
                                    type="submit"
                                    className={classes.iconButton}
                                    aria-label="search"
                                >
                                    <SearchIcon />
                                </IconButton>
                                <Divider
                                    className={classes.divider}
                                    orientation="vertical"
                                />
                                <InputBase
                                    className={classes.input}
                                    placeholder="Buscar sucursal"
                                    onChange={(e) => handleSearch(e)}
                                />
                            </Paper>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};
