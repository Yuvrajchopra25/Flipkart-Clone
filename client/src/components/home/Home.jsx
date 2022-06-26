import { useEffect } from "react";

// components
import Banner from "./Banner";
import NavBar from "./NavBar";
import Slide from "./Slide";

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
          <Slide products={products} title="Deal of the day"/>
          <Slide products={products} title="Discounts for You"/>
          <Slide products={products} title="Suggesting Items"/>
          <Slide products={products} title="Top Selection"/>
          <Slide products={products} title="Recommended Items"/>
          <Slide products={products} title="Trending Offers"/>
          <Slide products={products} title="Season's top picks"/>
          <Slide products={products} title="Top Deals on Accessories"/>
        </Component>
      </>
    )
}

export default Home;