import React from 'react';
import Title from './Title';
import { useParams } from 'react-router-dom';

const RecipeDetails: React.FC = () => {
  const { id } = useParams();

  return (
    <React.Fragment>
      <Title>Editing recipe {id}</Title>
    </React.Fragment>
  );
};

export default RecipeDetails;