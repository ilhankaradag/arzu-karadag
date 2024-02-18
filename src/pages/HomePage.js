import React from 'react';
import Img from '../components/home/Img';
import HomeInformation from '../components/home/HomeInformation';
import Spacer from '../components/common/Spacer';
import Poem from '../components/poemHomePage/Poem';
import Space from '../components/common/Space';

const HomePage = () => {
  return (
    <>
      <Spacer size={20} />
      <Img />
      <Space />
      <Spacer size={20} />
      <HomeInformation />
      <Spacer size={20} />
      <Space />
      <Spacer size={20} />
      <Poem />
      <Spacer />
    </>
  );
};

export default HomePage;
