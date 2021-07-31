import React, { useState, useEffect } from "react";
import { Box, CssBaseline } from "@material-ui/core";
import {Pagination, PaginationItem} from '@material-ui/lab';
import axios from "axios";
import UsersTable from "../components/UsersTable";
import Search from "../components/Search";
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom';

function Home() {
    const [totalPages, setTotalPages] = useState([]);
    const [page, setPage] = useState(1);
    const history = useHistory();

    const loadPages = async () => {
        const res = await axios.get(`https://gorest.co.in/public-api/users`);
        setTotalPages(res?.data?.meta?.pagination);
    };
    useEffect(() => {
        loadPages();
    }, [page]);


    return (
        <div >
            <CssBaseline />
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="center"
                textAlign="center"
                component={Box}
                py={3}
                flexWrap="wrap"
            >
                <UsersTable page={page} />
                <Box style={{marginLeft:'20px'}}>
                    <Search/>
                    <Pagination
                        count={totalPages.pages}
                        color="secondary"
                        variant="outlined"
                        onChange={(e, value) => {setPage(value)}}
                        renderItem= {(item) => (
                            <PaginationItem {...item} component={Link} to={`/users?page=${item.page}`} />
                        )}

                    />
                </Box>
            </Box>
        </div>
    );
}

export default Home;
