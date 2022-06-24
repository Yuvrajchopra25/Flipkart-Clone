import { useEffect } from "react";

// components
import Banner from "./Banner";
import NavBar from "./NavBar";

import {Box, styled} from '@mui/material';

import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from 'react-redux';

const Component = styled(Box)`
  padding: 10px 10px;
  background: #F2F2F2;
`

const Home = () => {

    const { products } = useSelector(state => state.getProducts)

    console.log(products);

    const dispatch = useDispatch();
    
    useEffect(()=>{
      dispatch(getProducts())
    },[dispatch])

    return (
      <>
        <NavBar />
        <Component>
          <Banner />
        </Component>
      </>
    )
}

export default Home;